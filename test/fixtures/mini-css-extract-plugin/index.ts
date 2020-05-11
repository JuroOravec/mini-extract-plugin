import miniExtractPluginFactory from '../../../src';

import type { ClassParams } from './types';
import ModuleFactory from './module-factory';
import Dependency from './dependency';
import DependencyTemplate from './dependency-template';
import hooks from './hooks';
import { type, typeReadable } from './config';

const MiniExtractPluginClass = miniExtractPluginFactory<ClassParams>({
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
