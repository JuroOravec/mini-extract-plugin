import capitalize from 'lodash.capitalize';

import { Module } from './module';
import { renameClass } from '../lib/util';
import {
  ModuleFactory as IModuleFactory,
  ModuleFactoryClass,
  ModuleClass,
} from '../types/subclassing';
import { Constructor } from '../types/util';

type ModuleFactoryCreateArgs = Parameters<IModuleFactory['create']>;
type ModuleFactoryData = ModuleFactoryCreateArgs[0];
type Callback = ModuleFactoryCreateArgs[1];

// TODO When moving to Webpack v5, subclass original ModuleFactory from
// webpack/lib/ModuleFactory
export class ModuleFactory implements IModuleFactory {
  create(
    { dependencies: [dependency] }: ModuleFactoryData,
    callback: Callback,
  ) {
    callback(null, new Module(dependency));
  }
}

interface SubclassOptions {
  type: string;
  moduleClass?: ModuleClass | Constructor<Module>;
}

export function subclass({ moduleClass = Module, type }: SubclassOptions) {
  class ModuleFactorySubclass extends ModuleFactory implements IModuleFactory {
    create(
      { dependencies: [dependency] }: ModuleFactoryData,
      callback: Callback,
    ) {
      callback(null, new moduleClass(dependency));
    }
  }
  const className = `${capitalize(type)}${ModuleFactory.name}`;
  renameClass(ModuleFactorySubclass, className);
  return ModuleFactorySubclass as ModuleFactoryClass;
}
