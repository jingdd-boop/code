var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
};


//第一版
// function throttle(func,wait) {
//   var timeout;
    //var previous = 0;
  // var context,args;
  // var previous = 0;
//时间戳版,立即执行，在事件停止触发后没有办法在执行事件
  // return function(){
  //   var now = +new Date();
  //   context = this;
  //   args = arguments;
  //   if(now - previous > wait){
  //     func.apply(context,args);
  //     previous = now;
  //   }
  // }

//定时器版，过n秒之后第一次执行，事件停止触发后依然会再执行一次事件
// return function(){
//   context = this;
//   args = arguments;






//   if(!timeout){
//     timeout = setTimeout(function(){
//       time = null;
//       func.apply(context.args)
//     },wait)
//   }
// }
// }

// 时间戳版
// function throttle(func, wait) {
//   var context, args;
//   var previous = 0;

//   return function() {
//       var now = +new Date();
//       context = this;
//       args = arguments;
//       if (now - previous > wait) {
//           func.apply(context, args);
//           previous = now;
//       }
//   }
// }
//时间戳版9/28
function throttle(func,wait){
  var context,args;
  var previous = 0;
  return function(){
    var now = +new Date();
    context = this;
    args = arguments;
    if(now - previous > wait){
      func.apply(context,args);
      previous = now;
    }
  }
}



// 定时器版
// function throttle(func, wait) {
//   var timeout;
//   var previous = 0;

//   return function() {
//       context = this;
//       args = arguments;
//       if (!timeout) {
//           timeout = setTimeout(function(){
//               timeout = null;
//               func.apply(context, args)
//           }, wait)
//       }

//   }
// }
//双剑合璧版
function throttle(func,wait){
  var timeout,context,args,result;
  var previous = 0;

  var later = function(){
    previous = +new Date();
    timeout = null;
    func.apply(context,args)
  };

  var throttled = function(){
    var now = +new Date();
    //下次触发func剩余的时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    //如果没有剩余时间或者你改了系统时间
    if(remaining <= 0 || remaining > wait){
      if(timeout){
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context,args);
    } else if (!timeout){
      timeout = setTimeout(later,remaining);
    }
  };
  return throttled;
}

container.onmousemove =  throttle(getUserAction, 3000);