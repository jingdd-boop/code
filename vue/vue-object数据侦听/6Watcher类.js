// 谁用到了这个数据，谁就是依赖，我们九尾它创建一个Watcher实例，
//在之后数据变化时，我们不直接取通知依赖更新，
//而是通知依赖对应的Watch实例，由Watcher实例取通知真正的视图

export default class Watcher {
    constructor (vm, expOrFn, cb) {
        this.vm = vm;
        this.cb = cb;
        this.getter = parsePath(expOrFn)
        this.value = this.get()
    }
    get () {
        window.target = this;
        const vm = this.vm
        let value = this.getter.call(vm, vm)
        window.target = undefined
        return value
    }
    update () {
        const oldValue = this.value
        this.value = this.get()
        this.cb.call(this.vm, this.value, oldValue)
    }
}


const bailRE = /[^\w.$]/
export function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  const segments = path.split('.')
  return function (obj) {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return
      obj = obj[segments[i]]
    }
    return obj
  }
}


// 只能收集到读取和修改，不能添加和删除

// 新增了Vue.set Vue.delete


// 1. data 通过observer转换成getter/setter的形式来追踪变化
// 2. 当外界通过Watcher读取数据时，会触发getter从而将Watcher添加到依赖中。
// 3. 当数据发生了变化时，会触发setter，从而向Dep中的依赖（即Watcher）发送通知。
// 4. Watcher接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新，也有可能触发用户的某个回调函数等。
