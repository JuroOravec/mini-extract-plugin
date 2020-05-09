import type { Chunk } from './webpack';
import type { RenderContext } from './context';

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
export type ModuleFilenameFunction = (
  context: RenderContext,
  templateOptions: TemplateOptions,
) => string;

export type ModuleFilename = string | ModuleFilenameFunction;
