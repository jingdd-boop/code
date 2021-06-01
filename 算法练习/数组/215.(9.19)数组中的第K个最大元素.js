/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  function compare(a,b){
      return b-a;
  }  
  nums = nums.sort(compare);
  for(let i = 0;i<nums.length;i++){
      if(nums[k-1] == nums[i]){
          return nums[k-1];
      }
  }
 
};