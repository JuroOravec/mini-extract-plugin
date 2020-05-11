/**
 * Types related to subclassing MiniExtractPlugin
 *
 * Also the entrypoint for the 'subclassing' types
 */

import type { RequiredKeys } from './util';
import type { ActiveHooks, Overrides } from './hook';
import type {
  AbstractMiniExtractPlugin,
  AbstractClassOptions,
} from './subclassing-abstract';
import type { ParamsDefault } from './subclassing-params';

export * from './subclassing-abstract';
export * from './subclassing-classes';
export * from './subclassing-util';
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
  extends AbstractClassOptions<T> {
  hooks?: Overrides;
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
  I extends AbstractMiniExtractPlugin<T> = AbstractMiniExtractPlugin<T>
> extends AbstractMiniExtractPlugin<T> {
  hooks: ActiveHooks;
  classOptions: Required<ClassOptions<I['classOptions']>>;
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
