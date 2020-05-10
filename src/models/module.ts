import WebpackModule from 'webpack/lib/Module';
import webpack from 'webpack';

import { Module as IModule, ModuleClass } from '../types/subclassing';
import { Hash, RequestShortener } from '../types/webpack';
import { Dependency } from './dependency';
import capitalize from 'lodash.capitalize';
import { renameClass } from '../lib/util';

const TypedWebpackModule = WebpackModule as typeof webpack.compilation.Module;

export class Module<
  T extends {
    dependency?: Dependency;
  } = {},
  Dep extends Dependency = T['dependency'] extends Dependency
    ? T['dependency']
    : Dependency
> extends TypedWebpackModule implements IModule {
  id: string;
  content: Dep['content'];
  private _identifier: Dep['identifier'];
  private _identifierIndex: Dep['identifierIndex'];
  private _miniExtractType: Dep['miniExtractType'];

  constructor(dependency: Dep) {
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

export function subclass<
  T extends {
    dependency?: Dependency;
  } = {}
>({ type }: SubclassOptions) {
  class ModuleSubclass extends Module<T> implements IModule {}

  const className = `${capitalize(type)}${ModuleSubclass.name}`;
  renameClass(ModuleSubclass, className);
  return ModuleSubclass as ModuleClass<Module<T>>;
}
