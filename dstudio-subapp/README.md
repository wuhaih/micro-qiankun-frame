# webpack5-quickstart

> 使用vue-cli脚手架创建一个vue+webpack3+js的项目：vue init webpack project
> 将其改造为vue+webpack5+TypeScript

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## babel配置

``` bash
"@vue/babel-plugin-transform-vue-jsx"
```
        
## webpack 配置
``` bash
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
},
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
},

webpack5 不支持cheap-module-source-map，应该改成eval-cheap-module-source-map，语法检测更严格
```

## webpack 如何实现动态导入模块的

> 在单页应用中，经常使用 webpack 的 动态导入 功能来异步加载模块，从而减少部分文件的体积。我们可以通过webpack 提供的 import() 和 require.ensure 两个 API 来使用该功能。由于两个方法根本实现都是相同的，本文的示例都基于 import() 方法。
> weback的模块联邦原理和import相似，也是做成了预留的promise坑位，通过webpackjsonp加载，获取变成发请求获取而已。
> JavaScript 被列为 ‘动态’ 或 ‘解释执行’ 语言，于其他传统语言（如 java）不同的是，JavaScript是边编译边执行的。

