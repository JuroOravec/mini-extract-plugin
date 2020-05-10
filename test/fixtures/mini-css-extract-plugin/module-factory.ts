import { subclassModuleFactory } from '../../../src';

import Module from './module';
import { type } from './config';

export default subclassModuleFactory<{ module: Module }>({
  moduleClass: Module,
  type,
});
