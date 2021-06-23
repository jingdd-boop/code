// 匹配单个loader

{
    test: /\.js$/,
    use: [
        {
            loader: Path2D.resolve('path/to/loader.js'),
            options: {/* ... */}
        }
    ]
}

// 匹配多个loader
// 使用 resolveLoader.modules 配置，webpack 将会从这些目录中搜索这些 loaders。例如，如果你的项目中有一个 /loaders 本地目录：
// resolveLoader: {
//     modules: [
//         'node_modules',
//         path.resolve(__dirname, 'loaders')
//     ]
// }

{
    test: /\.js$/,
    use: [
        'bar-loader',
        'foo-loader'
    ]
}