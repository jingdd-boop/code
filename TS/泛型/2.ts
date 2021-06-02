泛型类
class JingClass<T> {
    jing1: T;
    jing2: (a: T,b: T) => T;
}

let jing = new JingClass<number>()
jing.jing1 = 3
jing.jing2 = function(x,y) {
    return x + y
}

class JingClass1<T> {
    jing3: T;
    jing4: (a: T,b: T) => T;
}

let jing5 = new JingClass1<string>()
jing5.jing3 = ""
jing5.jing4 = function(x,y) {
    return x + y
}

jing5.jing4(jing5.jing3 , "text")


泛型约束
创建一个包含.length属性的接口，使用这个接口和extends来约束

interface lengthwise {
    length: number;
}

function loggingIdentity<T extends lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity(3) //报错
loggingIdentity({length:3})

子啊泛型约束中使用参数

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

泛型里使用类类型

function create<T>(c: {new(): T;}): T{
    return new c();
}