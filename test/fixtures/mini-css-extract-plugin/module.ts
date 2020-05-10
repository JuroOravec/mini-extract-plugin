import { Module, types } from '../../../src';
import Dependency from './dependency';
import { CssModule as ICssModule } from './types';

export default class CssModule extends Module<{ dependency: Dependency }>
  implements ICssModule {
  sourceMap: ICssModule['sourceMap'];
  media: ICssModule['media'];

  constructor(dependency: Dependency) {
    super(dependency);

    this.sourceMap = dependency.sourceMap;
    this.media = dependency.media;
  }

  updateCacheModule(module: CssModule) {
    super.updateCacheModule(module);
    this.media = module.media;
    this.sourceMap = module.sourceMap;
  }

  updateHash(hash: types.webpack.Hash) {
    super.updateHash(hash);

    hash.update(this.media || '');
    hash.update(this.sourceMap ? JSON.stringify(this.sourceMap) : '');
  }
}
