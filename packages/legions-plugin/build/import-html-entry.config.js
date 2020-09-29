const resolve = require('rollup-plugin-node-resolve') //告诉 Rollup 如何查找外部模块
const path = require('path')
const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const babel =require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const version = process.env.VERSION || require('../package.json').version
 //var regenerator = require('rollup-plugin-regenerator');
 //const async = require('rollup-plugin-async');
const banner =
`/**
 * import-html-entry v${version}
 * (c) ${new Date().getFullYear()} duanguang
 * @license MIT
 */`

const resolves = _path => path.resolve(__dirname, '../', _path)

const configs = {
  umdDev: {
    input: resolves('src/import-html-entry/index.js'),
    file: resolves('dist/import-html-entry.js'),
    format: 'umd',
    env: 'development'
  },
  umdProd: {
    input: resolves('src/import-html-entry/index.js'),
    file: resolves('dist/import-html-entry.min.js'),
    format: 'umd',
    env: 'production'
  },
  commonjs: {
    input: resolves('src/import-html-entry/index.js'),
    file: resolves('dist/import-html-entry.common.js'),
    format: 'cjs'
  },
  esm: {
    input: resolves('src/import-html-entry/index.js'),
    file: resolves('dist/import-html-entry.esm.js'),
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
        babel({
          babelrc: false,
           exclude: 'node_modules/**',
            presets: [["latest", {
              "es2015": {
                "modules": false
              }
            }]],
            // presets: ['es2015-rollup', 'stage-2'],
            plugins: ['transform-class-properties','external-helpers','transform-runtime'],
           externalHelpers: true,
           runtimeHelpers:true
        }),
        buble(),
       // resolve(),
      ]
    },
    output: {
      banner,
      file: opts.file,
      format: opts.format,
      name: 'hoolinksCli'
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
