//所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。

//对于节流，一般有两种方式可以实现，分别是时间戳版和定时器版。
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait ,type) {
  if(type===1){
      let previous = 0;
  }else if(type===2){
      let timeout;
  }
  return function() {
      let context = this;
      let args = arguments;
      //时间戳版
      if(type===1){
          let now = Date.now();

          if (now - previous > wait) {
              func.apply(context, args);
              previous = now;
          }
      }
      //定时器版
      else if(type===2){
          if (!timeout) {
              timeout = setTimeout(() => {
                  timeout = null;
                  func.apply(context, args)
              }, wait)
          }
      }
  }
}
