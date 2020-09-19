

// ## 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// ## 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

//  、、、javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(var i = 0; i < nums.length; i++){
//         var dif = target - nums[i];
//         for(var j = i + 1; j < nums.length; j++){
//             if(nums[j] == dif)
//             return [i,j];
//         }
//     }
// };
// 、、、


// var twoSum = function(nums,target){
//     for(var i=0;i<nums.length;i++){
//         var dif = target-nums[i];
//         for(var j=i+1;j<nums.length;j++){
//             if(nums[j] == dif)
//             return [i,j];
//         }
//     }
// }
// ### 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

//两次遍历，第一次遍历全部的元素，比如说，把第一个元素为例子，此时
//设置一个dif值它表示的是，目标值减去nums[0]的值
//那我们只需从索引为1的值开始，遍历整个数组
//当后面的元素有一个值和dif值相同时，则输出[i,j];

var twoSum = function(nums,target){
    for(var i = 0;i<nums.length;i++){
        var dif = target - nums[i];
        for(var j = i+1;j<nums.length;j++){
            if(nums[j] == dif)
                return [i,j];
        }
    }
}


let nums = [2,4,5,6,,9,3];
let target = 10;
console.log(twoSum(nums,target));