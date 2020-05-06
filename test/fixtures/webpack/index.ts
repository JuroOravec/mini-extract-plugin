import type { Configuration } from 'webpack';

import config from './config';
import pWebpack from '../../lib/p-webpack';

export async function runWebpack(configOverrides: Configuration = {}) {
  const mergedConfig: Configuration = {
    ...config,
    ...configOverrides,
    module: {
      rules: [...(configOverrides?.module?.rules || [])],
    },
    plugins: [...(configOverrides?.plugins || [])],
  };

  const stats = await pWebpack(mergedConfig);
  const info = stats.toJson();
  expect(info.errors).toHaveLength(0);
  expect(info.warnings).toHaveLength(0);
  return stats;
}
