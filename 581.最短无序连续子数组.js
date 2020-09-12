var findUnsortedSubarray = function(nums) {
  const sortNums = [...nums].sort((a, b) => a - b);
    console.log('sortNums', sortNums);
    let left, right, len = nums.length;
    for (let i = 0; i < len; i++) {
        if (sortNums[i] !== nums[i] && isNaN(left)) left = i;
        if (sortNums[len - 1 - i] !== nums[len - 1 - i] && isNaN(right)) right = len - 1 - i;
    }
    return right - left + 1 || 0;
};

//首先排序
//比较排序前的数组和排序后的数组从哪一项开始发生变化
//定义两个标记
//输出right - left + 1

