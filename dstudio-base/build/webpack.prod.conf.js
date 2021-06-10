const path = require('path');
const utils = require('./utils')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../config')
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')

const utilEntry = require('./util/gen-entry')
const env = config.build.env

const webpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    usedExports: true,
    minimize: true,
    minimizer: [new terserPlugin({
      // 目的是为了编译环境清除控制台以及关闭注释
      cache: true,
      parallel: true,
      terserOptions: {
        output: {
          comments: false
        },
        compress: {
          drop_debugger: true,
          drop_console: true
        }
        // myCustomOption: true,
      },
      // Can be async
      // minify: (file, sourceMap, minimizerOptions) => {
      //   // The `minimizerOptions` option contains option from the `terserOptions` option
      //   // You can use `minimizerOptions.myCustomOption`
      //   const extractedComments = [];

      //   // Custom logic for extract comments

      //   const { map, code } = require("uglify-module") // Or require('./path/to/uglify-module')
      //     .minify(file, {
      //       /* Your options for minification */
      //     });

      //   return { map, code, extractedComments };
      // },
    })
    ],
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          chunks: "initial",
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          // reuseExistingChunk: true
        },
        common: {
          name: "common",
          chunks: "initial",
          minChunks: 2,
          priority: -20,
          // reuseExistingChunk: true
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      chunkFilename: utils.assetsPath('css/[id].[contenthash].css'),
      //allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
    //new CleanWebpackPlugin(),
    //new HtmlWebpackPlugin({
    //     filename: config.build.index,
    //     template: 'index.html',
    //     inject: true,
    //     minify: {
    //       removeComments: true,
    //       collapseWhitespace: true,
    //       removeAttributeQuotes: true
    //     },
    //     //chunks: ["runtime", "vendors", "common", "main"],
    //   }),
  ]
})

utilEntry.generateWebparkConfig(webpackConfig)


if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig