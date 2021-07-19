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
}
```

2021/7/17

使用样式loader 
css-loader 处理css文件的依赖关系  
style-loader 将央视挂载到head里面

scss scss-loader
安装 npm install sass-loader node-sass --save-dev


浏览器兼容样式
 npm install -D postcss-loader

 postcss.config.js 配置
 npm install autoprefixer -D
 ```js
 module.exports = {
    plugin: [
        require('autoprefixer')
    ]
}
 ```


样式
 ```js
 {
        test: /\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2, // 有引入文件的时候需要使用
                    modules: true
                }
            },
            'sass-loader',
            'postcss-loader'
            ]
        }
 ```

 css模块化  modules

 font 编译
 ```js
 {
    test: /\.(eot|ttf|svg))$/,
    use: {
        loader: 'file-loader',
        },
}
 ```


webpack 插件

npm install html-webpack-plugin -D
html-webpack-plugin  会在打包结束后，自动生成一个html文件 并且把打包生成的js自动引入到这个html文件中

plugin 可以在webpack 可以在某个时刻做一些功能

重新打包的时候，先把之前的删掉 再进行打包

clean-webpack-plugin

npm install clean-webpack-plugin -D

```js
 plugins: [new HtmlWebpackPlugin({
        template:'src/index.html'
    }),new CleanWebpackPlugin(['dist'])],
```


entry output 基本配置


output
publicPath:'http..', 
如果index.html需要给后端，但是静态资源需要释放到cdn上 可以使用publicPath



sourceMap

现在知道dist目录下main.js的96行出错

sourceMap 它是一个映射关系 他知道dist目录下main.js文件的96行
实际上对应的src目录下的index.js文件中的第一行

当前其实是index.js 中的第一行代码出错了
```js
 devtool: 'source-map', // bundle.js.map 
 devtool: 'inline-source-map',// 直接到build.js  行列
 devtool: 'cheap-inline-source-map',// 直接到build.js  行
 devtool: 'cheap-module-eval-source-map',// 最佳实践  打包速度比较快 比较提示全  developent
 devtool: 'cheap-module-source-map',// 最佳实践  线上环境  production
```

webapck DevServer 提升开发效率
热更新：
1. package-json  
需要刷新
```js
"scripts": {
    "bundle": "webpack --watch"
  },
```

2.webpackDevServer
不需要刷新
```js
 devServer: {
        contentBase: './dist'
    },


 "scripts": {
    "watch": "webpack --watch",
    "start": "webpack-dev-server"
  },
```


降低webpack-cli 版本
npm i webpack-cli@3.3.12 -D
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210719160010226.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1Njc4NjA3,size_16,color_FFFFFF,t_70)


```js
 devServer: {
        contentBase: './dist',
        open: true,
        proxy: {
            '/api': 'http://localhost:3000/'
        },
        port:8080
    },
```