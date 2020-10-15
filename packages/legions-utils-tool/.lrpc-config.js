const path = require('path');
const resolves = _path => path.join(process.cwd(), _path);
module.exports = {
  external: ['invariant'],
  rollupPlugin: {
    typescript: {
      moduleSpecifier: [
        {
          libraryName: '../invariant',
          mapLibraryName: 'legions-utils-tool/invariant',
        },
        {
          libraryName: '../type.validation',
          mapLibraryName: 'legions-utils-tool/type.validation',
        },
      ],
    },
    babel: false,
    replace: {
      __DEV__: `(process.env.NODE_ENV !== 'production')`,
    },
  },
  extendPlugins: [],
  entitys: [
    /* {
      name: 'umdDev',
      input: resolves('src/index.ts'),
      file: resolves('dist/legions-utils-tool.umd.js'),
      format: 'umd',
      env: 'development',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'iife',
      input: resolves('src/index.ts'),
      file: resolves('dist/legions-utils-tool.js'),
      format: 'iife',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'esm',
      input: resolves('src/index.ts'),
      file: resolves('dist/legions-utils-tool.esm.js'),
      format: 'es',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'iifeProd',
      input: resolves('src/index.ts'),
      file: resolves('dist/legions-utils-tool.min.js'),
      format: 'iife',
      env: 'production',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umdcookie',
      input: resolves('src/cookie/index.ts'),
      file: resolves('cookie/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umddebounce',
      input: resolves('src/debounce/index.ts'),
      file: resolves('debounce/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umddom',
      input: resolves('src/dom/index.ts'),
      file: resolves('dom/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umddownload',
      input: resolves('src/download/index.ts'),
      file: resolves('download/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umdformatdate',
      input: resolves('src/format.date/index.ts'),
      file: resolves('format.date/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umdformatstring',
      input: resolves('src/format.string/index.ts'),
      file: resolves('format.string/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umdinvariant',
      input: resolves('src/invariant/index.js'),
      file: resolves('invariant/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    }, */
    {
      name: 'umdobjectutils',
      input: resolves('src/object.utils/index.ts'),
      file: resolves('object.utils/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    /* {
      name: 'umdregex',
      input: resolves('src/regex/index.ts'),
      file: resolves('regex/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umdstorage',
      input: resolves('src/storage/index.ts'),
      file: resolves('storage/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umdtaro',
      input: resolves('src/taro.request/index.ts'),
      file: resolves('taro.request/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umdtypevalidation',
      input: resolves('src/type.validation/index.ts'),
      file: resolves('type.validation/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    },
    {
      name: 'umdvueStore',
      input: resolves('src/vue.store/index.ts'),
      file: resolves('vue.store/index.js'),
      format: 'umd',
      banner: 'legions-utils-tool',
      outputName: 'legionsUtilsTool',
    }, */
  ],
};
