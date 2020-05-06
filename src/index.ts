import capitalize from 'lodash.capitalize';
import type { ClassOptions } from './types/subclassing';
import loaderSchema from './schemas/loader-options.json';
import pluginSchema from './schemas/plugin-options.json';
import pluginFactory from './factory';
import * as subclass from './lib/subclass';

export * from './api';

export default function miniExtractPluginFactory(options: ClassOptions) {
  const { type } = options;
  const { moduleClass = subclass.module({ type }) } = options;
  const {
    pluginName = `mini${type ? '-' + type : ''}-extract-plugin`,
    displayName = `Mini${type ? ' ' + capitalize(type) : ''} Extract Plugin`,
    className = `Mini${capitalize(type) || ''}ExtractPlugin`,
    moduleType = `${type}/mini-extract`,
    moduleFactoryClass = subclass.moduleFactory({ type, moduleClass }),
    dependencyClass = subclass.dependency({ type }),
    dependencyTemplateClass = subclass.dependencyTemplate({ type }),
    pluginOptionsSchema = pluginSchema,
    loaderOptionsSchema = loaderSchema,
    hooks = [],
  } = options || {};

  const PluginClass = pluginFactory({
    type,
    moduleType,
    pluginName,
    displayName,
    className,
    moduleClass,
    moduleFactoryClass,
    dependencyClass,
    dependencyTemplateClass,
    pluginOptionsSchema,
    loaderOptionsSchema,
    hooks,
  });

  return PluginClass;
}
