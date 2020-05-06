import path from 'path';
import loaderUtils from 'loader-utils';

export default function hotLoader(content: string | Buffer, context: any) {
  const accept = context.locals
    ? ''
    : `module.hot.accept(undefined, ${context.type}Reload);`;

  return `${content}
    if(module.hot) {
      // ${Date.now()}
      var ${context.type}Reload = require(${loaderUtils.stringifyRequest(
    context.context,
    path.join(__dirname, 'hmr/hotModuleReplacement.js'),
  )})(module.id, ${JSON.stringify({
    ...context.options,
    locals: !!context.locals,
  })});
      module.hot.dispose(${context.type}Reload);
      ${accept}
    }
  `;
}
