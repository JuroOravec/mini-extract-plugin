/**
 * Contexts are interfaces available in hook functions.
 */

import type { Compiler, compilation } from 'webpack';

import type { AbstractMiniExtractPlugin } from './subclassing-abstract';
import type { RenderManifestEntry, RenderManifestOptions } from './webpack';

type LoaderContext = any;

/**
 * Common properties present in all context objects.
 */
export interface ContextBase<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
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
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> extends ContextBase<MEP> {
  compiler: Compiler;
}

/**
 * Context object extending `CompilationContext` with compilation instance
 * exposed to the compiler's `thisCompilation` hook.
 */
export interface CompilationContext<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> extends CompilerContext<MEP> {
  compilation: compilation.Compilation;
}

export interface RenderContext<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> extends CompilationContext<MEP> {
  renderEntries: RenderManifestEntry[];
  renderOptions: RenderManifestOptions;
}

export interface PitchContext<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> extends ContextBase<MEP> {
  loaderContext: LoaderContext;
  remainingRequest: string;
  precedingRequest: string;
  data: any;
}

export interface PitchCompilerContext<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> extends PitchContext<MEP> {
  childCompiler: Compiler;
}

export interface PitchCompilationContext<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> extends PitchCompilerContext<MEP> {
  childCompilation: compilation.Compilation;
}

export interface LoaderModuleContext {
  source: string;
  locals: any;
  exports: any;
}

export interface LoaderFuncContext<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> extends ContextBase<MEP> {
  loaderContext: LoaderContext;
  source: string | Buffer;
  sourceMap: string;
  data: any;
}
