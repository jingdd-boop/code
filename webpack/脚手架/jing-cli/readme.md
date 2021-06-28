1. 创建一个新的文件夹 jing-cli
2. npm install @babel/cli @babel/core @babel/preset-env chalk commander download-git-repo ini inquirer log-symbols ora -D

npm 安装

@babel/cli @babel/core @babel/preset-env: 语法转换
commander: 命令行工具
download-git-repo: 用来下载远程模板
ini: 格式转换
inquirer: 交互式命令行工具
ora: 显示loading动画
chalk: 修改控制台输出内容样式
log-symbols: 显示出 √ 或 × 等的图标

3. babel配置
因为使用了es6语法，所以需要babel进行转译
```js
{
    "presets": [
        [
            "@babel/env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
}
```

4. jing命令
node.js 内置了对命令行操作的支持，package.json可以定义命令名字和关联的执行文件

```json
"bin": {
    "jing": "./bin/www.js"
  },

"scripts": {
    "compile": "babel src -d dist",
    "watch": "npm run compile -- -- watch"
  },
```
5. www.js 配置当前脚本由node.js解析
```js
#! /user/bin/env node
require('../dist/main.js');
```

在当前的 jing-cli 目录下执行 npm link，将 jing 命令链接到全局环境。

6. 启动项目
npm run watch