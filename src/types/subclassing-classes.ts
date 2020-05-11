/**
 * Types related to subclassing MiniExtractPlugin.
 *
 * These types are for classes and options used by MiniExtractPlugin
 */

import type { compilation } from 'webpack';
import type { Tapable } from 'tapable';

import type { Constructor, AnyFunc } from './util';
import type { ModuleBase, DependencyBase } from './base';
import type { ModuleFilename } from './module-filename';
import type { RequestShortener } from './webpack';

export interface DependencyTemplate extends Tapable {
  apply: AnyFunc;
}

export type DependencyTemplateClass<
  T extends DependencyTemplate = DependencyTemplate,
  A extends any[] | undefined = undefined
> = Constructor<T, A> & typeof Tapable;

export interface Dependency extends compilation.Dependency, DependencyBase {
  identifierIndex: number;
}

export type DependencyClass<
  T extends Dependency = Dependency,
  A extends any[] | undefined = any[]
> = Constructor<T, A> & {
  compare: typeof compilation.Dependency['compare'];
};

export interface Module extends ModuleBase {
  readableIdentifier(requestShortener: RequestShortener): string;
  request?: string;
}

export type ModuleClass<
  M extends Module = Module,
  D extends Dependency = Dependency,
  A extends any[] | undefined = any[]
> = Constructor<M, A> & {
  new (dependency: D): M;
};

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
 * Default options passed to MiniExtractPlugin constructor
 */
export type ConstructorOptions = {
  filename?: string;
  moduleFilename?: ModuleFilename;
  chunkFilename?: string;
  ignoreOrder?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DependencyOptions extends DependencyBase {}
