import { Dependency } from '../../../src';

import type {
  CssDependency as ICssDependency,
  Tail,
  DependencyParams,
} from './types';

export default class CssDependency extends Dependency
  implements ICssDependency {
  media: ICssDependency['media'];
  sourceMap: ICssDependency['sourceMap'];

  constructor(
    { media, sourceMap, ...rest }: DependencyParams[0],
    ...args: Tail<DependencyParams>
  ) {
    super(rest, ...args);

    this.media = media;
    this.sourceMap = sourceMap;
  }
}
