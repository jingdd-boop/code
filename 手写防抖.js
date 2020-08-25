//在事件被触发n秒后再执行回调，如果在这n秒内又被触发，
//则重新计时
function debounce(fn,delay) {
  let timer = null
  return function(...args){
    let context = this
    if(timer) clearTimeout(timer)
    timer = setTimeout(function(){
      fn.apply(context.args)
    },delay)
  }
}