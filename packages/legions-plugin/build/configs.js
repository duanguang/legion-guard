const resolve = require('rollup-plugin-node-resolve') //告诉 Rollup 如何查找外部模块
const path = require('path')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const babel = require('rollup-plugin-babel');
const commonjs =  require('rollup-plugin-commonjs')
const uglify = require('rollup-plugin-uglify');
const version = process.env.VERSION || require('../package.json').version
 //var regenerator = require('rollup-plugin-regenerator');
 //const async = require('rollup-plugin-async');
const banner =
`/**
 * legions-plugin-sdk v${version}
 * (c) ${new Date().getFullYear()} duanguang
 * @license MIT
 */`

const resolves = _path => path.resolve(__dirname, '../', _path)
/** 1. amd -- 异步模块定义，用于像RequestJS这样的模块加载器。
2. cjs -- CommonJS, 适用于Node或Browserify/webpack
3. es -- 将软件包保存为ES模块文件。
4. iife -- 一个自动执行的功能，适合作为 <script>标签这样的。
5. umd -- 通用模块定义，以amd, cjs, 和 iife 为一体。 */
const configs = {
  umdDev: {
    input: resolves('src/index.js'),
    file: resolves('dist/legions-plugin-sdk.umd.js'),
    format: 'umd',
    env: 'development'
  },
  iife: {
    input: resolves('src/index.js'),
    file: resolves('dist/legions-plugin-sdk.js'),
    format: 'iife'
  },
  iifeProd: {
    input: resolves('src/index.js'),
    file: resolves('dist/legions-plugin-sdk.min.js'),
    format: 'iife',
    env: 'production',
  },
  commonjs: {
    input: resolves('src/index.js'),
    file: resolves('dist/legions-plugin-sdk.common.js'),
    format: 'cjs'
  },
  esm: {
    input: resolves('src/index.js'),
    file: resolves('dist/legions-plugin-sdk.esm.js'),
    format: 'es'
  }
}

function genConfig (opts) {
  const config = {
    input: {
      input: opts.input,
      plugins: [
        replace({
          __VERSION__: version
        }),
        resolve({
          jsnext: true,
          main: true,
          browser: true,
        }),
        commonjs(),
        babel({
          babelrc: false,
           exclude: 'node_modules/**',
            presets: [["latest", {
              "es2015": {
                "modules": false
              }
            }]],
          /*  presets:[
            ["env", {
              "modules": false,
              "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
              }
            }],
            "stage-2"
          ], */
            /* presets: ['es2015-rollup'], */
        /* plugins: ['transform-class-properties','external-helpers','transform-runtime'], */
            plugins: ['external-helpers',],
           /* externalHelpers: true, */
           /* runtimeHelpers:true */
        }),
        buble(),
       // resolve(),
      ]
    },
    output: {
      banner,
      file: opts.file,
      format: opts.format,
      name: 'legionsPlugins'
    }
  }

  if (opts.env) {
    config.input.plugins.unshift(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }

  return config
}

function mapValues (obj, fn) {
  const res = {}
  Object.keys(obj).forEach(key => {
    res[key] = fn(obj[key], key)
  })
  return res
}

module.exports = mapValues(configs, genConfig)
