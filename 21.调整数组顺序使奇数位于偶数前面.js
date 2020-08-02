/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  var header = [];
  var back = []
  for(let i = 0;i< nums.length;i++){
      if((nums[i]%2) != 0){
          header.push(nums[i]);
      }else{
          back.push(nums[i]);
      }
  }
  return nums = header.concat(back);
};