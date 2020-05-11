import { Tapable } from 'tapable';
import capitalize from 'lodash.capitalize';

import type {
  DependencyTemplate as IDependencyTemplate,
  DependencyTemplateClass,
} from '../types/subclassing';
import { renameClass } from '../lib/util';

// TODO When moving to Webpack v5, subclass original DependencyTemplate from
// webpack/lib/DependencyTemplate
export class DependencyTemplate extends Tapable implements IDependencyTemplate {
  apply() {
    /* noop */
  }
}

interface SubclassOptions {
  type: string;
}

export function subclass({ type }: SubclassOptions) {
  class DependencyTemplateSubclass extends DependencyTemplate
    implements IDependencyTemplate {}

  const className = `${capitalize(type)}${DependencyTemplate.name}`;
  renameClass(DependencyTemplateSubclass, className);
  return DependencyTemplateSubclass as DependencyTemplateClass;
}
