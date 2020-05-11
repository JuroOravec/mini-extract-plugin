import type { Taps } from '../mini-css-extract-plugin/types';
import {
  validatePlugin,
  validateDefinedObject,
  validatePitchCompilationContext,
  validateDefinedString,
  validateOutputOptions,
  validateRenderContext,
  validateModuleGroups,
  validateRenderManifestEntry,
  validateModules,
  validateCompilationContext,
  validateSource,
  validatePitchCompilerContext,
  validateCompilerContext,
  validatePitchContext,
} from './validators';

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
