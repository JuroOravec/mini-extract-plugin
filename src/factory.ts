import type webpack from 'webpack';
import validateOptions from 'schema-utils';
import { Ploadin, registerSubclass } from 'ploadin';

import type {
  ClassOptions,
  MiniExtractPlugin as IMiniExtractPlugin,
  MiniExtractPluginClass,
  DependencyClass,
  DependencyTemplateClass,
  ModuleClass,
  ModuleFactoryClass,
} from './types/subclassing';
import * as hooks from './lib/hook';
import apply from './methods/apply';
import loader from './methods/loader';
import pitch from './methods/pitch';
import { renameClass } from './lib/util';

export default function pluginFactory<
  // Allow user to specify the types by passing an object of types as params
  T extends {
    dependencyClass?: DependencyClass;
    dependencyTemplateClass?: DependencyTemplateClass;
    moduleClass?: ModuleClass;
    moduleFactoryClass?: ModuleFactoryClass;
    constructorOptions?: { [key: string]: any };
  } = {}
>(classOptions: Required<ClassOptions>) {
  const {
    pluginName,
    displayName,
    className,
    type,
    pluginOptionsSchema,
    hooks: hookOverrides,
  } = classOptions;

  const REGEXP_PLACEHOLDERS = /\[(name|id|chunkhash)\]/g;
  const DEFAULT_FILENAME = `[name].${type}`;

  type MEPSubclass = IMiniExtractPlugin<T>;
  class MiniExtractPlugin extends Ploadin implements MEPSubclass {
    options: MEPSubclass['options'];
    hooks: MEPSubclass['hooks'];

    constructor(
      options: MEPSubclass['options'] = {} as MEPSubclass['options'],
    ) {
      super();
      // @ts-ignore
      validateOptions(pluginOptionsSchema, options, displayName);

      // Assign default properties
      this.options = Object.assign(
        {
          filename: DEFAULT_FILENAME,
          moduleFilename: () => this.options.filename || DEFAULT_FILENAME,
          ignoreOrder: false,
        },
        options,
      );

      if (!this.options.chunkFilename) {
        const { filename } = this.options as { filename: string };

        // Anything changing depending on chunk is fine
        if (filename.match(REGEXP_PLACEHOLDERS)) {
          this.options.chunkFilename = filename;
        } else {
          // Elsewise prefix '[id].' in front of the basename to make it changing
          this.options.chunkFilename = filename.replace(
            /(^|\/)([^/]*(?:\?|$))/,
            '$1[id].$2',
          );
        }
      }

      this.apply = apply.bind(this);
      this.loader = loader.bind(this);
      this.pitch = pitch.bind(this);

      this.hooks = hooks.create();
      hooks.tapMany(pluginName, this.hooks, hookOverrides);

      hooks.callTap({
        name: 'initialize',
        hooks: this.hooks,
        args: [this, options, undefined],
      });
    }

    apply(this: MiniExtractPlugin, compiler: webpack.Compiler) {
      // dummy declaration to be overriden in constructor
    }

    loader(
      this: MiniExtractPlugin,
      loaderContext: any,
      source?: string,
      sourceMap?: string,
      data?: any,
    ) {
      // dummy declaration to be overriden in constructor
    }

    pitch(
      this: MiniExtractPlugin,
      loaderContext: any,
      request: string,
      precedingRequest: string,
      data: object,
    ) {
      // dummy declaration to be overriden in constructor
    }
  }

  renameClass(MiniExtractPlugin, className);
  registerSubclass(MiniExtractPlugin, classOptions);

  return (MiniExtractPlugin as unknown) as MiniExtractPluginClass<MEPSubclass>;
}
