import { initState } from './init'
function Vue(options) {
    this._init(options) // 初始化数据
}

Vue.prototype._init = function (options) {
    var vm = this;
    vm.$options = options;

    // $为vue上的实例方法

    initState(vm)
}

export default Vue