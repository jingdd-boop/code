const isHappy = n => {
  let set = new Set(), sum
  // Set()
  // 创建一个新的Set对象。
  n += ''
  while (sum !==1) {
    sum = 0;
    for (let i = 0;i<n.length;i++) {
      sum += n[i]*n[i+1]
    }
    n = sum + ''



    if(set.has(sum)) return false;
    //Set.prototype.has(value)
    //返回一个布尔值，表示该值在Set中存在与否
    set.add(sum)
    //Set.prototype.add(value)
    //在Set对象尾部添加一个元素。返回该Set对象。
  }
  return true;
}