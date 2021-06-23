// 定义一个对象
let car = {
    name:'jingjing',
    price:300
}

let name1 = car.name;
car.price = 200;

// 当我们读取这个对象的属性或者改变这个对象的属性时，如何通知它

let car = {}
let val = 3000
Object.defineProperty(car, 'price', {
  enumerable: true,
  configurable: true,
  get(){
    console.log('price属性被读取了')
    return val
  },
  set(newVal){
    console.log('price属性被修改了')
    val = newVal
  }
})