const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development', //development  production
    devtool: 'source-map',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        open: true,
        port:8080
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
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
        template:'src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        // publicPath:'http..',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}