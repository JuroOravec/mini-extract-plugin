/**
 * Contexts are interfaces available in hook functions.
 */

import type webpack from 'webpack';

import type { ConstructorOptions, MiniExtractPlugin } from './subclassing';
import type { RenderManifestEntry, RenderManifestOptions } from './webpack';
import type { DependencyBase } from './base';

type LoaderContext = any;

export interface Context {
  plugin: MiniExtractPlugin;
  classOptions: MiniExtractPlugin['classOptions'];
  options: ConstructorOptions;
}

export interface CompilerContext extends Context {
  compiler: webpack.Compiler;
}

export interface CompilationContext extends CompilerContext {
  compilation: webpack.compilation.Compilation;
}

export interface RenderContext extends CompilationContext {
  renderEntries: RenderManifestEntry[];
  renderOptions: RenderManifestOptions;
}

export interface PitchContext extends Context {
  loaderContext: LoaderContext;
  remainingRequest: string;
  precedingRequest: string;
  data: any;
}

export interface PitchCompilerContext extends PitchContext {
  childCompiler: webpack.Compiler;
}

export interface PitchCompilationContext extends PitchCompilerContext {
  childCompilation: webpack.compilation.Compilation;
}

export interface LoaderModuleContext {
  source: string;
  locals: any;
  exports: any;
}

export interface LoaderFuncContext extends Context {
  loaderContext: LoaderContext;
  source: string | Buffer;
  sourceMap: string;
  data: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DependencyOptions extends DependencyBase {}
