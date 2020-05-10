import miniExtractPluginFactory, { types } from '../../../src';
import Module from './module';
import ModuleFactory from './module-factory';
import Dependency from './dependency';
import DependencyTemplate from './dependency-template';
import hooks from './hooks';
import { type, typeReadable } from './config';

const MiniExtractPluginClass = miniExtractPluginFactory<{
  dependencyClass: types.DependencyClass<Dependency>;
  moduleClass: types.ModuleClass<Module>;
  moduleFactoryClass: typeof ModuleFactory;
}>({
  type,
  displayName: `My Mini ${typeReadable} Extract Plugin`,
  moduleFactoryClass: ModuleFactory,
  dependencyClass: Dependency,
  dependencyTemplateClass: DependencyTemplate,
  hooks: [
    { name: 'compilation', type: 'tap', hooks: [hooks.compilation!] },
    { name: 'merge', type: 'tap', hooks: [hooks.merge!] },
  ],
});

export default MiniExtractPluginClass;
