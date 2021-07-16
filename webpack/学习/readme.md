2021/7/16
npm init  新增 package.json
npm install webpack-cli --save-dev
npx webpack ./index.js  生成dist 目录 打包好的也就是webpack 翻译完的

webpack 功能一 可以翻译某些浏览器不支持的语言

bundler  webpack 
js模块  css模块 等模块资源 


npm install webpack webpack-cli -g 全局安装webpack
npm uninstall webpack webpack-cli -g 卸载全局安装的webpack (尽量不使用全局安装的webpack)

npm install webpack webpack-cli -D   局部安装
webpack -v 是找不到的
npx webpack -v 可以在node_modules找到

npm info webpack 查版本号
npm insatll webpack@
npm install webpack-cli -D （--save-dev）

webpack默认配置文件 webpack.config.js

```js
const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    }
}
```

修改配置文件名字
npx webpack --config webpackconfig.js （修改了名字）

webpack index.js  全局
npm webpack index.js  局部
npm run -- scripts下面配置


development  代码不会压缩
production 代码压缩

识别图片

file-loader  和 url-loader(base64 图片)不会生成文件而是打包到bundle 省了一次http 但是如果图片过大 不能使用url-loader 设置limit

```js
 module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    // placeholder 占位符
                    name: '[name]_[hash].[ext]',
                    outputPath: 'image/',
                    limit: 2048
                }
            },
        }]
    },
```
识别vue
```js
{
    test: /\.vue$/,
    use: {
        loader: 'vue-loader'
    }
}```