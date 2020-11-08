/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  //定义一个数组，用来存放相同的字符
  let ans = [],word = A[0]
  for(let s of word) {
    //如果遍历每个A[]的字符串，发现s都存在
    if(A.every(m => m.includes(s))) {
      ans.push(s)//将相同的字符push到ans数组中去
      A = A.map(m => m.replace(s,''))
      //使用‘’代替s
    }
  }
  return ans
}