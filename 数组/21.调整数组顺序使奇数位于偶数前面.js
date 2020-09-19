
// var exchange = function(nums) {
//   var header = [];
//   var back = []
//   for(let i = 0;i< nums.length;i++){
//       if((nums[i]%2) != 0){
//           header.push(nums[i]);
//       }else{
//           back.push(nums[i]);
//       }
//   }
//   return nums = header.concat(back);
// };

//定义两个数组
//遍历数组
//奇数push到header数组里面
//偶数push到back数组里面

var exchange = function(nums) {
    let header = [];
    let back = [];
    for(let i = 0;i < nums.length;i++){
        if(nums[i]%2 != 0){
            header.push(nums[i]);
        }
        else{
            back.push(nums[i]);
        }
    }
    return nums =  header.concat(back);
}

let arr = [1,2,3,6,8,3,7,9];
console.log(exchange(arr));