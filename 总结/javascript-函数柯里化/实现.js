//第一版
// var curry = function(fn) {
//   var args = [].slice.call(arguments,1);
//   //截取完除第一个元素的其他所有元素
//   //[1,2]
//   return function() {
//     var newArgs = args.concat([].slice.call(arguments));
//     return fn.apply(this,newArgs);
//   };
// };

// function add(a, b) {
//   return a + b;
// }

// var addCurry = curry(add, 1, 2);
// console.log(addCurry())  // 3
// //或者
// var addCurry = curry(add, 1);
// console.log(addCurry(2))
// //addCurry(2) // 3
// //或者
// var addCurry = curry(add);
// console.log(addCurry(1,2))
// //addCurry(1, 2) // 3

//第二版
function sub_curry(fn){
  var args = [].slice.call(arguments,1);
  return function(){
    return fn.apply(this,args.concat([].slice.call(arguments)));
  }
}

function curry(fn,length){
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function(){
    if(arguments.length < length){
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this,combined),length - arguments.length);  
    }
    else{
      return fn.apply(this,arguments);
    }
  };
}

var fn = curry(function(a, b, c) {
  return [a, b, c];
});

console.log(fn("a", "b", "c"))  // ["a", "b", "c"]
console.log(fn("a", "b")("c"))  // ["a", "b", "c"]
console.log(fn("a")("b")("c"))  // ["a", "b", "c"]
console.log(fn("a")("b", "c"))  // ["a", "b", "c"]