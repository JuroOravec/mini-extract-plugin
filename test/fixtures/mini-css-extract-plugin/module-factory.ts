import { subclassModuleFactory, types } from '../../../src';

import type { CssDependency, CssModule } from './types';
import { type } from './config';
import Module from './module';

export default subclassModuleFactory<{
  module: CssModule;
  dependency: CssDependency;
}>({
  moduleClass: Module as types.ModuleClass<Module>,
  type,
});
