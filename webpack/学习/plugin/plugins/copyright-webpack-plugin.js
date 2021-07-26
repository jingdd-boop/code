class CopyRightPlugin {
    constructor() {
        console.log('111')
    }
    // webpack的一个实例
    // compilation跟本次打包相关的东西
    // 放到dist目录之前
    apply(compiler) {
        compiler.hooks.emit.tapAsync('CopyRightPlugin',(compilation,cb) => {
            console.log('123')
            console.log(compilation.assets)
            compilation.assets['CopyRight.txt'] = {
                source: function () {
                    return 'jingjing'
                },
                size: function () {
                    return 21
                }
            }
            // {
//   'main.js': CachedSource {
//     _source: ConcatSource { _children: [Array], _isOptimized: false },
//     _cachedSourceType: undefined,
//     _cachedSource: undefined,
//     _cachedBuffer: undefined,
//     _cachedSize: undefined,
//     _cachedMaps: Map(0) {},
//     _cachedHashUpdate: undefined
//   }
// }
            cb()
        })

    }
}

module.exports = CopyRightPlugin