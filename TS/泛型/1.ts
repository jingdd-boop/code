// function identity(arg: number):
// number {
//     return arg;
// }
// 这个函数会返回任何传入它的值


// function identity(arg: any): any {
//     return arg;
// }

// any类型会导致这个函数可以接收任何类型，如果我们传入一个数字，我们只知道任何类型都有可能被返回、

// 我们需要返回值和传入参数的类型是i相同的，引入一种类型变量，只用来标识类型而不是值

// function identity<T>(arg: T): T {
//     return arg;
// }

// 添加了类型变量T，T帮助我们捕获用户传入的类型

// 使用泛型

// let output = identity<string>("myString")
// let output = identity("myString")



// 使用泛型变量
// 当我们项打印arg的长度
// function lengthIdentity<T>(arg: T):
// T {
//     console.log(arg.length);
//     return arg
// }
// 我们传入的类型变量代表的是任意类型，所以可能是number类型，但是number类型是没有length属性的

// 当我们尝试操作T类型的数组而不是T，可以创建一个数组
// function lengthIdentity<T>(arg: T[]):
// T[] {
//     console.log(arg.length)
//     return arg
// }

// function lengthIdentity<T>(arg: Array<T>):
// Array<T> {
//     console.log(arg.length)
//     return arg
// }

// 泛型类型
// 了解一下函数本身的类型，以及如何创建泛型接口

// function indetity<T>(arg: T):
// T {
//     return arg
// }
// let myindetity: <T>(arg: T) => T = indetity

// let myindetity: {<T>(arg: T): T} = indetity

// 写一个接口

// interface myIdentityFn {
//     <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }

// let myIdentity: myIdentityFn = identity;


// interface myIdentityFn<T> {
//     (arg: T): T;
// }

// function identity<T>(arg: T): T {
//     return arg;
// }
// let myIdentity: myIdentityFn<number> = identity;

