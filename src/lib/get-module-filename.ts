import type { RenderContext } from '../types/context';
import type { TemplateOptions, ModuleFilename } from '../types/module-filename';
import type { GetModule } from '../types/subclassing-util';
import type { MiniExtractPlugin } from '../types/subclassing';

/**
 * Options object passed to getModuleFilename, the function that calls
 * moduleFilename
 */
interface GetModuleFilenameOptions<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
> {
  default: string;
  context: RenderContext<MEP>;
  modules: GetModule<MEP>[];
  templateOptions: TemplateOptions;
}

/**
 * Function to provide user with the chance to define module filename based on
 * a lot of contextual data
 */
export default function getModuleFilename<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
>(options: GetModuleFilenameOptions<MEP>) {
  const {
    default: defaultFilename,
    context,
    templateOptions,
    modules,
  } = options;
  const { plugin } = context;

  const moduleFilename = plugin.options.moduleFilename as ModuleFilename<MEP>;
  if (!moduleFilename) return defaultFilename;
  if (typeof moduleFilename === 'string') return moduleFilename;

  return moduleFilename(context, templateOptions, modules);
}
