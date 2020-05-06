import { ConcatSource, OriginalSource, Source } from 'webpack-sources';

import type { RenderContext } from '../types/context';
import type { Module, RequestShortener, ChunkGroup } from '../types/webpack';
import { callTap } from './hook';
import debug from './debug';

export type RenderContentAssetOptions = {
  context: RenderContext;
  modules: Module[];
  ignoreOrder: boolean;
};

export default function renderContentAsset({
  context,
  modules,
  ignoreOrder,
}: RenderContentAssetOptions): Source {
  debug('Started renderContentAsset');
  const {
    plugin,
    compilation,
    classOptions: { pluginName },
    renderOptions: { chunk },
  } = context;
  const { requestShortener } = compilation.runtimeTemplate as {
    requestShortener: RequestShortener;
  };
  // set with already included modules in correct order
  const usedModulesSet = new Set() as Set<Module>;

  const [chunkGroup] = chunk.groupsIterable;

  // @ts-ignore
  if (typeof chunkGroup.getModuleIndex2 === 'function') {
    // Store dependencies for modules
    const moduleDependencies = new Map(modules.map((m) => [m, new Set()]));
    const moduleDependenciesReasons = new Map(
      modules.map((m) => [m, new Map() as Map<Module, ChunkGroup>]),
    );

    // Get ordered list of modules per chunk group
    // This loop also gathers dependencies from the ordered lists
    // Lists are in reverse order to allow to use Array.pop()
    const modulesByChunkGroup = Array.from(chunk.groupsIterable, (cg) => {
      const sortedModules = modules
        .map((m) => {
          return {
            module: m,
            index: cg.getModuleIndex2(m),
          };
        })
        // eslint-disable-next-line no-undefined
        .filter((item) => item.index !== undefined)
        .sort((a, b) => b.index! - a.index!)
        .map((item) => item.module);

      for (let i = 0; i < sortedModules.length; i++) {
        const set = moduleDependencies.get(sortedModules[i]) as Set<Module>;
        const reasons = moduleDependenciesReasons.get(sortedModules[i]) as Map<
          Module,
          any
        >;

        for (let j = i + 1; j < sortedModules.length; j++) {
          const module = sortedModules[j];
          set.add(module);
          const reason = reasons.get(module) || new Set();
          reason.add(cg);
          reasons.set(module, reason);
        }
      }

      return sortedModules;
    });

    const unusedModulesFilter = (m: Module) => !usedModulesSet.has(m);

    while (usedModulesSet.size < modules.length) {
      let success = false;
      let bestMatch: Module[] = [];
      let bestMatchDeps: Module[] = [];

      // get first module where dependencies are fulfilled
      for (const list of modulesByChunkGroup) {
        // skip and remove already added modules
        while (list.length > 0 && usedModulesSet.has(list[list.length - 1])) {
          list.pop();
        }

        // skip empty lists
        if (list.length !== 0) {
          const module = list[list.length - 1];
          const deps = moduleDependencies.get(module);
          // determine dependencies that are not yet included
          // @ts-ignore
          const failedDeps = Array.from(deps).filter(unusedModulesFilter);

          // store best match for fallback behavior
          if (!bestMatchDeps || bestMatchDeps.length > failedDeps.length) {
            bestMatch = list;
            bestMatchDeps = failedDeps;
          }

          if (failedDeps.length === 0) {
            // use this module and remove it from list
            usedModulesSet.add(list.pop() as any);
            success = true;
            break;
          }
        }
      }

      if (!success) {
        // no module found => there is a conflict
        // use list with fewest failed deps
        // and emit a warning
        const fallbackModule = bestMatch.pop() as Module;

        if (!ignoreOrder) {
          const reasons = moduleDependenciesReasons.get(fallbackModule);
          compilation.warnings.push(
            new Error(
              [
                `chunk ${chunk.name || chunk.id} [${pluginName}]`,
                'Conflicting order. Following module has been added:',
                ` * ${fallbackModule.readableIdentifier(requestShortener)}`,
                'despite it was not able to fulfill desired ordering with these modules:',
                ...bestMatchDeps.map((m) => {
                  const goodReasonsMap = moduleDependenciesReasons.get(m);
                  const goodReasons =
                    goodReasonsMap && goodReasonsMap.get(fallbackModule);
                  const failedChunkGroups = Array.from(
                    // @ts-ignore
                    reasons.get(m),
                    // @ts-ignore
                    (cg) => cg.name,
                  ).join(', ');
                  const goodChunkGroups =
                    goodReasons &&
                    // @ts-ignore
                    Array.from(goodReasons, (cg) => cg.name).join(', ');
                  return [
                    ` * ${m.readableIdentifier(requestShortener)}`,
                    `   - couldn't fulfill desired order of chunk group(s) ${failedChunkGroups}`,
                    goodChunkGroups &&
                      `   - while fulfilling desired order of chunk group(s) ${goodChunkGroups}`,
                  ]
                    .filter(Boolean)
                    .join('\n');
                }),
              ].join('\n'),
            ),
          );
        }

        usedModulesSet.add(fallbackModule);
      }
    }
  } else {
    // mini-css-extract-plugin's comment
    // fallback for older webpack versions
    // (to avoid a breaking change)
    // TODO remove this in next major version
    // and increase minimum webpack version to 4.12.0
    modules
      .sort((a, b) => a.index2 - b.index2)
      .forEach((m) => usedModulesSet.add(m));
  }

  const usedModules: Module[] = callTap({
    name: 'beforeMerge',
    hooks: plugin.hooks,
    args: [context, Array.from(usedModulesSet), undefined],
    default: Array.from(usedModulesSet),
  });

  let result = callTap({
    name: 'merge',
    hooks: plugin.hooks,
    args: [context, usedModules, undefined],
  });
  if (result) {
    callTap({
      name: 'afterMerge',
      hooks: plugin.hooks,
      args: [context, result, undefined],
    });
    return result;
  }
  debug('Hook merge is not used, running default implementation instead');

  // Default behaviour - concat contents
  const source = new ConcatSource();
  for (const mod of usedModules) {
    source.add(
      new OriginalSource(mod.content, mod.readableIdentifier(requestShortener)),
    );
    source.add('\n');
  }
  source.add('\n');
  result = new ConcatSource(source);

  callTap({
    name: 'afterMerge',
    hooks: plugin.hooks,
    args: [context, result, undefined],
  });
  debug('Done renderContentAsset');
  return result;
}
