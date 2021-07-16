const path = require('path')

module.exports = {
    mode: 'development', //development  production
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
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}