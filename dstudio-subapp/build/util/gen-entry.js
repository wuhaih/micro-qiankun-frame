var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

//配置多页面入口
var g_htmlArr = require('./html-config')

exports.getEntry = function (htmlArr) {
  var entries = {};
  htmlArr.forEach(page => {
    entries[page.name] = page.path
    console.log('[Get Entry 获取入口] DONE:',(page.name+':'+page.path))
  });
  return entries;
}


exports.generateHtml = function (htmlArr, plugins) {
  htmlArr.forEach(page => {
      var conf = {
          title: page.title,
          filename: `${page.name}.html`, // 生成的模板名称
          template: page.template, // 模板路径
          chunks: [page.name, 'vendors'],//多页模式开启
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          },
          inject: true,
          // chunksSortMode: 'dependency'
      };
      plugins.push(new HtmlWebpackPlugin(conf));
 })
}


/**
 * 生成入口webpark配置
 */
exports.generateWebparkConfig = function (webpackConfig) {
  //获取入口对象
  webpackConfig.entry = exports.getEntry(g_htmlArr);
  // 生成入口HTML
  exports.generateHtml(g_htmlArr, webpackConfig.plugins);
}