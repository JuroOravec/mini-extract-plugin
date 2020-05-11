import type { MiniExtractPlugin } from '../types/subclassing';
import debug from '../lib/debug';

export default function loader<
  MEP extends MiniExtractPlugin = MiniExtractPlugin
>(
  this: MEP,
  loaderContext: any,
  source?: string,
  sourceMap?: string,
  data?: any,
) {
  debug('Started loader method');
  /**
   * The process in MiniExtractPlugin.pitch prevents loader from ever running
   * So this should remain empty, and no hook should access loader
   */
  debug('Finished loader method');
}
