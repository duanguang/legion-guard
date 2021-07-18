const path = require('path');
const resolves = _path => path.join(process.cwd(), _path);
module.exports = {
  external: ['reflect-metadata', 'legions-utils-tool/regex', '../regex'],
  rollupPlugin: {
    babel: false,
    typescript: {
      moduleSpecifier: [
        {
          libraryName: '../regex',
          mapLibraryName: 'legions-utils-tool/regex',
        },
      ],
    },
  },
  extendPlugins: [],
  entitys: [
    {
      name: 'es',
      input: resolves('src/index.ts'),
      file: resolves('dist/legions-mobx-decorator.esm.js'),
      format: 'es',
      banner: ' legions-decorator',
      outputName: 'legionsDecorator',
    },
    {
      name: 'esasyncvalidator',
      input: resolves('src/async.validator/index.ts'),
      file: resolves('async.validator/index.js'),
      format: 'es',
      banner: 'legions-decorator',
      outputName: 'legionsDecorator',
    },
    {
      name: 'esenumplus',
      input: resolves('src/enumerate/index.ts'),
      file: resolves('enumerate/index.js'),
      format: 'es',
      banner: 'legions-decorator',
      outputName: 'legionsDecorator',
    },
    {
      name: 'esurlParams',
      input: resolves('src/urlParams/index.ts'),
      file: resolves('urlParams/index.js'),
      format: 'es',
      banner: 'legions-decorator',
      outputName: 'legionsDecorator',
    }
  ],
};
