const path = require('path')
const CopyRightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new CopyRightWebpackPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}