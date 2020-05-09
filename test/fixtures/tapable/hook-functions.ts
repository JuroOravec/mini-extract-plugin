import { ConcatSource, OriginalSource } from 'webpack-sources';

import { util, types } from '../../../src';
import { enumerate } from '../../../src/lib/util';
import renderContentAsset from '../../../src/lib/render-content-asset';
import getModuleFilename from '../../../src/lib/get-module-filename';
import defaultFilename from '../../../src/lib/default-filename';
import { DependencyOptions } from '../mini-css-extract-plugin/types';

/**
 * Hook functions that implement default behaviour to test whether hooks that
 * expect functions to modify/return the value work well
 */
const hookFunctions: Partial<types.hook.Taps> = {
  dependency: (context, dependency) => {
    const { childCompilation, classOptions } = context;
    const deps: DependencyOptions[] = [];
    for (const [id, content, media, sourceMap] of dependency.exports) {
      const mod = util.module.findById(
        childCompilation.modules as types.webpack.Module[],
        id,
      );
      if (!mod) continue;
      deps.push({
        miniExtractType: classOptions.type,
        moduleType: classOptions.moduleType,
        identifier: mod.identifier(),
        context: mod.context,
        content,
        media,
        sourceMap,
      });
    }
    return deps;
  },

  source: (context) => {
    const {
      childCompiler: {
        options: { output: { filename } = {} },
      },
      childCompilation: { assets },
    } = context;
    return assets[filename as string]?.source();
  },

  beforeRenderMain: (renderContext, renderedModules) => renderedModules,

  renderMain: (context, moduleGroups) => {
    const {
      compilation,
      renderOptions: { chunk },
    } = context;
    const res: ReturnType<types.hook.Taps['renderMain']> = [];
    for (const [index, moduleGroup] of enumerate(moduleGroups)) {
      if (!moduleGroup.length) continue;
      res.push({
        render: () =>
          renderContentAsset({
            ignoreOrder: Boolean(context.options.ignoreOrder),
            context,
            modules: moduleGroup,
            // @ts-ignore
            requestShortener: compilation.runtimeTemplate.requestShortener,
          }),
        filenameTemplate: (templateOptions: {
          chunk: types.webpack.Chunk;
          hash: string;
          contentHashType: string;
        }) =>
          getModuleFilename({
            context,
            templateOptions,
            default: defaultFilename(context.classOptions.type),
            modules: moduleGroup,
          }),
        pathOptions: {
          chunk,
          contentHashType: context.classOptions.moduleType,
        },
        identifier: `${context.classOptions.pluginName}.${chunk.id}.${index}`,
        hash: chunk.contentHash[context.classOptions.moduleType],
      });
    }
    return res;
  },

  beforeRenderChunk: (context, modules) => [modules],

  renderChunk: (context, moduleGroups) => {
    const res: ReturnType<types.hook.Taps['renderChunk']> = [];
    const { renderOptions } = context;
    const { chunk } = renderOptions;

    for (const [index, moduleGroup] of enumerate(moduleGroups)) {
      if (!moduleGroup.length) continue;
      res.push({
        render: () =>
          renderContentAsset({
            ignoreOrder: Boolean(context.options.ignoreOrder),
            context,
            modules: moduleGroup,
          }),
        filenameTemplate: context.options.chunkFilename!,
        pathOptions: {
          chunk,
          contentHashType: context.classOptions.moduleType,
        },
        identifier: `${context.classOptions.pluginName}.${chunk.id}.${index}`,
        hash: chunk.contentHash[context.classOptions.moduleType],
      });
    }
    return res;
  },

  beforeMerge: (context, modules) => modules,

  merge: (context, modules) => {
    const {
      compilation: { requestShortener },
    } = context;
    const source = new ConcatSource();
    for (const mod of modules) {
      source.add(
        new OriginalSource(
          mod.content,
          mod.readableIdentifier(requestShortener),
        ),
      );
      source.add('\n');
    }
    source.add('\n');
    const result = new ConcatSource(source);
    return result;
  },
  extracted: (context, source) => source,
};

export default hookFunctions;
