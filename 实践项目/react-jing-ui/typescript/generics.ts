// function echo<T>(arg: T): T {
//     return arg
// }

// const result = echo(true)

// function swap<T,U>(tuple: [T,U]): [U,T] {
//     return [tuple[0],tuple[1]]
// }

// const result = swap(['string',123])

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1, 2, 3])

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
// const num = echoWithLength(1) // 类型“number”的参数不能赋给类型“IwithLength”的参数

// 类 class + 泛型
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

// 数组+泛型
let arr: number[] = [1, 2, 4]
let arrTow: Array<number> = [1, 2, 3]


// 函数+泛型
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