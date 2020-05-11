/**
 * Types related to subclassing MiniExtractPlugin.
 *
 * These types are for an abstract interface of MiniExtractPlugin,
 * which omits types that reference MiniExtractPlugin back.
 */

import type { Compiler } from 'webpack';
import type { Ploadin } from 'ploadin';
import type { Hook } from 'tapable';

import type { ParamsDefault, ParamsParse } from './subclassing-params';

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
export interface AbstractClassOptions<
  T extends ParamsDefault = {},
  Params extends ParamsParse<T> = ParamsParse<T>
> {
  type: string;
  moduleType?: string;
  pluginName?: string;
  displayName?: string;
  className?: string;
  hooks?: { [key: string]: any }[];
  pluginOptionsSchema?: any;
  loaderOptionsSchema?: any;
  dependencyClass?: Params['dependencyClass'];
  moduleFactoryClass?: Params['moduleFactoryClass'];
  moduleClass?: Params['moduleClass'];
  dependencyTemplateClass?: Params['dependencyTemplateClass'];
}

/**
 * Abstract interface of MiniExtractPlugin instance.
 *
 * This interface omits properties that cause circular reference, which are:
 * - `hooks`
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
export interface AbstractMiniExtractPlugin<
  T extends ParamsDefault = {},
  Params extends ParamsParse<T> = ParamsParse<T>
> extends Ploadin {
  classOptions: Required<AbstractClassOptions<Params>>;
  options: Params['constructorOptions'];
  hooks: { [key: string]: Hook };
  apply: (c: Compiler) => void;
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
