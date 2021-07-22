function proxyData(vm, target, key) {
    Object.defineProperty(vm, target, {
        get() {
            return vm[target][key]
        },
        set(newValue) {
            vm[target][key] = newValue
        }
    })
}

export default proxyData