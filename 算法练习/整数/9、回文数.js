// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return x.toString() == x.toString().split("").reverse().join("");

};
//将该字符串用split("")函数先把字符串拆分
//反转
//组合
//和原来转成的字符串比较
//是否相等
var isPalindrome = function(x){
  return x.toString() == x.toString().split("").reverse().join("")
};