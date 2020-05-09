import type { Module } from '../types/webpack';
import type { RenderContext } from '../types/context';
import type { TemplateOptions, ModuleFilename } from '../types/module-filename';

/**
 * Options object passed to getModuleFilename, the function that calls
 * moduleFilename
 */
interface GetModuleFilenameOptions {
  default: string;
  context: RenderContext;
  modules: Module[];
  templateOptions: TemplateOptions;
}

/**
 * Function to provide user with the chance to define module filename based on
 * a lot of contextual data
 */
export default function getModuleFilename(options: GetModuleFilenameOptions) {
  const { default: defaultFilename, context, templateOptions } = options;
  const { plugin } = context;

  const moduleFilename = plugin.options.moduleFilename as ModuleFilename;
  if (!moduleFilename) return defaultFilename;
  if (typeof moduleFilename === 'string') return moduleFilename;

  return moduleFilename(context, templateOptions);
}
