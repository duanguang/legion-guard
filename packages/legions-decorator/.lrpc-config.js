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
      name: 'umd',
      input: resolves('src/index.ts'),
      file: resolves('dist/legions-mobx-decorator.esm.js'),
      format: 'umd',
      banner: ' legions-decorator',
      outputName: 'legionsDecorator',
    },
    {
      name: 'umdasyncvalidator',
      input: resolves('src/async.validator/index.ts'),
      file: resolves('async.validator/index.js'),
      format: 'umd',
      banner: 'legions-decorator',
      outputName: 'legionsDecorator',
    },
    {
      name: 'umdenumplus',
      input: resolves('src/enumerate/index.ts'),
      file: resolves('enumerate/index.js'),
      format: 'umd',
      banner: 'legions-decorator',
      outputName: 'legionsDecorator',
    },
  ],
};
