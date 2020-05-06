import WebpackModule from 'webpack/lib/Module';

import { Module as IModule, ModuleClass } from '../types/subclassing';
import { Hash, RequestShortener } from '../types/webpack';
import { Dependency } from './dependency';
import capitalize from 'lodash.capitalize';
import { renameClass } from '../lib/util';

export class Module extends WebpackModule implements IModule {
  id: string;
  content: Dependency['content'];
  private _identifier: Dependency['identifier'];
  private _identifierIndex: Dependency['identifierIndex'];
  private _miniExtractType: Dependency['miniExtractType'];

  constructor(dependency: Dependency) {
    const { context } = dependency;
    const moduleType = dependency.moduleType;
    super(moduleType, context === null ? undefined : context);

    this.id = '';
    this._identifier = dependency.identifier;
    this._identifierIndex = dependency.identifierIndex;
    this.content = dependency.content;
    this._miniExtractType = dependency.miniExtractType;
  }

  // no source() so webpack doesn't add stuff to the bundle

  size() {
    return this.content.length;
  }

  identifier() {
    return `${this._miniExtractType} ${this._identifier} ${this._identifierIndex}`;
  }

  readableIdentifier(requestShortener: RequestShortener) {
    const shortId = requestShortener.shorten(this._identifier);
    const index = this._identifierIndex ? ` (${this._identifierIndex})` : '';
    return `${this._miniExtractType} ${shortId}${index}`;
  }

  nameForCondition() {
    const resource = this._identifier.split('!').pop() || '';
    const idx = resource.indexOf('?');

    if (idx >= 0) return resource.substring(0, idx);

    return resource;
  }

  updateCacheModule(module: Module) {
    this.content = module.content;
  }

  needRebuild() {
    return true;
  }

  // @ts-ignore
  build(options, compilation, resolver, fileSystem, callback) {
    // @ts-ignore
    this.buildInfo = {};
    // @ts-ignore
    this.buildMeta = {};
    callback();
  }

  updateHash(hash: Hash) {
    super.updateHash(hash);
    hash.update(this.content);
  }
}

interface SubclassOptions {
  type: string;
}

export function subclass({ type }: SubclassOptions) {
  class ModuleSubclass extends Module implements IModule {}

  const className = `${capitalize(type)}${ModuleSubclass.name}`;
  renameClass(ModuleSubclass, className);
  return ModuleSubclass as ModuleClass;
}
