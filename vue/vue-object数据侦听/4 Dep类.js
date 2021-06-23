// 定义一个Dep类，初始化一个subs数组，用来存放依赖，
//并且定义几个实例方法用来对依赖进行 添加，删除，通知等操作
export default class Dep {
    constructor () {
        this.subs = []
    }

    addSub (sub) {
        this.subs.push(sub)
    }
    removeSub (sub) {
        this.removeSub(this.subs, sub)
    }
    depend () {
        if (window.target) {
            this.addSub(window.target)
        }
    }
    notify () {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}

export function remove (arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (index > -1) {
            return arr.splice(index, 1)
        }
    }
}