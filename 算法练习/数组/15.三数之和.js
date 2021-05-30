var threeSum = function(nums) {
  let res = []
  for (let i = 0; i < nums.length - 2; i++) { // 每个人
    for (let j = i + 1; j < nums.length - 1; j++) { // 依次拉上其他每个人
      for (let k = j + 1; k < nums.length; k++) { // 去问剩下的每个人
        if (nums[i] + nums[j] + nums[k] === 0) { // 我们是不是可以一起组队
          res.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  return res
}


var threeSum = function(nums) {
  let res = []
  let hash = {}
  for (let i = 0; i < nums.length - 2; i++) { // 每个人
    for (let j = i + 1; j < nums.length - 1; j++) { // 依次拉上其他每个人
      if (hash[nums[j]] !== undefined) { // 已经有合适自己的两人组
        res.push([nums[j]].concat(hash[nums[j]]))
        hash[nums[j]] = undefined
      } else { // 没有合适自己的两人组
        let mark = 0 - nums[i] - nums[j]
        hash[mark] = [nums[i], nums[j]]
      }
    }
  }
  return res
} // 示意代码 未AC

