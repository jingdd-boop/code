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

// 类型推论

// let str = 'str'
// str = 123