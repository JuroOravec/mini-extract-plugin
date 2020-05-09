import webpack, { Compiler } from 'webpack';
// @ts-ignore
import Compilation from 'webpack/lib/Compilation';
// @ts-ignore
import Chunk from 'webpack/lib/Chunk';
// @ts-ignore
import Module from 'webpack/lib/Module';
// @ts-ignore
import RequestShortener from 'webpack/lib/RequestShortener';
import { Source } from 'webpack-sources';
import { Ploadin } from 'ploadin';

import { Taps } from '../../../src/types/hook';
import {
  Module as IModule,
  RenderManifestEntry,
} from '../../../src/types/webpack';
import * as context from '../../../src/types/context';
import {
  ClassOptions,
  MiniExtractPlugin,
} from '../../../src/types/subclassing';

function validateDefinedString(s: any) {
  expect(typeof s).toBe('string');
  expect(s).toBeTruthy();
}

function validateClassOptions(options: ClassOptions) {
  const {
    className,
    displayName,
    pluginName,
    type,
    moduleType,
    hooks,
    dependencyClass,
    dependencyTemplateClass,
    moduleFactoryClass,
    loaderOptionsSchema,
    pluginOptionsSchema,
  } = options;
  validateDefinedString(className);
  validateDefinedString(displayName);
  validateDefinedString(pluginName);
  validateDefinedString(type);
  validateDefinedString(moduleType);

  expect(dependencyClass).toBeDefined();
  expect(dependencyClass).not.toBeNull();

  expect(dependencyTemplateClass).toBeDefined();
  expect(dependencyTemplateClass).not.toBeNull();

  expect(moduleFactoryClass).toBeDefined();
  expect(moduleFactoryClass).not.toBeNull();

  expect(loaderOptionsSchema).toBeDefined();
  expect(typeof loaderOptionsSchema).toBe('object');

  expect(pluginOptionsSchema).toBeDefined();
  expect(typeof pluginOptionsSchema).toBe('object');

  expect(hooks).toBeDefined();
  expect(Array.isArray(hooks)).toBe(true);
}

function validateLoaderContext(context: any) {
  expect(context).toBeDefined();
  expect(typeof context).toBe('object');
}

function validatePlugin(plugin: MiniExtractPlugin) {
  expect(plugin).toBeDefined();
  expect(plugin instanceof Ploadin).toBe(true);
}

function validateCompiler(compiler: webpack.Compiler) {
  expect(compiler).toBeDefined;
  expect(compiler instanceof Compiler).toBe(true);
}

function validateCompilation(compilation: webpack.compilation.Compilation) {
  expect(compilation).toBeDefined;
  expect(compilation instanceof Compilation).toBe(true);
}

function validateOptions(options: MiniExtractPlugin['options']) {
  /**
   * Not much to check here as these values are user-defined and optional
   * - chunkFilename
   * - filename
   * - ignoreOrder
   * - moduleFilename
   */
}

function validateContext(context: context.Context) {
  const { classOptions, plugin, options } = context;
  validateClassOptions(classOptions);
  validatePlugin(plugin);
  validateOptions(options);
}

function validateCompilerContext(context: context.CompilerContext) {
  const { compiler } = context;
  validateContext(context);
  validateCompiler(compiler);
}

function validateCompilationContext(context: context.CompilationContext) {
  const { compilation } = context;
  validateCompilerContext(context);
  validateCompilation(compilation);
}

function validatePitchContext(context: context.PitchContext) {
  const { loaderContext, precedingRequest, remainingRequest } = context;

  validateContext(context);
  validateLoaderContext(loaderContext);
  validateDefinedString(remainingRequest);

  // the string might be empty if it's the first loader?
  expect(typeof precedingRequest).toBe('string');
}

function validatePitchCompilerContext(context: context.PitchCompilerContext) {
  const { childCompiler } = context;
  validatePitchContext(context);
  validateCompiler(childCompiler);
}

function validatePitchCompilationContext(
  context: context.PitchCompilationContext,
) {
  const { childCompilation } = context;
  validatePitchCompilerContext(context);
  validateCompilation(childCompilation);
}

