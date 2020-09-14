
//防抖（debounce）
//所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
//在事件被触发n秒后再执行回调，如果在这n秒内又被触发，
//则重新计算

function debounce(func,wait,immediate){
  //传递三个参数
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    //非立即执行版
    if(timeout) clearTimeout(timeout);
    //立即执行版
    if(immediate){
      var callNow = !timeout;
      timeout = setTimeout(()=>{
        timeout = null;
      },wait)
      if(callNow) func.apply(context,args)
    }
    else{
      timeout = setTimeout(function () {
        func.apply(context,args)
      },wait);
    }
  }
}