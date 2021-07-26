const path = require('path')
// const replaceLoader = require('./loaders/replaceLoader')

module.exports = {
    mode:'development',
    entry: {
        main: './src/index.js'
    },
    // resolveLoader: {
    //     modules: ['node_modules','./loaders']
    // },
    module: {
        rules: [{
            test: /\.js/,
            use: [{
                loader: path.resolve(__dirname, './loaders/replaceLoader.js'),
                options: {
                    name: 'jinghao'
                }
            }, {
                loader: path.resolve(__dirname, './loaders/replaceLoaderAsync.js'),
                options: {
                    name: 'jinghao'
                }
            }]
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}