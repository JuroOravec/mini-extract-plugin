import type { Chunk } from './webpack';
import type { RenderContext } from './context';
import type { AbstractMiniExtractPlugin } from './subclassing-abstract';
import type { GetModule } from './subclassing-util';

/**
 * TemplateOptions object passed to moduleFilename if it's a function
 */
export interface TemplateOptions {
  chunk: Chunk;
  hash: string;
  contentHashType: string;
}

/**
 * moduleFilename function signature
 */
export type ModuleFilenameFunction<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> = (
  context: RenderContext<MEP>,
  templateOptions: TemplateOptions,
  modules: GetModule<MEP>[],
) => string;

export type ModuleFilename<
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> = string | ModuleFilenameFunction<MEP>;
