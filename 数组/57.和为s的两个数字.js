var twoSum = function(nums, target) {
  let l = 0;
  let r = nums.length-1;
  let result = []
  while(l<r){
    let sum = nums[l] + nums[r];
    if(target == sum){
      result.push(nums[l]);
      result.push(nums[r]);
      break
    }else if(sum<target){
      l++;
    }else{
      r++;
    }
  }
  return result;

};
nums = [1,2,4,5,6];
target = 5;
console.log(twoSum(nums, target));
