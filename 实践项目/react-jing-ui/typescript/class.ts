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



class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}

const wang = new Dog('zhihao');
console.log(wang.name, wang.bark)

class Cat extends Animal {
    // 子类调用父类 要使用super
    constructor(name: string) {
        super(name)
        console.log(name)
    }
    // 子类重写父类的run方法
    run() {
        return 'ming' + super.run()
    }
}

const zhi = new Cat('jj')
console.log(zhi.run())


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


