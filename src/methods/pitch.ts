import loaderUtils from 'loader-utils';
import validateOptions from 'schema-utils';
import webpack, { Compiler } from 'webpack';
// @ts-ignore
import NodeTemplatePlugin from 'webpack/lib/node/NodeTemplatePlugin';
// @ts-ignore
import NodeTargetPlugin from 'webpack/lib/node/NodeTargetPlugin';
// @ts-ignore
import LibraryTemplatePlugin from 'webpack/lib/LibraryTemplatePlugin';
// @ts-ignore
import SingleEntryPlugin from 'webpack/lib/SingleEntryPlugin';
// @ts-ignore
import LimitChunkCountPlugin from 'webpack/lib/optimize/LimitChunkCountPlugin';

import type { Module } from '../types/webpack';
import type { DependencyOptions, PitchContext } from '../types/context';
import type { MiniExtractPlugin } from '../types/subclassing';

import debug from '../lib/debug';
import hotLoader from '../lib/hot-loader';
import * as moduleLib from '../lib/module';
import { callTap } from '../lib/hook';

export default async function pitch(
  this: MiniExtractPlugin,
  loaderContext: any,
  remainingRequest: string,
  precedingRequest: string,
  data: object,
) {
  debug('Started pitch method');
  const callback = loaderContext.async();

  const pitchContext: PitchContext = {
    plugin: this,
    classOptions: this.classOptions,
    options: this.options,
    loaderContext,
    remainingRequest,
    precedingRequest,
    data,
  };

  await callTap({
    name: 'pitch',
    hooks: this.hooks,
    args: [pitchContext, undefined, undefined],
  });

  const options = loaderUtils.getOptions(loaderContext) || {};

  validateOptions(
    this.classOptions.loaderOptionsSchema,
    options,
    // @ts-ignore
    `${this.classOptions.displayName} Loader`,
  );

  const loaders = loaderContext.loaders.slice(loaderContext.loaderIndex + 1);

  loaderContext.addDependency(loaderContext.resourcePath);

  const childFilename = '*';
  const publicPath =
    typeof options.publicPath === 'string'
      ? options.publicPath === '' || options.publicPath.endsWith('/')
        ? options.publicPath
        : `${options.publicPath}/`
      : typeof options.publicPath === 'function'
      ? options.publicPath(
          loaderContext.resourcePath,
          loaderContext.rootContext,
        )
      : loaderContext._compilation.outputOptions.publicPath;
  const outputOptions = {
    filename: childFilename,
    publicPath,
  };

  const childCompiler: Compiler = loaderContext._compilation.createChildCompiler(
    `${this.classOptions.pluginName} ${remainingRequest}`,
    outputOptions,
  );

  new NodeTemplatePlugin(outputOptions).apply(childCompiler);
  new LibraryTemplatePlugin(null, 'commonjs2').apply(childCompiler);
  new NodeTargetPlugin().apply(childCompiler);
  new SingleEntryPlugin(
    loaderContext.context,
    `!!${remainingRequest}`,
    this.classOptions.pluginName,
  ).apply(childCompiler);
  new LimitChunkCountPlugin({ maxChunks: 1 }).apply(childCompiler);

  const pitchCompilerContext = {
    ...pitchContext,
    childCompiler,
  };
  await callTap({
    name: 'childCompiler',
    hooks: this.hooks,
    args: [pitchCompilerContext, undefined, undefined],
  });

  childCompiler.hooks.thisCompilation.tap(
    `${this.classOptions.pluginName} loader`,
    (compilation) => {
      debug('Started pitch.childCompiler.thisCompilation');
      compilation.hooks.normalModuleLoader.tap(
        `${this.classOptions.pluginName} loader`,
        (childLoaderContext, module) => {
          debug(
            'Started pitch.childCompiler.thisCompilation.normalModuleLoader',
          );
          const mod: Module = module as any;
          // eslint-disable-next-line no-param-reassign
          childLoaderContext.emitFile = loaderContext.emitFile;
          if (mod.request === remainingRequest) {
            // eslint-disable-next-line no-param-reassign
            // @ts-ignore
            module.loaders = loaders.map((loader) => {
              return {
                loader: loader.path,
                options: loader.options,
                ident: loader.ident,
              };
            });
          }
          debug('Done pitch.childCompiler.thisCompilation.normalModuleLoader');
        },
      );
      debug('Done pitch.childCompiler.thisCompilation');
    },
  );

  let source: string;

  childCompiler.hooks.afterCompile.tapPromise(
    this.classOptions.pluginName,
    async (compilation) => {
      debug('Started pitch.childCompiler.afterCompile');
      const pitchCompilationContext = {
        ...pitchCompilerContext,
        childCompilation: compilation,
      };
      // Let hooks modify the source
      source = await callTap({
        name: 'source',
        hooks: this.hooks,
        args: [pitchCompilationContext, undefined, undefined],
        default: compilation.assets[childFilename]?.source(),
      });

      // Remove all chunk assets
      compilation.chunks.forEach((chunk) => {
        chunk.files.forEach((file: any) => {
          delete compilation.assets[file]; // eslint-disable-line no-param-reassign
        });
      });
      debug('Done pitch.childCompiler.afterCompile');
    },
  );

  // @ts-ignore
  childCompiler.runAsChild(
    (
      err: Error,
      entries: any,
      compilation: webpack.compilation.Compilation,
    ) => {
      debug('Started pitch.childCompiler.runAsChild');
      const pitchCompilationContext = {
        ...pitchCompilerContext,
        childCompilation: compilation,
      };
      callTap({
        name: 'childCompilation',
        hooks: this.hooks,
        args: [pitchCompilationContext, undefined, undefined],
      });

      const addDependencies = (dependencies: DependencyOptions[]) => {
        if (!Array.isArray(dependencies) && dependencies != null) {
          throw new Error(
            `Exported value was not extracted as an array: ${JSON.stringify(
              dependencies,
            )}`,
          );
        }

        const identifierCountMap = new Map();

        for (const dependency of dependencies) {
          const count = identifierCountMap.get(dependency.identifier) || 0;
          loaderContext._module.addDependency(
            new this.classOptions.dependencyClass(
              dependency,
              dependency.context,
              count,
            ),
          );
          identifierCountMap.set(dependency.identifier, count + 1);
        }
      };

      if (err) return callback(err);

      if (compilation.errors.length > 0) {
        return callback(compilation.errors[0]);
      }

      compilation.fileDependencies.forEach((dep) => {
        loaderContext.addDependency(dep);
      }, loaderContext);

      compilation.contextDependencies.forEach((dep) => {
        loaderContext.addContextDependency(dep);
      }, loaderContext);

      if (!source) {
        return callback(new Error("Didn't get a result from child compiler"));
      }

      let locals;

      try {
        debug(`Evaluating source of module "${remainingRequest}"`);
        let exports = moduleLib.evalCode(
          loaderContext,
          source,
          remainingRequest,
        );
        // eslint-disable-next-line no-underscore-dangle
        exports = exports.__esModule ? exports.default : exports;
        locals = exports && exports.locals;
        const exportsData = !Array.isArray(exports)
          ? [[null, exports]]
          : exports;

        const loaderModuleContext = { source, locals, exports: exportsData };
        const dependencies: DependencyOptions[] = [];

        // Get dependencies from hooks if any
        let deps: DependencyOptions[] = callTap({
          name: 'dependency',
          hooks: this.hooks,
          args: [pitchCompilationContext, loaderModuleContext, undefined],
        });
        // Default behaviour
        if (deps === undefined) {
          deps = [];
          for (const [id, content] of exportsData) {
            const mod = moduleLib.findById(compilation.modules, id);
            if (!mod) continue;
            deps.push({
              identifier: mod.identifier(),
              context: mod.context,
              content,
              miniExtractType: this.classOptions.type,
              moduleType: this.classOptions.moduleType,
            });
          }
        }
        dependencies.push(...deps);
        addDependencies(dependencies);
      } catch (e) {
        return callback(e);
      }

      const esModule =
        typeof options.esModule !== 'undefined' ? options.esModule : false;
      const result = locals
        ? `\n${
            esModule ? 'export default' : 'module.exports ='
          } ${JSON.stringify(locals)};`
        : '';

      let resultSource = `// extracted by ${this.classOptions.pluginName}`;

      resultSource += options.hmr
        ? hotLoader(result, {
            context: loaderContext.context,
            options,
            locals,
            type: this.classOptions.type,
          })
        : result;

      resultSource = callTap({
        name: 'extracted',
        hooks: this.hooks,
        args: [pitchCompilationContext, resultSource, undefined],
        default: resultSource,
      });

      debug('Done pitch.childCompiler.runAsChild');

      debug('Calling loaderContext async callback in pitch');
      return callback(null, resultSource);
    },
  );
  debug('Done pitch method');
}
