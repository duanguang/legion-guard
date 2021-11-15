const path = require('path');
const resolves = _path => path.join(process.cwd(), _path);
const main = [
  {
    name: 'esm',
    input: resolves('src/index.ts'),
    file: resolves('dist/legions-lunar.esm.js'),
    format: 'es',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
  },
  /* {
    name: 'umd',
    input: resolves('src/index.ts'),
    file: resolves('dist/legions-lunar.umd.js'),
    format: 'umd',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
  }, */
];
const mobxdecorator = [
  {
    name: 'esmmobxdecorator',
    input: resolves('src/mobx-decorator/index.ts'),
    file: resolves('mobx-decorator/index.js'),
    format: 'es',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
  },
 /*  {
    name: 'umdmobxdecorator',
    input: resolves('src/mobx-decorator/index.ts'),
    file: resolves('mobx-decorator/mobx-decorator.umd.js'),
    format: 'umd',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
  }, */
];
const antdToolkit = [
  {
    name: 'esmantdToolkit',
    input: resolves('src/antd-toolkit/index.ts'),
    file: resolves('antd-toolkit/index.js'),
    format: 'es',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
  },
];
const ObjectHash = [
  {
    name: 'esmObjectHash',
    input: resolves('src/object-hash/index.ts'),
    file: resolves('object-hash/index.js'),
    format: 'es',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
  },
];
const warning = [
  {
    name: 'esmwarning',
    input: resolves('src/warning/index.ts'),
    file: resolves('warning/index.js'),
    format: 'es',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
  },
];
const schedule = [
  {
    name: 'esmschedule',
    input: resolves('src/schedule/index.ts'),
    file: resolves('schedule/index.js'),
    format: 'es',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
    rollupPlugin: {
      resolve: false,
      commonjs: false,
      babel: false,
    },
  },
];
const vmodel = [
  {
    name: 'esmvmodel',
    input: resolves('src/model/index.ts'),
    file: resolves('model/index.js'),
    format: 'es',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
    rollupPlugin: {
      resolve: false,
      commonjs: false,
      babel: false,
    },
  },
];
const dwreport = [
  {
    name: 'esmlegionpluginsdk',
    input: resolves('src/dw.report/index.ts'),
    file: resolves('dw.report/index.js'),
    format: 'es',
    banner: 'legions-lunar',
    outputName: 'legionsMobxDecorator',
  },
];
const entitys = {
  dwreport,
  vmodel,
  schedule,
  warning,
  ObjectHash,
  antdToolkit,
  mobxdecorator,
  main,
};
let all = [];
Object.keys(entitys).map(key => {
  all.push(...entitys[key]);
});
module.exports = {
  external: [
    'reflect-metadata',
    'antd',
    'brain-store',
    'brain-store-utils',
    'react',
    'mobx',
    'prop-types',
    'legions-nprogress',
    'lodash.debounce',
    'lodash',
    'object-hash',
    'legions-thirdparty-plugin',
    'legions-utils-tool',
    /*  'legions-lunar', */
    /* path.resolve('./src/antd-toolkit/index.ts'),
     path.resolve('./src/warning/index.ts'),
    path.resolve('./src/schedule/index.ts'), */
  ],
  rollupPlugin: {
    babel: false,
    typescript: {
      moduleSpecifier: [
        {
          libraryName: '../antd-toolkit',
          mapLibraryName: 'legions-lunar/antd-toolkit',
        },
        {
          libraryName: '../schedule',
          mapLibraryName: 'legions-lunar/schedule',
        },
        {
          libraryName: '../warning',
          mapLibraryName: 'legions-lunar/warning',
        },
      ],
    },
  },
  extendPlugins: [],
  entitys: [
    ...(entitys.hasOwnProperty(process.env.PACKAGE)
      ? entitys[process.env.PACKAGE]
      : all),
  ],
};
