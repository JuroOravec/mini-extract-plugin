import { Dependency } from '../../../src';
import { CssDependency as ICssDependency, Tail } from './types';

type DepCtorParams = ConstructorParameters<typeof Dependency>;
type ConstructorOptions = {
  media: ICssDependency['media'];
  sourceMap: ICssDependency['sourceMap'];
} & DepCtorParams[0];

export default class CssDependency extends Dependency
  implements ICssDependency {
  media: ICssDependency['media'];
  sourceMap: ICssDependency['sourceMap'];

  constructor(
    { media, sourceMap, ...rest }: ConstructorOptions,
    ...args: Tail<DepCtorParams>
  ) {
    super(rest, ...args);

    this.media = media;
    this.sourceMap = sourceMap;
  }
}
