import { Compiler, compilation, Output } from 'webpack';
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

import type { Taps } from '../mini-css-extract-plugin/types';
import {
  Module as IModule,
  RenderManifestEntry,
} from '../../../src/types/webpack';
import * as context from '../../../src/types/context';
import {
  ClassOptions,
  MiniExtractPlugin,
} from '../../../src/types/subclassing';

export function validateDefinedString(s: any) {
  expect(typeof s).toBe('string');
  expect(s).toBeTruthy();
}

export function validateDefinedObject(o: any) {
  expect(o).toBeDefined();
  expect(typeof o).toBe('object');
}

export function validateClassOptions(options: ClassOptions) {
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

  validateDefinedObject(loaderOptionsSchema);
  validateDefinedObject(pluginOptionsSchema);

  expect(hooks).toBeDefined();
  expect(Array.isArray(hooks)).toBe(true);
}

export function validateLoaderContext(context: any) {
  validateDefinedObject(context);
}

export function validatePlugin(plugin: MiniExtractPlugin) {
  expect(plugin).toBeDefined();
  expect(plugin instanceof Ploadin).toBe(true);
}

export function validateCompiler(compiler: Compiler) {
  expect(compiler).toBeDefined;
  expect(compiler instanceof Compiler).toBe(true);
}

export function validateCompilation(compilation: compilation.Compilation) {
  expect(compilation).toBeDefined;
  expect(compilation instanceof Compilation).toBe(true);
}

export function validateOptions(options: MiniExtractPlugin['options']) {
  /**
   * Not much to check here as these values are user-defined and optional
   * - chunkFilename
   * - filename
   * - ignoreOrder
   * - moduleFilename
   */
}

export function validateContext(
  context: context.ContextBase<MiniExtractPlugin>,
) {
  const { classOptions, plugin, options } = context;
  validateClassOptions(classOptions);
  validatePlugin(plugin);
  validateOptions(options);
}

export function validateCompilerContext(
  context: context.CompilerContext<MiniExtractPlugin>,
) {
  const { compiler } = context;
  validateContext(context);
  validateCompiler(compiler);
}

export function validateCompilationContext(
  context: context.CompilationContext<MiniExtractPlugin>,
) {
  const { compilation } = context;
  validateCompilerContext(context);
  validateCompilation(compilation);
}

export function validatePitchContext(
  context: context.PitchContext<MiniExtractPlugin>,
) {
  const { loaderContext, precedingRequest, remainingRequest } = context;

  validateContext(context);
  validateLoaderContext(loaderContext);
  validateDefinedString(remainingRequest);

  // the string might be empty if it's the first loader?
  expect(typeof precedingRequest).toBe('string');
}

export function validatePitchCompilerContext(
  context: context.PitchCompilerContext<MiniExtractPlugin>,
) {
  const { childCompiler } = context;
  validatePitchContext(context);
  validateCompiler(childCompiler);
}

export function validatePitchCompilationContext(
  context: context.PitchCompilationContext<MiniExtractPlugin>,
) {
  const { childCompilation } = context;
  validatePitchCompilerContext(context);
  validateCompilation(childCompilation);
}

export function validateRenderContext(
  context: context.RenderContext<MiniExtractPlugin>,
) {
  validateCompilationContext(context);

  const { renderOptions, renderEntries } = context;

  validateDefinedObject(renderOptions);
  expect(renderOptions.chunk instanceof Chunk);

  expect(renderEntries).toBeDefined();
  expect(Array.isArray(renderEntries)).toBe(true);
}

export function validateModules(modules: compilation.Module[] | IModule[]) {
  expect(modules).toBeDefined();
  expect(Array.isArray(modules)).toBe(true);

  if (modules.length) {
    expect(modules.every((m) => m instanceof Module)).toBe(true);
  }
}

export function validateModuleGroups(
  moduleGroups: compilation.Module[][] | IModule[][],
) {
  expect(moduleGroups).toBeDefined();
  expect(Array.isArray(moduleGroups)).toBe(true);

  // @ts-ignore
  moduleGroups.map(validateModules);
}

export function validateRenderManifestEntry(entry: RenderManifestEntry) {
  const { filenameTemplate, identifier, render } = entry;
  if (typeof filenameTemplate !== 'function') {
    validateDefinedString(filenameTemplate);
  }
  validateDefinedString(identifier);
  expect(typeof render).toBe('function');
}

export function validateSource(source: Source) {
  expect(source).toBeDefined();
  expect(source instanceof Source).toBe(true);
}

/**
 * Ensure that the info on the compiler's output filename is accessible
 */
export function validateOutputOptions(outputOptions: Output) {
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
const hookValidators: Taps = {
  initialize: (instance, options) => {
    validatePlugin(instance);
    validateDefinedObject(options);
  },

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

export default hookValidators;
