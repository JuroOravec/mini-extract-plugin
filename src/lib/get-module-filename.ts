import type { Module, Chunk } from '../types/webpack';
import type { RenderContext } from '../types/context';

export type GetModuleFilenameOptions = {
  default: string;
  context: RenderContext;
  modules: Module[];
  templateOptions: {
    chunk: Chunk;
    hash: string;
    contentHashType: string;
  };
};

/**
 * Function to provide user with the chance to define module filename based on
 * a lot of contextual data
 */
export default function getModuleFilename(options: GetModuleFilenameOptions) {
  const { default: defaultFilename, context, templateOptions } = options;
  const { plugin } = context;

  const moduleFilename = plugin.options.moduleFilename;
  if (!moduleFilename) return defaultFilename;
  if (typeof moduleFilename === 'string') return moduleFilename;

  return moduleFilename(plugin, { context, templateOptions });
}
