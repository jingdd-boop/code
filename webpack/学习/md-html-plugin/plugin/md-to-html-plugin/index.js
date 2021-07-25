const { readFileSync } = require('fs')
const { resolve } = require('path')
const { Compilation } = require('webpack')
const INNER_MARK = '<!-- inner -->'
const {compileHTML} = require('./compiler')
class MdToHtmlPlugin {
    constructor({ template, filename }) {
        if (!template) {
            throw new Error('template 找不到')
        }
        this.template = template
        this.filename = filename ? filename : 'md.html'
    }
    apply(compiler) {
        compiler.hooks.emit.tap('md-to-html-plugin', (compilation) => {
            const _assets = compilation.assets;
            const _mdContent = readFileSync(this.template, 'utf8');
            const _templateHtml = readFileSync(resolve(__dirname, 'template.html'), 'utf8')
            const _mdContentArray = _mdContent.split('\n')
            const _htmlStr = compileHTML(_mdContentArray)
            // console.log(_htmlStr)
            const _finalHTML = _templateHtml.replace(INNER_MARK,_htmlStr)
            // console.log(_mdContent,'1')
            _assets[this.filename] = {
                source() {
                    return _finalHTML
                },
                size() {
                    return _finalHTML.length
                }
            }
           
        })
    }
}


module.exports =  MdToHtmlPlugin