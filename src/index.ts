import capitalize from 'lodash.capitalize';

import type { ClassOptions } from './types/subclassing';
import type { ParamsParse, ParamsDefault } from './types/subclassing-params';
import loaderSchema from './schemas/loader-options.json';
import pluginSchema from './schemas/plugin-options.json';
import pluginFactory from './factory';
import * as subclass from './lib/subclass';

export * from './api';

export default function miniExtractPluginFactory<
  // Allow user to specify the types by passing an object of types as params
  T extends ParamsDefault = {},
  Params extends ParamsParse<T> = ParamsParse<T>,
  ClsOpts extends ClassOptions<T> = ClassOptions<T>
>(options: ClsOpts) {
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

  const PluginClass = pluginFactory<T>({
    type,
    moduleType,
    pluginName,
    displayName,
    className,
    moduleClass: (moduleClass as unknown) as Params['moduleClass'],
    moduleFactoryClass: moduleFactoryClass as Params['moduleFactoryClass'],
    dependencyClass: dependencyClass as Params['dependencyClass'],
    dependencyTemplateClass: dependencyTemplateClass as Params['dependencyTemplateClass'],
    pluginOptionsSchema,
    loaderOptionsSchema,
    hooks,
  });

  return PluginClass;
}
