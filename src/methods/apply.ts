import webpack from 'webpack';

import type { MiniExtractPlugin } from '../types/subclassing';
import type { CompilerContext } from '../types/context';
import type {
  Module,
  Hash,
  Chunk,
  RenderManifestEntry,
  RenderManifestOptions,
} from '../types/webpack';
import debug from '../lib/debug';
import { callTap } from '../lib/hook';
import { isIterOfIter, enumerate } from '../lib/util';
import getModuleFilename from '../lib/get-module-filename';
import renderContentAsset from '../lib/render-content-asset';
import defaultFilename from '../lib/default-filename';
import { RenderContext } from '../types/context';

// @ts-ignore
const createHash = webpack.util.createHash;

const REGEXP_CHUNKHASH = /\[chunkhash(?::(\d+))?\]/i;
const REGEXP_CONTENTHASH = /\[contenthash(?::(\d+))?\]/i;
const REGEXP_NAME = /\[name\]/i;

export default function apply(
  this: MiniExtractPlugin,
  compiler: webpack.Compiler,
) {
  debug('Started apply method');
  const context: CompilerContext = {
    plugin: this,
    classOptions: this.classOptions,
    compiler,
    options: this.options,
  };

  callTap({
    name: 'compiler',
    hooks: this.hooks,
    args: [context, undefined, undefined],
  });

  compiler.hooks.thisCompilation.tap(
    this.classOptions.pluginName,
    (compilation) => {
      debug('Started apply.compiler.thisCompilation');
      const compilationContext = { ...context, compilation };

      compilation.dependencyFactories.set(
        this.classOptions.dependencyClass,
        new this.classOptions.moduleFactoryClass(),
      );

      compilation.dependencyTemplates.set(
        this.classOptions.dependencyClass,
        new this.classOptions.dependencyTemplateClass(),
      );

      callTap({
        name: 'compilation',
        hooks: this.hooks,
        args: [compilationContext, undefined, undefined],
      });

      // TODO Replace to this in Webpack v5:
      // compilation.hooks.renderManifest.tap(
      // @ts-ignore
      compilation.mainTemplate.hooks.renderManifest.tap(
        this.classOptions.pluginName,
        (entries: RenderManifestEntry[], options: RenderManifestOptions) => {
          debug('Started apply.compiler.thisCompilation.renderManifest');
          const { chunk } = options;
          const renderContext: RenderContext = {
            ...context,
            compilation,
            renderOptions: options,
            renderEntries: entries,
          };

          const renderedModules = Array.from(chunk.modulesIterable).filter(
            (module) => module.type === this.classOptions.moduleType,
          );

          const modifiedModules = callTap({
            name: 'beforeRenderMain',
            hooks: this.hooks,
            args: [renderContext, renderedModules, undefined],
            default: [renderedModules] as Module[][],
          });

          // Convert list of modules to groups of list of modules
          const moduleGroups = isIterOfIter(modifiedModules)
            ? (modifiedModules as Module[][])
            : ([modifiedModules] as Module[][]);

          const res = callTap({
            name: 'renderMain',
            hooks: this.hooks,
            args: [renderContext, moduleGroups, undefined],
          });

          if (res) {
            entries.push(...res);
            callTap({
              name: 'afterRenderMain',
              hooks: this.hooks,
              args: [renderContext, entries, undefined],
            });
            return;
          }
          debug(
            'Hook renderMain is not used, running default implementation instead',
          );

          for (const [index, moduleGroup] of enumerate(moduleGroups)) {
            if (!moduleGroup.length) continue;
            entries.push({
              render: () =>
                renderContentAsset({
                  ignoreOrder: Boolean(this.options.ignoreOrder),
                  context: renderContext,
                  modules: moduleGroup,
                }),
              filenameTemplate: (templateOptions: {
                chunk: Chunk;
                hash: string;
                contentHashType: string;
              }) =>
                getModuleFilename({
                  default: defaultFilename(this.classOptions.type),
                  context: renderContext,
                  templateOptions,
                  modules: moduleGroup,
                }),
              pathOptions: {
                chunk,
                contentHashType: this.classOptions.moduleType,
              },
              identifier: `${this.classOptions.pluginName}.${chunk.id}.${index}`,
              hash: chunk.contentHash[this.classOptions.moduleType],
            });
          }
          callTap({
            name: 'afterRenderMain',
            hooks: this.hooks,
            args: [renderContext, entries, undefined],
          });
          debug('Done apply.compiler.thisCompilation.renderManifest');
        },
      );

      // @ts-ignore
      compilation.chunkTemplate.hooks.renderManifest.tap(
        this.classOptions.pluginName,
        (entries: RenderManifestEntry[], options: RenderManifestOptions) => {
          debug(
            'Started apply.compiler.thisCompilation.chunkTemplate.renderManifest',
          );
          const { chunk } = options;
          const renderContext: RenderContext = {
            ...context,
            compilation,
            renderOptions: options,
            renderEntries: entries,
          };

          const renderedModules = Array.from(chunk.modulesIterable).filter(
            (module) => module.type === this.classOptions.moduleType,
          );

          const modifiedModules = callTap({
            name: 'beforeRenderChunk',
            hooks: this.hooks,
            args: [renderContext, renderedModules, undefined],
            default: [renderedModules] as Module[][],
          });

          // Convert list of modules to groups of list of modules
          const moduleGroups = isIterOfIter(modifiedModules)
            ? (modifiedModules as Module[][])
            : [modifiedModules as Module[]];

          const res = callTap({
            name: 'renderChunk',
            hooks: this.hooks,
            args: [renderContext, moduleGroups, undefined],
          });

          if (res) {
            entries.push(...res);
            callTap({
              name: 'afterRenderChunk',
              hooks: this.hooks,
              args: [renderContext, entries, undefined],
            });
            return;
          }
          debug(
            'Hook renderChunk is not used, running default implementation instead',
          );

          for (const [index, moduleGroup] of enumerate(moduleGroups)) {
            if (!moduleGroup.length) continue;
            entries.push({
              render: () =>
                renderContentAsset({
                  ignoreOrder: Boolean(this.options.ignoreOrder),
                  context: renderContext,
                  modules: moduleGroup,
                }),
              filenameTemplate: this.options.chunkFilename!,
              // TODO
              // filenameTemplate: getChunkFilename(
              //   this.options.chunkFilename,
              //   DEFAULT_FILENAME,
              //   renderContext,
              //   moduleGroup as Module[]
              // ),
              pathOptions: {
                chunk,
                contentHashType: this.classOptions.moduleType,
              },
              identifier: `${this.classOptions.pluginName}.${chunk.id}.${index}`,
              hash: chunk.contentHash[this.classOptions.moduleType],
            });
          }
          callTap({
            name: 'afterRenderChunk',
            hooks: this.hooks,
            args: [renderContext, entries, undefined],
          });
          debug(
            'Done apply.compiler.thisCompilation.chunkTemplate.renderManifest',
          );
        },
      );

      // @ts-ignore
      compilation.mainTemplate.hooks.hashForChunk.tap(
        this.classOptions.pluginName,
        (hash, chunk) => {
          debug(
            'Starting apply.compiler.thisCompilation.mainTemplate.hashForChunk',
          );
          const { chunkFilename } = this.options as { chunkFilename: string };

          if (REGEXP_CHUNKHASH.test(chunkFilename)) {
            hash.update(JSON.stringify(chunk.getChunkMaps(true).hash));
          }

          if (REGEXP_CONTENTHASH.test(chunkFilename)) {
            hash.update(
              JSON.stringify(
                chunk.getChunkMaps(true).contentHash[
                  this.classOptions.moduleType
                ] || {},
              ),
            );
          }

          if (REGEXP_NAME.test(chunkFilename)) {
            hash.update(JSON.stringify(chunk.getChunkMaps(true).name));
          }
          debug(
            'Done apply.compiler.thisCompilation.mainTemplate.hashForChunk',
          );
        },
      );

      // @ts-ignore
      compilation.hooks.contentHash.tap(
        this.classOptions.pluginName,
        (chunk: Chunk) => {
          debug('Starting apply.compiler.thisCompilation.contentHash');
          const { outputOptions } = compilation;
          const { hashFunction, hashDigest, hashDigestLength } = outputOptions;
          const hash: Hash = createHash(hashFunction);

          for (const m of chunk.modulesIterable) {
            if (m.type === this.classOptions.moduleType) m.updateHash(hash);
          }

          const { contentHash } = chunk;

          contentHash[this.classOptions.moduleType] = hash
            .digest(hashDigest)
            .substring(0, hashDigestLength);
          debug('Done apply.compiler.thisCompilation.contentHash');
        },
      );
      debug('Finished apply.compiler.thisCompilation');
    },
  );
  debug('Finished apply method');
}
