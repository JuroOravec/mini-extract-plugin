import { Template } from 'webpack';
import { SourceMapSource, OriginalSource, ConcatSource } from 'webpack-sources';

import { types, util } from '../../../src';

import type { MiniCssExtractPlugin, Taps } from './types';
import { getChunkObject } from './util';

const hooks: Partial<Taps> = {
  compilation: (ctx) => {
    const {
      classOptions: { pluginName, type, moduleType },
      compilation: { mainTemplate },
      options,
    } = ctx;

    mainTemplate.hooks.localVars.tap(pluginName, (source, chunk, hash) => {
      const chunkMap = getChunkObject(moduleType, chunk);

      if (Object.keys(chunkMap).length > 0) {
        return Template.asString([
          source,
          '',
          `// object to store loaded ${type} chunks`,
          `var ${type}InstalledChunks = {`,
          Template.indent(
            (chunk.ids || [])
              .map((id) => `${JSON.stringify(id)}: 0`)
              .join(',\n'),
          ),
          '}',
        ]);
      }

      return source;
    });

    mainTemplate.hooks.requireEnsure.tap(pluginName, (source, chunk, hash) => {
      const chunkMap = getChunkObject(moduleType, chunk);

      if (Object.keys(chunkMap).length > 0) {
        // @ts-ignore
        const chunkMaps = chunk.getChunkMaps();
        const { crossOriginLoading } = mainTemplate.outputOptions;
        // @ts-ignore
        const linkHrefPath = mainTemplate.getAssetPath(
          JSON.stringify(options.chunkFilename),
          {
            // @ts-ignore
            hash: `" + ${mainTemplate.renderCurrentHashCode(hash)} + "`,
            hashWithLength: (length: number) =>
              // @ts-ignore
              `" + ${mainTemplate.renderCurrentHashCode(hash, length)} + "`,
            chunk: {
              id: '" + chunkId + "',
              hash: `" + ${JSON.stringify(chunkMaps.hash)}[chunkId] + "`,
              hashWithLength(length: number) {
                const shortChunkHashMap = Object.create(null);

                for (const chunkId of Object.keys(chunkMaps.hash)) {
                  if (typeof chunkMaps.hash[chunkId] === 'string') {
                    shortChunkHashMap[chunkId] = chunkMaps.hash[
                      chunkId
                    ].substring(0, length);
                  }
                }

                return `" + ${JSON.stringify(shortChunkHashMap)}[chunkId] + "`;
              },
              contentHash: {
                [moduleType]: `" + ${JSON.stringify(
                  chunkMaps.contentHash[moduleType],
                )}[chunkId] + "`,
              },
              contentHashWithLength: {
                [moduleType]: (length: number) => {
                  const shortContentHashMap: { [key: string]: any } = {};
                  const contentHash = chunkMaps.contentHash[moduleType];

                  for (const chunkId of Object.keys(contentHash)) {
                    if (typeof contentHash[chunkId] === 'string') {
                      shortContentHashMap[chunkId] = contentHash[
                        chunkId
                      ].substring(0, length);
                    }
                  }

                  return `" + ${JSON.stringify(
                    shortContentHashMap,
                  )}[chunkId] + "`;
                },
              },
              name: `" + (${JSON.stringify(
                chunkMaps.name,
              )}[chunkId]||chunkId) + "`,
            },
            contentHashType: moduleType,
          },
        );

        return Template.asString([
          source,
          '',
          `// ${pluginName} ${type} loading`,
          `var ${type}Chunks = ${JSON.stringify(chunkMap)};`,
          `if(${type}InstalledChunks[chunkId]) promises.push(${type}InstalledChunks[chunkId]);`,
          `else if(${type}InstalledChunks[chunkId] !== 0 && ${type}Chunks[chunkId]) {`,
          Template.indent([
            `promises.push(${type}InstalledChunks[chunkId] = new Promise(function(resolve, reject) {`,
            Template.indent([
              `var href = ${linkHrefPath};`,
              `var fullhref = ${mainTemplate.requireFn}.p + href;`,
              'var existingLinkTags = document.getElementsByTagName("link");',
              'for(var i = 0; i < existingLinkTags.length; i++) {',
              Template.indent([
                'var tag = existingLinkTags[i];',
                'var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");',
                'if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();',
              ]),
              '}',
              'var existingStyleTags = document.getElementsByTagName("style");',
              'for(var i = 0; i < existingStyleTags.length; i++) {',
              Template.indent([
                'var tag = existingStyleTags[i];',
                'var dataHref = tag.getAttribute("data-href");',
                'if(dataHref === href || dataHref === fullhref) return resolve();',
              ]),
              '}',
              'var linkTag = document.createElement("link");',
              'linkTag.rel = "stylesheet";',
              `linkTag.type = "text/${type}";`,
              'linkTag.onload = resolve;',
              'linkTag.onerror = function(event) {',
              Template.indent([
                'var request = event && event.target && event.target.src || fullhref;',
                `var err = new Error("Loading ${type} chunk " + chunkId + " failed.\\n(" + request + ")");`,
                `err.code = "${type}_CHUNK_LOAD_FAILED";`,
                'err.request = request;',
                `delete ${type}InstalledChunks[chunkId]`,
                'linkTag.parentNode.removeChild(linkTag)',
                'reject(err);',
              ]),
              '};',
              'linkTag.href = fullhref;',
              crossOriginLoading
                ? Template.asString([
                    `if (linkTag.href.indexOf(window.location.origin + '/') !== 0) {`,
                    Template.indent(
                      `linkTag.crossOrigin = ${JSON.stringify(
                        crossOriginLoading,
                      )};`,
                    ),
                    '}',
                  ])
                : '',
              'var head = document.getElementsByTagName("head")[0];',
              'head.appendChild(linkTag);',
            ]),
            '}).then(function() {',
            Template.indent([`${type}InstalledChunks[chunkId] = 0;`]),
            '}));',
          ]),
          '}',
        ]);
      }

      return source;
    });
  },

  dependency: (context, { exports: exported }) => {
    const { childCompilation, classOptions } = context;
    const deps: types.GetHookReturnType<
      'dependency',
      MiniCssExtractPlugin
    > = [];
    for (const [id, content, media, sourceMap] of exported) {
      const mod = util.module.findById(childCompilation.modules, id);
      if (!mod) continue;
      deps.push({
        miniExtractType: classOptions.type,
        moduleType: classOptions.moduleType,
        identifier: mod.identifier(),
        context: mod.context,
        content,
        media,
        sourceMap,
      });
    }
    return deps;
  },

  merge: (ctx, modules) => {
    const {
      compilation: { requestShortener },
    } = ctx;
    const source = new ConcatSource();
    const externalsSource = new ConcatSource();
    for (const mod of modules) {
      if (/^@import url/.test(mod.content)) {
        // HACK for IE
        // http://stackoverflow.com/a/14676665/1458162
        let { content } = mod;

        if (mod.media) {
          // insert media into the @import
          // this is rar
          // TODO improve this and parse the CSS to support multiple medias
          content = content.replace(/;|\s*$/, mod.media);
        }

        externalsSource.add(content);
        externalsSource.add('\n');
      } else {
        if (mod.media) source.add(`@media ${mod.media} {\n`);

        if (mod.sourceMap) {
          source.add(
            new SourceMapSource(
              mod.content,
              mod.readableIdentifier(requestShortener),
              // @ts-ignore
              mod.sourceMap,
            ),
          );
        } else {
          source.add(
            new OriginalSource(
              mod.content,
              mod.readableIdentifier(requestShortener),
            ),
          );
        }
        source.add('\n');

        if (mod.media) source.add('}\n');
      }
    }
    return new ConcatSource(externalsSource, source);
  },
};

export default hooks;
