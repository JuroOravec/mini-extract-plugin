/**
 * Types related to subclassing MiniExtractPlugin
 */

import theWebpack from 'webpack';
import type { Ploadin } from 'ploadin';
import type { Tapable } from 'tapable';

import type { Constructor, AnyFunc } from './util';
import type { Overrides, ActiveHooks } from './hook';
import type { ModuleBase, DependencyBase } from './base';
import type { ModuleFilename } from './module-filename';

export interface DependencyTemplate {
  apply: AnyFunc;
}

export type DependencyTemplateClass = Constructor<DependencyTemplate> &
  typeof Tapable;

export interface Dependency
  extends theWebpack.compilation.Dependency,
    DependencyBase {
  identifierIndex: number;
}

export type DependencyClass = Constructor<Dependency> & {
  compare: typeof theWebpack.compilation.Dependency['compare'];
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Module extends ModuleBase {}

export type ModuleClass = Constructor<Module>;

type ModuleFactoryData = {
  dependencies: Dependency[];
} & { [key: string]: any };

export interface ModuleFactory {
  create(
    data: ModuleFactoryData,
    callback: (error: Error | null, result: Module) => void,
  ): void;
}

export type ModuleFactoryClass = Constructor<ModuleFactory> & typeof Tapable;

export interface ClassOptions {
  type: string;
  moduleType?: string;
  pluginName?: string;
  displayName?: string;
  className?: string;
  hooks?: Overrides;
  pluginOptionsSchema?: any;
  loaderOptionsSchema?: any;
  dependencyClass?: DependencyClass;
  moduleFactoryClass?: ModuleFactoryClass;
  moduleClass?: ModuleClass;
  dependencyTemplateClass?: DependencyTemplateClass;
}

export type ConstructorOptions = {
  filename?: string;
  moduleFilename?: ModuleFilename;
  chunkFilename?: string;
  ignoreOrder?: boolean;
};

export interface MiniExtractPlugin extends Ploadin {
  classOptions: Required<ClassOptions>;
  options: ConstructorOptions;
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
export type MiniExtractPluginClass = Constructor<MiniExtractPlugin>;
