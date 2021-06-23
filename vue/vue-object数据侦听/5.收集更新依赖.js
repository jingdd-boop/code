// 有了依赖管理器后，可以在getter中该手机依赖，在setter中通知依赖更新

function defineReactive (obj, key, val) {
    if (arguments.length === 2) {
        val = obj[key]
    }
    if (typeof val === 'object') {
        new ResizeObserver(val)
    }
    const dep = new Dep()
    objevt.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get () {
            dep.depend()//收集
            return val;
        },
        set (newVal) {
            if (val === newVal) {
                return
            }
            val = newVal;
            dep.notify() //在setter中该通知依赖更新
        }
    })
}