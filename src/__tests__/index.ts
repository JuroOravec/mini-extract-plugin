import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import miniExtractPluginFactory, { types } from '..';
import { create } from '../lib/hook';

import TestMiniCssExtractPlugin from '../../test/fixtures/mini-css-extract-plugin';
import Dependency from '../../test/fixtures/mini-css-extract-plugin/dependency';
import DependencyTemplate from '../../test/fixtures/mini-css-extract-plugin/dependency-template';
import ModuleFactory from '../../test/fixtures/mini-css-extract-plugin/module-factory';
import { runWebpack } from '../../test/fixtures/webpack';
import { prepare, restore, reset } from '../../test/lib/fs';
import { get as getContent } from '../../test/lib/content';
import {
  hook,
  state,
  validateHookWasCalled,
  overrides,
} from '../../test/fixtures/tapable';
import { HookState } from '../../test/fixtures/tapable/types';

async function compareWebpackOutputs(
  webpackConfigs: webpack.Configuration[],
  outputPath: string,
) {
  let previousContent: string | null = null;
  for (const config of webpackConfigs) {
    await runWebpack(config);
    const currContent = await getContent(outputPath);
    if (previousContent !== null) {
      expect(currContent).toBe(previousContent);
    }
    previousContent = currContent;
  }
}

function prepConfig(plugin?: any, loader?: any) {
  const config: webpack.Configuration = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['css-loader'],
        },
      ],
    },
  };
  if (plugin) {
    config.plugins = [...(config.plugins || []), plugin];
  }
  if (loader) {
    const loaders = (config.module?.rules[0]?.use || []) as any[];
    config.module!.rules[0].use = [loader, ...loaders];
  }
  return config;
}

