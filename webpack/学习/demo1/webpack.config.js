const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development', //development  production
    devtool: 'source-map',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true,
        hotOnly:true
    },
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
        },{
            test: /\.vue$/,
            use: {
                loader: 'vue-loader'
            }
        },{
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
               },
                'sass-loader',
                'postcss-loader'
            ]
        },{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }, {
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
          }]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template:'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        publicPath:'/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}