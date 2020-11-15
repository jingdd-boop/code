const isSubsequence = (subStr, str) => {
  //subStr短子串，str长子串
  if (subStr.length == 0) return true;
  //如果短子串没有元素，则必为子序列
  let index = 0;
  let subIndex = 0;
  //定义两个指针
  //一直到长子串遍历完
  while(index < str.length) {
    if(subStr[subIndex] == str[index]) {
      subIndex++;
      if(subIndex > subStr.length - 1) {
        return true;
      }
    } 
    index++;
  }
  return false;
}