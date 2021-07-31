let isDone: boolean = false

let age: number = 3

let binaryNumber: number = 0b111

let first: string = 'vin'
// first. 可以自动补全

let message: string = `h${first}`

let u: undefined = undefined

let n: null = null

let num: number = undefined


let notSure: any = 4
notSure = 'jing'
notSure = false
notSure = 6
notSure.myname
notSure.myFn()
// notSure. 没有任何提示

let numberOrString: number | string
numberOrString = 'aaa'
numberOrString = 3
// numberOrString = false 报错



let arrOgNumber: number[] = [1, 2, 3]
// arrOgNumber.push('5') 报错
arrOgNumber.push(5)

// function test() {
//     console.log(arguments)
//     arguments.length
//     arguments[0]
//     arguments.forEach(element => {
        
//     });
//     let arr: any[] = arguments
// }


let user: [string, number] = ['jing', 30]
// user = ['jing'] 
// user = ['jing', 2, 3]
// 多了少了都会报错

