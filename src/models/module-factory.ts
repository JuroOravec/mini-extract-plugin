import capitalize from 'lodash.capitalize';

import type {
  Dependency,
  Module as IModule,
  ModuleClass,
  ModuleFactory as IModuleFactory,
  ModuleFactoryClass,
} from '../types/subclassing';
import { Module } from './module';
import { renameClass } from '../lib/util';

/**
 * Get the create method arguments used by ModuleFactory given ModuleFactory
 * interface
 */
type ModFactoryArgs<MF extends ModuleFactory> = Parameters<MF['create']>;

/**
 * Get the Module used by ModuleFactory given ModuleFactory interface
 */
type ModFactoryModule<MF extends ModuleFactory> = Parameters<
  Parameters<MF['create']>[1]
>[1];

// TODO When moving to Webpack v5, subclass original ModuleFactory from
// webpack/lib/ModuleFactory
export class ModuleFactory<
  T extends {
    dependency?: Dependency;
    module?: IModule;
  } = {},
  I extends IModuleFactory<T> = IModuleFactory<T>
> implements IModuleFactory<T> {
  create(
    ...[
      {
        dependencies: [dependency],
      },
      callback,
    ]: ModFactoryArgs<I>
  ) {
    callback(
      null,
      new ((Module as any) as ModuleClass<ModFactoryModule<I>>)(dependency),
    );
  }
}

interface SubclassOptions {
  type: string;
  moduleClass?: ModuleClass | ModuleClass<IModule>;
}

export function subclass<
  T extends {
    dependency?: Dependency;
    module?: IModule;
  } = {},
  I extends IModuleFactory<T> = IModuleFactory<T>
>({ moduleClass = Module, type }: SubclassOptions) {
  class ModuleFactorySubclass extends ModuleFactory<T>
    implements IModuleFactory {
    create(
      ...[
        {
          dependencies: [dependency],
        },
        callback,
      ]: ModFactoryArgs<ModuleFactory<T>>
    ) {
      callback(null, new moduleClass(dependency) as ModFactoryModule<I>);
    }
  }
  const className = `${capitalize(type)}${ModuleFactory.name}`;
  renameClass(ModuleFactorySubclass, className);
  return ModuleFactorySubclass as ModuleFactoryClass<I>;
}
