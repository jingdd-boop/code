const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    mode: 'production', //development  production
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
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
    ],
    output: {
        // publicPath:'/',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}