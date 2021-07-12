/*
 * @Author: duanguang
 * @Date: 2020-10-26 15:59:35
 * @Last Modified by: duanguang
 * @Last Modified time: 2020-12-07 14:35:45
 */
const path = require('path');
const resolves = _path => path.join(process.cwd(), _path);
const main = [
  /* {
    name: 'iife',
    input: resolves('src/index.ts'),
    file: resolves('dist/legions-utils-tool.js'),
    format: 'iife',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  }, */
  {
    name: 'esm',
    input: resolves('src/index.ts'),
    file: resolves('dist/index.js'),
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
    name: 'escookie',
    input: resolves('src/cookie/index.ts'),
    file: resolves('cookie/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const debounce = [
  {
    name: 'esdebounce',
    input: resolves('src/debounce/index.ts'),
    file: resolves('debounce/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const dom = [
  {
    name: 'esdom',
    input: resolves('src/dom/index.ts'),
    file: resolves('dom/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const download = [
  {
    name: 'esdownload',
    input: resolves('src/download/index.ts'),
    file: resolves('download/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const formatdate = [
  {
    name: 'esformatdate',
    input: resolves('src/format.date/index.ts'),
    file: resolves('format.date/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const formatstring = [
  {
    name: 'esformatstring',
    input: resolves('src/format.string/index.ts'),
    file: resolves('format.string/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const invariant = [
  {
    name: 'esinvariant',
    input: resolves('src/invariant/index.js'),
    file: resolves('invariant/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const objectutils = [
  {
    name: 'esobjectutils',
    input: resolves('src/object.utils/index.ts'),
    file: resolves('object.utils/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const regex = [
  {
    name: 'esregex',
    input: resolves('src/regex/index.ts'),
    file: resolves('regex/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const storage = [
  {
    name: 'esstorage',
    input: resolves('src/storage/index.ts'),
    file: resolves('storage/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const typevalidation = [
  {
    name: 'estypevalidation',
    input: resolves('src/type.validation/index.ts'),
    file: resolves('type.validation/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const browser = [
  {
    name: 'esbrowser',
    input: resolves('src/browser/index.ts'),
    file: resolves('browser/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
];
const stateMachine = [
  {
    name: 'esstateMachine',
    input: resolves('src/state.machine/index.ts'),
    file: resolves('state.machine/index.js'),
    format: 'es',
    banner: 'legions-utils-tool',
    outputName: 'legionsUtilsTool',
  },
]
const entitys = {
  typevalidation,
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
  stateMachine,
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
