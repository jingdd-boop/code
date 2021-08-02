type PlusType = (x: number,y: number) => number
function sum(x: number, y: number): number {
    return x + y
}

const sum2: PlusType = sum

type NameResolver = () => string
type NameOrResolve = string | NameResolver
function getName(n: NameOrResolve): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

// as关键字
function getLength(input: string | number): number {
    if (<string>input.length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
    // const str = input as String
    // if (str.length) {
    //     return str.length;
    // } else {
    //     const number = input as Number
    //     return number.toString().length
    // }
}