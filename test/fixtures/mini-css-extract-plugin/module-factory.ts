import { subclassModuleFactory } from '../../../src';

import Module from './module';
import { type } from './config';

export default subclassModuleFactory({
  moduleClass: Module,
  type,
});
