var findDisappearedNumbers = function(nums) {
  const length = nums.length;
  if(!length){
    return [];
  }
//准备一个哈希表map，结构为数字number-boolean
  const map = {};
//遍历原数组，将每个元素在map中的值设为true
  nums.forEach(num =>  (map[num] = true));
//从一到n，检查map[i]是否为true
//若为true，说明出现在原数组中，否则没出现过
  const res = [];
  for(let i = 1;i<=length;++i){
    if(!map[i]) res.push(i);
    //如果没出现就把map[i]push到res中
  }
  return res;
}