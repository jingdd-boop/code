const path = require('path')
const HtmlWebapckPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        modules: [
            path.resolve(__dirname, ''),
            path.resolve(__dirname, 'node_modules'),
        ]
    },
    plugins: [
        new HtmlWebapckPlugin({
            template: path.resolve(__dirname,'public/index.html')
        }),
    ]

}