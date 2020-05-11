/**
 * Util types related to subclassing MiniExtractPlugin
 */

import type { ParamsDefault } from './subclassing-params';
import type { AbstractMiniExtractPlugin } from './subclassing-abstract';
import type { ActiveHookNames, Taps } from './hook';

/**
 * Get Dependency from ClassOptions
 */
export type GetDependency<Opts extends ParamsDefault> = InstanceType<
  NonNullable<Opts['dependencyClass']>
>;

/**
 * Get DependencyOptions type from MiniExtractPlugin type
 */
export type GetDependencyOptions<
  MEP extends AbstractMiniExtractPlugin
> = ConstructorParameters<MEP['classOptions']['dependencyClass']>[0];

/**
 * Get module type from MiniExtractPlugin type
 */
export type GetModuleClass<
  MEP extends AbstractMiniExtractPlugin
> = MEP['classOptions']['moduleClass'];

/**
 * Get module type from MiniExtractPlugin type
 */
export type GetModule<MEP extends AbstractMiniExtractPlugin> = InstanceType<
  GetModuleClass<MEP>
>;

/**
 * Get a return type for a particular hook name, optionally for a specific
 * MiniExtractPlugin class
 */
export type GetHookReturnType<
  H extends ActiveHookNames,
  MEP extends AbstractMiniExtractPlugin = AbstractMiniExtractPlugin
> = ReturnType<Taps<MEP>[H]>;
