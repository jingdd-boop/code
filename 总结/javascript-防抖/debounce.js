//定义最开始的数字count = 1
//取到id属性值
//写一个方法
//点击执行方法

// var count = 1;
// var container = document.getElementById('container')
//第一版，第二版（解决this）

// function getUserAction() {
//   container.innerHTML = count++;
//   console.log(this);
//   //当不使用debounce时输出：<div id="container"></div>
//   //当使用debounce时输出：window
// };
//第三版
// function getUserAction(e) {
//   console.log(e);
//   container.innerHTML = count++;
  
// };
//第一版
// function  debounce(func,wait) {
//   var timeout;
//   return function () {
//     clearTimeout(timeout)
//     timeout = setTimeout(func,wait);
//   }
// }

//第二版
// function  debounce(func,wait) {
//   var timeout;
//   return function () {
//     var context = this;

//     clearTimeout(timeout)
//     timeout = setTimeout(function () {
//       func.apply(context)
//     },wait);
//   }
// }
//第三版
// function  debounce(func,wait) {
//   var timeout;
//   return function () {
//     var context = this;
//     var args = arguments;

//     clearTimeout(timeout)
//     timeout = setTimeout(function () {
//       func.apply(context,args)
//     },wait);
//   }
// }

var count = 1;
var container = document.getElementById('container');

function getUserAction(e) {
    container.innerHTML = count++;
};

var setUseAction = debounce(getUserAction, 10000, true);

container.onmousemove = setUseAction;

document.getElementById("button").addEventListener('click', function(){
    setUseAction.cancel();
})
//第四版
function  debounce(func,wait,immediate) {
  var timeout,result;
  return function () {
    var context = this;
    var args = arguments;


    if(timeout) clearTimeout(timeout);
    if(immediate) {
      var callNow = !timeout
      timeout = setTimeout(function(){
        timeout = null
      },wait)
      if(callNow) func.apply(context,args)
    }
    else{
      timeout =setTimeout(function(){
        func.apply(context,args)
      },wait)
    }
    return result;
  }
}

//原始版
//container.onmousemove = getUserAction
//第一版
container.onmousemove =  debounce(getUserAction, 1000);