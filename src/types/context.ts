/**
 * Contexts are interfaces available in hook functions.
 */

import type webpack from 'webpack';

import type { MiniExtractPlugin } from './subclassing';
import type { RenderManifestEntry, RenderManifestOptions } from './webpack';
import type { DependencyBase } from './base';

type LoaderContext = any;

/**
 * Common properties present in all context objects.
 */
export interface ContextBase<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> {
  plugin: MEP;
  classOptions: MEP['classOptions'];
  options: MEP['options'];
}

/**
 * Context object with compiler instance exposed to the plugin's `apply`
 * method.
 */
export interface CompilerContext<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> extends ContextBase<MEP> {
  compiler: webpack.Compiler;
}

/**
 * Context object extending `CompilationContext` with compilation instance
 * exposed to the compiler's `thisCompilation` hook.
 */
export interface CompilationContext<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> extends CompilerContext<MEP> {
  compilation: webpack.compilation.Compilation;
}

export interface RenderContext<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> extends CompilationContext<MEP> {
  renderEntries: RenderManifestEntry[];
  renderOptions: RenderManifestOptions;
}

export interface PitchContext<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> extends ContextBase<MEP> {
  loaderContext: LoaderContext;
  remainingRequest: string;
  precedingRequest: string;
  data: any;
}

export interface PitchCompilerContext<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> extends PitchContext<MEP> {
  childCompiler: webpack.Compiler;
}

export interface PitchCompilationContext<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> extends PitchCompilerContext<MEP> {
  childCompilation: webpack.compilation.Compilation;
}

export interface LoaderModuleContext {
  source: string;
  locals: any;
  exports: any;
}

export interface LoaderFuncContext<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> extends ContextBase<MEP> {
  loaderContext: LoaderContext;
  source: string | Buffer;
  sourceMap: string;
  data: any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DependencyOptions extends DependencyBase {}
