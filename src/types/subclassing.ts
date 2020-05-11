/**
 * Types related to subclassing MiniExtractPlugin
 */

import theWebpack from 'webpack';
import type { Ploadin } from 'ploadin';
import type { Tapable } from 'tapable';

import type { RequiredKeys } from './util';
import type { Overrides, ActiveHooks } from './hook';

export { ParamsDefault } from './subclassing-params';

/**
 * Options passed to class factory.
 *
 * Following types of classes can be overriden by passing an object of types as
 * the first type parameter:
 * - `dependencyClass` - DependencyClass subtype
 * - `dependencyTemplateClass` - DependencyTemplateClass subtype
 * - `moduleClass` - ModuleClass subtype
 * - `moduleFactoryClass` - ModuleFactoryClass subtype
 *
 * @example
 * // ClassOptions with default types
 * ClassOptions
 * // ClassOptions with overriden moduleClass type
 * ClassOptions<{
 *   moduleClass: ModCls;
 * }>
 * // ClassOptions with all types overriden
 * ClassOptions<{
 *   dependencyClass: DepCls;
 *   dependencyTemplateClass: DepTemplateCls;
 *   moduleClass: ModCls;
 *   moduleFactoryClass: ModFactoryCls;
 * }>
 */
export interface ClassOptions<T extends ParamsDefault = {}>
> {
  type: string;
  moduleType?: string;
  pluginName?: string;
  displayName?: string;
  className?: string;
  hooks?: Overrides;
  pluginOptionsSchema?: any;
  loaderOptionsSchema?: any;
  dependencyClass?: DepCls;
  moduleFactoryClass?: ModFactoryCls;
  moduleClass?: ModCls;
  dependencyTemplateClass?: DepTemplateCls;
}

/**
 * MiniExtractPlugin instance
 *
 * Following types of classes can be overriden by passing an object of types as
 * the first type parameter:
 * - `dependencyClass` - DependencyClass subtype
 * - `dependencyTemplateClass` - DependencyTemplateClass subtype
 * - `moduleClass` - ModuleClass subtype
 * - `moduleFactoryClass` - ModuleFactoryClass subtype
 * - `constructorOptions` - object type expected when instantiating MiniExtractPlugin;
 *
 * @example
 * // ClassOptions with default types
 * ClassOptions
 * // ClassOptions with overriden moduleClass type
 * ClassOptions<{
 *   moduleClass: ModCls;
 * }>
 * // ClassOptions with all types overriden
 * ClassOptions<{
 *   dependencyClass: DepCls;
 *   dependencyTemplateClass: DepTemplateCls;
 *   moduleClass: ModCls;
 *   moduleFactoryClass: ModFactoryCls;
 *   constructorOptions: ConstructorOptions & { myCustomOption: boolean};
 * }>
 */
export interface MiniExtractPlugin<
  T extends ParamsDefault = {},
> extends Ploadin {
  classOptions: Required<
    ClassOptions<{
      dependencyClass: DepCls;
      dependencyTemplateClass: DepTemplateCls;
      moduleClass: ModCls;
      moduleFactoryClass: ModFactoryCls;
    }>
  >;
  options: CtorOptions;
  hooks: ActiveHooks;
  apply: (c: theWebpack.Compiler) => void;
  loader(
    loaderContext: any,
    source?: string,
    sourceMap?: string,
    data?: any,
  ): void;
  pitch(
    loaderContext: any,
    request: string,
    precedingRequest: string,
    data: object,
  ): void;
}

/**
 * MiniExtractPlugin class
 *
 * Instance type can be overriden as the first type parameter.
 *
 * The type adapts whether the constructor's first argument is required based
 * on if the options object has any required keys.
 *
 * @example
 * // MiniExtractPluginClass with default type
 * MiniExtractPluginClass
 * // ClassOptions with overriden MiniExtractPlugin type
 * MiniExtractPluginClass<MyCustomMiniExtractPlugin>
 */
export type MiniExtractPluginClass<
  T extends MiniExtractPlugin = MiniExtractPlugin
> = RequiredKeys<T['options']> extends never
  ? {
      new (options?: T['options']): T;
    }
  : {
      new (options: T['options']): T;
    };
