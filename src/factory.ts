import type webpack from 'webpack';
import validateOptions from 'schema-utils';
import { Ploadin, registerSubclass } from 'ploadin';

import type {
  ClassOptions,
  ConstructorOptions,
  MiniExtractPlugin as IMiniExtractPlugin,
  MiniExtractPluginClass,
} from './types/subclassing';
import * as hooks from './lib/hook';
import type * as hookTypes from './types/hook';
import apply from './methods/apply';
import loader from './methods/loader';
import pitch from './methods/pitch';
import { renameClass } from './lib/util';

export default function pluginFactory(classOptions: Required<ClassOptions>) {
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

  class MiniExtractPlugin extends Ploadin implements IMiniExtractPlugin {
    options: ConstructorOptions;
    hooks: hookTypes.ActiveHooks;

    constructor(options: ConstructorOptions = {}) {
      super();
      // @ts-ignore
      validateOptions(pluginOptionsSchema, options, displayName);

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

  return MiniExtractPlugin as MiniExtractPluginClass;
}
