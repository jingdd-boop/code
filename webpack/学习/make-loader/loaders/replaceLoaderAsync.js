const loaderUtils = require('loader-utils')
module.exports = function (source) {
    const options = loaderUtils.getOptions(this)
    // console.log(this.query.name)
    console.log(options.name)
    // return source.replace('jing',this.query.name)

    const callback = this.async();
    // 异步
    setTimeout(() => {
        const result = source.replace('jing', options.name)
        callback(null,result)
    },1000)
}