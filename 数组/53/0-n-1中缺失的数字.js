var missingNumber = function(nums) {
  let left = 0;
  let right = nums.length-1;
  while(left <=right) {
   let mid = Math.floor((left+right) / 2);
   if(mid === nums[mid] ){
     left = mid+1;
   } else if(mid < nums[mid]){
   right = mid-1;
  }
}
return left;
};