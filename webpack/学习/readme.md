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

2021/7/19

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

自己搭建服务器
npm install express webpack-dev-middleware -D

```js
 "scripts": {
    "watch": "webpack --watch",
    "start": "webpack-dev-server",
    "middleware": "node serve.js"
  },
```

node
```js
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const complier = webpack(config)

const app = express();

app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}))

app.listen(3000, () => {
    console.log('server')
})
```

使用webpack-dev-server 打包的文件会到内存中去，提高打包速度性能

HMR 热更新
html 不改变 css改变 避免重绘  DOC里面 不会重新请求

假设有两个模块
如果一个模块修改了，但是另一个没有修改，页面会重新整个刷新一遍，就是没有修改的那个模块也会刷新到原先的值，而且会进行请求
```js
if (module.hot) {
    console.log(1)
    module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('number'))
        number()
    })
}
```


babel 如何解析es6  
npm install --save-dev babel-loader @babel/core


npm install @babel/preset-env --save-dev es5转换成es6

npm install --save @babel/polyfill

解决低版本浏览器兼容问题
```js
 {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: [['@babel/preset-env', {
                 useBuiltIns: 'usage'
                }]]
        }
    }
}
```

存在两种 一种是生产环境 一种是写库或是组件的时候，（会影响全局，因此需要另一种配置方式）

2021/7/20

## 配置react 代码打包

npm install --save-dev @babel/preset-react

先转换react 再转换es6
```js
"presets": ["@babel/preset-react"]
```

tree shaking 只支持eES module 静态引入

把一个模块里面没有用的模块去掉 把引入的东西打包
```js
 "sideEffects": ["*.css"],
```
production 环境下只需要改
```js
 mode: 'production', //development  production
devtool: 'cheap-module-source-map',
``` 

development  环境下
```js
 mode: 'development', //development  production
 devtool: 'cheap-module-eval-source-map',

 optimization: {
        usedExports: true
    },

// pacjage.json:

 "sideEffects": ["*.css"],
```



## development  production 的区别
 
开发 development  sourceMap 很全面  不压缩  
生产  production  sourceMap 简洁 js.map 需要压缩

## webpack 和 code splitting 代码分割
工具库和业务代码放在一起时，被一起打包了  

1. 打包文件很大，加载时间很长
2. 业务代码时经常变的，但是工具库基本不需要改动

写两个入口 生成两个打包后的文件 index.html 里面有两个script

main.js被拆成loadsh.js和main.js

当页面的业务逻辑发生改变之后，不需要加载loadsh
```js
splitChunks: {
    chunks: 'all';
}
```

代码分割-与webpack无关
webpack中实现代码分割有两种方式
1. 同步代码 在webpack.config.js 中配置 optimization的
```js
splitChunks: {
    chunks: 'all';
}
```

2. 异步代码：（import）异步代码，无需做配置，会自动帮忙分割，放到新的文件中


实现 loader

1. 异常捕获
2. 国际化
3. 
源代码做一些包装


实现 plugin

loader和plugin 的区别
其他格式 loader
plugin 在某一些具体时刻上 需要一些操作 打包之前 htmlWebpackPlugin 之后clearWebpackPlugin

发布订阅 事件驱动