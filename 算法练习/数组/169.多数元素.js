//方法一：因为大于一般，所以排序后的，中间那个数就是多数元素
var majorityElement = function(nums) {
  nums.sort((a,b)=>a-b)
  return nums[Math.floor(nums.length/2)]
}
//方法三，当元素和栈顶元素相等或者空栈是入栈
//否则出栈
//最后栈中剩下的必然都是大于一半的那个元素


var majorityElement = function(nums) {
  let stack = []
  for(let n of nums){
    let m = stack.length
    if(stack[m-1] === n || !m){
      stack.push(n)
    }else{
      stack.pop()
    }
  }
  return stack[0]
};