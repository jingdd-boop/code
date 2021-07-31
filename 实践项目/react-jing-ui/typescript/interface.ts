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

// jing.id = '111'