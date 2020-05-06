import webpack from 'webpack';
// @ts-ignore
import WebpackDependency from 'webpack/lib/Dependency';
import capitalize from 'lodash.capitalize';

import {
  Dependency as IDependency,
  DependencyClass,
} from '../types/subclassing';
import { renameClass } from '../lib/util';
import { DependencyOptions } from '../types/context';

const TypedWebpackDep: typeof webpack.compilation.Dependency = WebpackDependency;

export class Dependency extends TypedWebpackDep implements IDependency {
  identifier: IDependency['identifier'];
  context: IDependency['context'];
  content: IDependency['content'];
  identifierIndex: IDependency['identifierIndex'];
  moduleType: IDependency['moduleType'];
  miniExtractType: IDependency['miniExtractType'];

  constructor(
    { identifier, content, moduleType, miniExtractType }: DependencyOptions,
    context: Dependency['context'],
    identifierIndex: Dependency['identifierIndex'],
  ) {
    super();

    this.moduleType = moduleType;
    this.miniExtractType = miniExtractType;
    this.identifier = identifier;
    this.identifierIndex = identifierIndex;
    this.context = context;
    this.content = content;
  }

  getResourceIdentifier() {
    return `${this.miniExtractType}-module-${this.identifier}-${this.identifierIndex}`;
  }
}

interface SubclassOptions {
  name?: string;
  type?: string;
}

export function subclass({ type }: SubclassOptions = {}) {
  class DependencySubclass extends Dependency implements IDependency {
    getResourceIdentifier() {
      return `${type}-module-${this.identifier}-${this.identifierIndex}`;
    }
  }
  const className = `${capitalize(type)}${Dependency.name}`;
  renameClass(DependencySubclass, className);
  return DependencySubclass as DependencyClass;
}
