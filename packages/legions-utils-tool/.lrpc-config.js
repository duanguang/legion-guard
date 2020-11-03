/*
 * @Author: duanguang
 * @Date: 2020-10-26 15:59:35
 * @Last Modified by: duanguang
 * @Last Modified time: 2020-11-03 16:53:03
 */
const path = require('path');
const resolves = _path => path.join(process.cwd(), _path);
const main = [
  {
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
];
const cookie = [
  {
    name: 'umdcookie',
    input: resolves('src/cookie/index.ts'),
    file: resolves('cookie/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const debounce = [
  {
    name: 'umddebounce',
    input: resolves('src/debounce/index.ts'),
    file: resolves('debounce/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const dom = [
  {
    name: 'umddom',
    input: resolves('src/dom/index.ts'),
    file: resolves('dom/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const download = [
  {
    name: 'umddownload',
    input: resolves('src/download/index.ts'),
    file: resolves('download/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const formatdate = [
  {
    name: 'umdformatdate',
    input: resolves('src/format.date/index.ts'),
    file: resolves('format.date/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const formatstring = [
  {
    name: 'umdformatstring',
    input: resolves('src/format.string/index.ts'),
    file: resolves('format.string/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const invariant = [
  {
    name: 'umdinvariant',
    input: resolves('src/invariant/index.js'),
    file: resolves('invariant/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const objectutils = [
  {
    name: 'umdobjectutils',
    input: resolves('src/object.utils/index.ts'),
    file: resolves('object.utils/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const regex = [
  {
    name: 'umdregex',
    input: resolves('src/regex/index.ts'),
    file: resolves('regex/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const storage = [
  {
    name: 'umdstorage',
    input: resolves('src/storage/index.ts'),
    file: resolves('storage/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const taro = [
  {
    name: 'umdtaro',
    input: resolves('src/taro.request/index.ts'),
    file: resolves('taro.request/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const typevalidation = [
  {
    name: 'umdtypevalidation',
    input: resolves('src/type.validation/index.ts'),
    file: resolves('type.validation/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const vueStore = [
  {
    name: 'umdvueStore',
    input: resolves('src/vue.store/index.ts'),
    file: resolves('vue.store/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const browser = [
  {
    name: 'umdbrowser',
    input: resolves('src/browser/index.ts'),
    file: resolves('browser/index.js'),
    format: 'umd',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const entitys = {
  vueStore,
  typevalidation,
  taro,
  storage,
  regex,
  objectutils,
  invariant,
  formatstring,
  formatdate,
  download,
  dom,
  debounce,
  cookie,
  main,
  browser,
};
let all = [];
Object.keys(entitys).map(key => {
  all.push(...entitys[key]);
});
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
    ...(entitys.hasOwnProperty(process.env.PACKAGE)
      ? entitys[process.env.PACKAGE]
      : all),
  ],
};
