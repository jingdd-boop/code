export class Observer{
    constructor(value) {
        value = this.value
        def(value,'__ob__',this)
        if (Array.isArray(value)) {

        } else {
            this.walk(value)
        }
    }
    walk(obj: Object) {
        const keys = Object.keys(obj)
        for (let i = 0;i < keys.length;i++) {
            defineReactive(obj, keys[i])
        }
    }
}