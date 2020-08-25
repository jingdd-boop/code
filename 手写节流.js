//规定在单位时间内，只能触发一次函数。如果这个单位时间内
//触发多次函数，只有一次生效
function throttle(fn,delay){
  let flag = true,
  timer = null
  return function(...args) {
    let context = this
    if(!flag) return

    flag = false
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context.args)
      flag = true
    },delay)
  }
}
//传入两个参数，函数和单位时间
//定于一个标识。flag = true
//定义一个timer 对象
//定义context = 内部函数的上下文
//clearTimeout()