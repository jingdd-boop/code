# typescript
动态类型语言：运行的时候才知道有错误

静态类型语言： 编译阶段

## 优点
1. 提供了静态类型风格的类型系统
2. 从es6到es10的语法支持，在之前我们都是使用babel进行编译的
3. 兼容各种浏览器，各种系统，各种服务器
## 为什么要使用ts呢？
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

## 不足：

- 增加学习成本 interface
- 多增加了开发成本

## js类型
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



## ts原始类型：
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

## 任意类型： 通过.没有自动提示方法
```js
let notSure: any = 4
notSure = 'jing'
notSure = false
notSure = 6
notSure.myname
notSure.myFn()
// notSure. 没有任何提示
```

## 联合类型
```js
let numberOrString: number | string
numberOrString = 'aaa'
numberOrString = 3
// numberOrString = false 报错
```

## Array:
```js
let arrOgNumber: number[] = [1, 2, 3]
// arrOgNumber.push('5') 报错
arrOgNumber.push(5)
```

## 元组 Tuple
```js
let user: [string, number] = ['jing', 30]
user = ['jing'] // 报错
user = ['jing', 2, 3] // 报错
// 多了少了都会报错
```

## interface接口：
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

## 可选属性：？
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

## 只读属性readonly
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

## 类型推论:

```js
let str = 'str'
str = 123 // 报错 ts编译推论 str是一个string类型

```

## class 类
类: 定义了一切事物的抽象概念
对象： 类的实例
面向对象： 封装 继承 多态

```js
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    run() {
        return `${this.name} is running`
    }
}

const dog = new Animal('jing')
console.log(dog.name)

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const wang = new Dog('zhihao');
console.log(wang.name, wang.bark) 
// jing
// zhihao [Function: bark]

class Cat extends Animal {
    // 子类调用父类 要使用super
    constructor(name: string) {
        super(name)
        console.log(name) // jj
    }
    // 子类重写父类的run方法
    run() {
        return 'ming' + super.run()
    }
}

const zhi = new Cat('jj')
console.log(zhi.run())
//mingjj is running
```

public  都可以使用
private 只有class内部可以使用
protected(只有子类可以使用，new出来的实例不能使用)
readonly 只可以读 不能修改
static
```js
class Animal {
    name: string;
    static zhihao: string[] =
        ['am', 'hi']
    static isAnimal(a: any) {
        return a instanceof Animal
    }
    constructor(name: string) {
        this.name = name
    }
    public run() {
        return `${this.name} is running`
    }
}

const dog = new Animal('jing')
console.log(Animal.zhihao) // [ 'am', 'hi' ]
console.log(Animal.isAnimal(dog)) // true
```
## interface implements  去验证类的属性和方法
```js
interface Radio {
    switchRadio(): void;
}
interface Battery {
    checkBatteryStatus(): void;
}

// 将上面两个接口合并:
interface RadioWithBattery extends Radio {
    checkBatteryStatus()
}
class Car implements Radio{
    switchRadio() {

    }
}

// class Phone implements Radio 合并后使用
class Phone implements Radio, Battery{
    switchRadio() {
        
    }
    checkBatteryStatus() {

    }
}
```
## 枚举 enums

使用const 常量枚举，可以提高性能
```js
const enum Direction {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right',
}

const value = 'up'
if (value === Direction.up) {
    console.log('go up')
}
```

编译后生成的代码

不用const
```js
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
var value = 'up';
if (value === Direction.up) {
    console.log('go up');
}

```
用const
```js
var value = 'up';
if (value === "up" /* up */) {
    console.log('go up');
}
```

## 泛型
怎么出现 

## 泛型约束
```js
function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1,2,3])

```
只要在interface上定义的length存在
```js
interface IwithLength {
    length: number
}

function echoWithLength<T extends IwithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

const str = echoWithLength('str')
const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 2, 3])
const num = echoWithLength(1) // 类型“number”的参数不能赋给类型“IwithLength”的参数
```

### 类 class + 泛型
```js
class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop() : T {
        return this.data.shift()
    }
}

const que = new Queue<number>()
que.push(1)
// que.push('str')
console.log(que.pop().toFixed())
console.log(que.pop().toFixed())

const que1 = new Queue<string>()
que1.push('1');
console.log(que1.pop().length)

interface KeyPair<T, U> {
    key: T
    value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: "str" }
let kp2: KeyPair<string, number> = { key: 'text', value: 1 }
```
### 数组+泛型
```js
let arr: number[] = [1, 2, 4]
let arrTow: Array<number> = [1, 2, 3]
```

### 函数+泛型
```js
interface IPlus<T> {
    (a: T,b: T) : T
}
function plus(a: number, b: number): number {
    return a + b;
}
function plus1(a: string, b: string): string {
    return a + b;
}
const a: IPlus<number> = plus
const b: IPlus<string> = plus1
```

## 类型别名
给函数取别名
```js
type PlusType = (x: number,y: number) => number
function sum(x: number, y: number): number {
    return x + y
}
const sum2: PlusType = sum
```

在使用联合类型的时候：
```js
type NameResolver = () => string
type NameOrResolve = string | NameResolver
function getName(n: NameOrResolve): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

```

## 函数断言
as关键字  如果是来拟合类型，那么他只能渠道两个设置类型的共有属性，可以使用as属性取那些我们需要使用的值
```js
function getLength(input: string | number): number {
    const str = input as String
    if (str.length) {
        return str.length;
    } else {
        const number = input as Number
        return number.toString().length
    }
}
```
