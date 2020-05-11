/**
 * Util types handling type parameters passed to generic MiniExtractPlugin
 * types.
 */

import type {
  DependencyClass,
  DependencyTemplateClass,
  ModuleClass,
  ModuleFactoryClass,
  ConstructorOptions,
} from './subclassing-classes';

/**
 * Default types for the params passed to MiniExractPlugin class or options
 */
export interface ParamsDefault {
  dependencyClass?: DependencyClass;
  dependencyTemplateClass?: DependencyTemplateClass;
  moduleClass?: ModuleClass;
  moduleFactoryClass?: ModuleFactoryClass;
  constructorOptions?: { [key: string]: any };
}

/**
 * Parse types passed to MiniExtractPLugin class or options and fill gaps with defaults
 */
export type ParamsParse<T extends ParamsDefault = {}> = {
  dependencyClass: T['dependencyClass'] extends DependencyClass
    ? T['dependencyClass']
    : DependencyClass;
  dependencyTemplateClass: T['dependencyTemplateClass'] extends DependencyTemplateClass
    ? T['dependencyTemplateClass']
    : DependencyTemplateClass;
  moduleClass: T['moduleClass'] extends ModuleClass
    ? T['moduleClass']
    : ModuleClass;
  moduleFactoryClass: T['moduleFactoryClass'] extends ModuleFactoryClass
    ? T['moduleFactoryClass']
    : ModuleFactoryClass;
  constructorOptions: T['constructorOptions'] extends object
    ? T['constructorOptions']
    : ConstructorOptions;
};
