动态类型语言：运行的时候才知道有错误

静态类型语言： 编译阶段

1. 提供了静态类型风格的类型系统
2. 从es6到es10的语法支持，在之前我们都是使用babel进行编译的
3. 兼容各种浏览器，各种系统，各种服务器

为什么要使用ts呢？
1. 程序更容易理解

之前的问题： 函数或者方法输入输出的参数类型，外部条件

动态语言的约束：需要手动调试等过程

代码本身可以回答上诉问题

2. 效率更高
在不同的代码块和定义中进行跳转

代码自动补全

丰富的接口提示

3. 更少的错误
编译期间能够发现大部分的错误

杜绝一些比较常见的错误
4. 非常好的兼容性

完全兼容js

第三方库可以单独编写类型文件

流行项目都支持 ts--react vue ant design

不足：

- 增加学习成本 interface
- 多增加了开发成本


javascript基本类型
7种原始类型
Boolean
Null
Undefined
Number
Bigint
String
Symbol

Object

javascript 中对字符串的操作一定返回新的字符串，原始字符串并没有改变

原始类型：
```js
let isDone: boolean = false

let age: number = 3

let binaryNumber: number = 0b111

let first: string = 'vin'

let message: string = `h${first}`

let u: undefined = undefined

let n: null = null

let num: number = undefined
```

任意类型： 通过.没有自动提示方法
```js
let notSure: any = 4
notSure = 'jing'
notSure = false
notSure = 6
notSure.myname
notSure.myFn()
// notSure. 没有任何提示
```

联合类型
```js
let numberOrString: number | string
numberOrString = 'aaa'
numberOrString = 3
// numberOrString = false 报错
```

Array:
```js
let arrOgNumber: number[] = [1, 2, 3]
// arrOgNumber.push('5') 报错
arrOgNumber.push(5)
```

元组 Tuple
```js
let user: [string, number] = ['jing', 30]
user = ['jing'] // 报错
user = ['jing', 2, 3] // 报错
// 多了少了都会报错
```

接口：
1. 对对象的形状进行描述
2. 对类进行抽象
3. 鸭子类型
```js
interface Person {
    name: string;
    age: number;
}
let jing: Person = {
    // 少了多了属性都不行
    name: 'jing',
    age: 22
}
```

可选属性：
```js
interface Person {
    name: string;
    age?: number;
}
let jing: Person = {
    name: 'jing',
    // age: 22 不报错
}
```

只读属性
```js
interface Person {
    readonly id: number
    name: string;
    age?: number;
}
let jing: Person = {
    // 少了多了属性都不行
    id: 1,
    name: 'jing',
    // age: 22
}

jing.id = '111' // 报错  readonly 
```

readonly  用在属性上
const 用在变量上

函数类型：
```js
// function add(x: number, y: number,z?: number): number {
//     return x + y
// }
// add(1, 2, 3)

const add = function(x: number, y: number,z?: number): number {
    return x + y
}
add(1, 2, 3)

// 声明函数返回值 =>
const add2: (x: number, y: number, z?: number) => number = add
```

类型推论:

```js
let str = 'str'
str = 123 // 报错 ts编译推论 str是一个string类型

```