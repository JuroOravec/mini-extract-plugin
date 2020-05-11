/**
 * Types related to subclassing MiniExtractPlugin
 */

import theWebpack from 'webpack';
import type { Ploadin } from 'ploadin';
import type { Tapable } from 'tapable';

import type { Constructor, AnyFunc, RequiredKeys } from './util';
import type { Overrides, ActiveHooks } from './hook';
import type { ModuleBase, DependencyBase } from './base';
import type { ModuleFilename } from './module-filename';

export { ParamsDefault } from './subclassing-params';

export interface DependencyTemplate {
  apply: AnyFunc;
}

export type DependencyTemplateClass<
  T extends DependencyTemplate = DependencyTemplate
> = Constructor<T> & typeof Tapable;

export interface Dependency
  extends theWebpack.compilation.Dependency,
    DependencyBase {
  identifierIndex: number;
}

export type DependencyClass<T extends Dependency = Dependency> = Constructor<
  T
> & {
  compare: typeof theWebpack.compilation.Dependency['compare'];
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Module extends ModuleBase {}

export type ModuleClass<T extends Module = Module> = Constructor<T>;

export type ModuleFactoryData<D extends Dependency = Dependency> = {
  dependencies: D[];
} & { [key: string]: any };

export type ModuleFactoryCallback<M extends Module = Module> = (
  error: Error | null,
  result: M,
) => void;

export interface ModuleFactory<
  // Allow user to specify the types by passing an object of types as params
  T extends {
    dependency?: Dependency;
    module?: Module;
  } = {},
  // Set defaults
  Dep extends Dependency = T['dependency'] extends Dependency
    ? T['dependency']
    : Dependency,
  Mod extends Module = T['module'] extends Module ? T['module'] : Module
> {
  create(
    data: ModuleFactoryData<Dep>,
    callback: ModuleFactoryCallback<Mod>,
  ): void;
}

export type ModuleFactoryClass<
  T extends ModuleFactory = ModuleFactory
> = Constructor<T> & typeof Tapable;

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
 * Default options passed to MiniExtractPlugin constructor
 */
export type ConstructorOptions = {
  filename?: string;
  moduleFilename?: ModuleFilename;
  chunkFilename?: string;
  ignoreOrder?: boolean;
};

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