function validateRenderContext(context: context.RenderContext) {
  validateCompilationContext(context);

  const { renderOptions, renderEntries } = context;

  expect(renderOptions).toBeDefined();
  expect(typeof renderOptions).toBe('object');
  expect(renderOptions.chunk instanceof Chunk);

  expect(renderEntries).toBeDefined();
  expect(Array.isArray(renderEntries)).toBe(true);
}

function validateModules(modules: webpack.compilation.Module[] | IModule[]) {
  expect(modules).toBeDefined();
  expect(Array.isArray(modules)).toBe(true);

  if (modules.length) {
    expect(modules.every((m) => m instanceof Module)).toBe(true);
  }
}

function validateModuleGroups(
  moduleGroups: webpack.compilation.Module[][] | IModule[][],
) {
  expect(moduleGroups).toBeDefined();
  expect(Array.isArray(moduleGroups)).toBe(true);

  // @ts-ignore
  moduleGroups.map(validateModules);
}

function validateRenderManifestEntry(entry: RenderManifestEntry) {
  const { filenameTemplate, identifier, render } = entry;
  if (typeof filenameTemplate !== 'function') {
    validateDefinedString(filenameTemplate);
  }
  validateDefinedString(identifier);
  expect(typeof render).toBe('function');
}

function validateSource(source: Source) {
  expect(source).toBeDefined();
  expect(source instanceof Source).toBe(true);
}

/**
 * Ensure that the info on the compiler's output filename is accessible
 */
function validateOutputOptions(outputOptions: webpack.Output) {
  const { filename, publicPath } = outputOptions;
  validateDefinedString(filename);

  // Public path may be empty if not passed as option
  if (publicPath !== undefined) {
    expect(typeof publicPath).toBe('string');
  }
}

/**
 * Hook functions that test that the correct arguments are being passed to the
 * functions
 */
const validators: Taps = {
  dependency: (context, dependency) => {
    validatePitchCompilationContext(context);
    validateOutputOptions(context.childCompiler.options.output!);
    const {
      // exported, // TODO test for exported?
      source,
      // locals // TODO test for locals?
    } = dependency;

    validateDefinedString(source);

    return undefined as any;
  },

  extracted: (context, source) => {
    validatePitchCompilationContext(context);
    validateDefinedString(source);

    return undefined as any;
  },

  source: (context) => {
    validatePitchCompilationContext(context);
    validateOutputOptions(context.childCompiler.options.output!);
    return undefined as any;
  },

  beforeRenderMain: (renderContext, renderedModules) => {
    validateRenderContext(renderContext);

    return undefined as any;
  },

  renderMain: (renderContext, moduleGroups) => {
    validateRenderContext(renderContext);
    validateModuleGroups(moduleGroups);
    return undefined as any;
  },

  afterRenderMain: (renderContext, entries) => {
    validateRenderContext(renderContext);
    entries.map(validateRenderManifestEntry);

    const { filenameTemplate, identifier, render } = entries[0];
    typeof filenameTemplate !== 'function' &&
      validateDefinedString(filenameTemplate);
    validateDefinedString(identifier);
    typeof render === 'function';
  },

  beforeRenderChunk: (renderContext, modules) => {
    validateRenderContext(renderContext);
    validateModules(modules);
    return undefined as any;
  },

  renderChunk: (renderContext, moduleGroups) => {
    validateRenderContext(renderContext);
    validateModuleGroups(moduleGroups);
    return undefined as any;
  },

  afterRenderChunk: (renderContext, entries) => {
    validateRenderContext(renderContext);
    entries.map(validateRenderManifestEntry);
  },

  beforeMerge: (context, modules) => {
    validateCompilationContext(context);
    validateModules(modules);
    return undefined as any;
  },

  merge: (context, modules) => {
    validateCompilationContext(context);
    validateModules(modules);
    return undefined as any;
  },

  afterMerge: (context, resultSource) => {
    validateCompilationContext(context);
    validateSource(resultSource);
  },

  childCompilation: (context) => {
    validatePitchCompilationContext(context);
    validateOutputOptions(context.childCompiler.options.output!);
  },
  childCompiler: (context) => {
    validatePitchCompilerContext(context);
    validateOutputOptions(context.childCompiler.options.output!);
  },
  compilation: (context) => {
    validateCompilationContext(context);
  },
  compiler: (context) => {
    validateCompilerContext(context);
  },
  pitch: (context) => {
    validatePitchContext(context);
  },
};

export default validators;