describe('MiniExtractPlugin', () => {
  let createdDirRoot: string;

  /**
   * Parametrized variables
   */
  const testedPlugins: [string, any, (p: any) => string | object][] = [
    [
      MiniCssExtractPlugin.name,
      MiniCssExtractPlugin,
      (plgn: any) => MiniCssExtractPlugin.loader,
    ],
    [
      'Test' + TestMiniCssExtractPlugin.name,
      TestMiniCssExtractPlugin,
      (plgn: any) => plgn.asLoader,
    ],
  ];

  beforeAll(async () => {
    const { tempDirRoot } = await prepare();
    createdDirRoot = tempDirRoot;
    createdDirRoot + createdDirRoot;
  });

  afterAll(async () => {
    await restore(createdDirRoot);
  });

  describe('setup', () => {
    test('[meta] setup works', () => {
      expect(true).toBe(true);
    });

    test.each(testedPlugins)('[meta] class %s initializes', (name, klass) => {
      const plugin = new klass();
      expect(plugin).toBeTruthy();
    });
  });

  describe('setup - webpack', () => {
    test('[meta] webpack works with js', async () => {
      const stats = await runWebpack({ entry: './entry-no-css.js' });
      expect(stats).toBeTruthy();
    });

    test('[meta] webpack fails with css without loader', async () => {
      const webpackPromise = runWebpack({ entry: './entry1.css' });
      expect(webpackPromise).rejects.toThrowError();
    });

    test('[meta] webpack works with css with loader', async () => {
      const config = Object.assign(prepConfig(), { entry: './entry1.css' });
      const stats = await runWebpack(config);
      expect(stats).toBeDefined();
    });

    test('[meta] webpack fails with js that imports css without loader', async () => {
      const webpackPromise = runWebpack({ entry: './entry1.js' });
      expect(webpackPromise).rejects.toThrowError();
    });

    test('[meta] webpack works with js that imports css with loader', async () => {
      const stats = await runWebpack(prepConfig());
      expect(stats).toBeTruthy();
    });
  });

  describe('hooks', () => {
    const hooks = create();
    const hookState = state.create(hooks);
    const hookOverrides = overrides.create(hookState, hooks);
    const hookNames = Object.keys(hooks);
    const {
      void: voidHookNames,
      return: returnHookNames,
    } = hook.groupNamesByReturnType(hooks);
    const hookNamesAsArgs = hookNames.map((s) => [s]);
    const voidHookNamesAsArgs = voidHookNames.map((s) => [s]);
    const returnHookNamesAsArgs = returnHookNames.map((s) => [s]);

    function createPlugin(options: any = {}) {
      const DummyPluginClass = miniExtractPluginFactory({
        type: 'css',
        moduleFactoryClass: ModuleFactory,
        dependencyClass: Dependency as any,
        dependencyTemplateClass: DependencyTemplate as any,
        ...options,
      });
      return new DummyPluginClass();
    }

    describe('non-returning hooks - no taps', () => {
      const voidHookOverrides = overrides.filter(
        hookOverrides.noDefaults,
        voidHookNames,
      );
      const voidHookState = state.filter(hookState, voidHookNames);

      beforeAll(async () => {
        state.reset(voidHookState);
        const plugin = createPlugin({ hooks: voidHookOverrides });
        await runWebpack(prepConfig(plugin, plugin.asLoader));
      });

      test.each(voidHookNamesAsArgs)('hook %s is tappable', (hookName) => {
        const hookStateRecord = voidHookState[hookName as keyof HookState];
        validateHookWasCalled(hookStateRecord!);
      });
    });

    describe('non-returning hooks - with taps', () => {
      const voidHookOverrides = overrides.filter(
        hookOverrides.withDefaults,
        voidHookNames,
      );
      const voidHookState = state.filter(hookState, voidHookNames);

      beforeAll(async () => {
        state.reset(hookState);
        const plugin = createPlugin({ hooks: voidHookOverrides });
        await runWebpack(prepConfig(plugin, plugin.asLoader));
      });

      test.each(voidHookNamesAsArgs)('hook %s is tappable', (hookName) => {
        const hookStateRecord = voidHookState[hookName as keyof HookState];
        validateHookWasCalled(hookStateRecord!);
      });
    });

    /**
     * Because of their how webpack(?) works, when we don't return the correct
     * data somewhere, node crashes. Therefore we don't test the case of
     * calling the returning hooks without actually returning anything.
     */
    describe('returning hooks', () => {
      const returnHookOverrides = overrides.filter(
        hookOverrides.withDefaults,
        returnHookNames,
      );
      const returnHookState = state.filter(hookState, returnHookNames);

      beforeAll(async () => {
        state.reset(returnHookState);
        const plugin = createPlugin({ hooks: returnHookOverrides });
        await runWebpack(prepConfig(plugin, plugin.asLoader));
      });

      test.each(returnHookNamesAsArgs)('hook %s is tappable', (hookName) => {
        const hookStateRecord = returnHookState[hookName as keyof HookState];
        validateHookWasCalled(hookStateRecord!);
      });
    });

    describe('signatures', () => {
      let plugin: types.MiniExtractPlugin;

      beforeAll(async () => {
        state.reset(hookState);
        plugin = createPlugin({ hooks: hookOverrides.withValidators });
        await runWebpack(prepConfig(plugin, plugin.asLoader));
      });

      test.each(hookNamesAsArgs)(
        'hook %s has correct signature',
        (hookName) => {
          const { errors } = hookState[hookName as keyof HookState];
          expect(errors).toHaveLength(0);
        },
      );
    });
  });

  // @ts-ignore
  describe('output', () => {
    const expectedOutputs = [
      {
        path: './temp/test/dist/entry1.css',
        expected: require.resolve('../../test/fixtures/webpack/entry1.css'),
      },
      {
        path: './temp/test/dist/entry2.css',
        expected: require.resolve('../../test/fixtures/webpack/entry2.css'),
      },
    ];

    beforeEach(async () => {
      await reset();
    });

    test('webpack output with TestMiniCssExtractPlugin same as MiniCssExtractPlugin', async () => {
      const configs = testedPlugins.map(([_, klass, getLoader]) => {
        const plugin = new klass();
        return prepConfig(plugin, getLoader(plugin));
      });
      for (const { path } of expectedOutputs) {
        await compareWebpackOutputs(configs, path);
      }
    });
  });
});
