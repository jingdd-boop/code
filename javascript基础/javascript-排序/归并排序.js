function mergeSort(arr){
  const length = arr.length;
  if(length === 1){
    //递归算法的停止条件，即为判断数组长度是否为1
    return arr;
  }
  const mid = Math.floor(length /2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid,length);

  return merge(mergeSort(left),mergeSort(right));
  //将原始数组分割直至只有一个元素
}

function merge(left,right){
  const result = [];
  let il = 0;
  let ir = 0;
  //left,right本身肯定都是从小到大排好序的
  while(il < left.length && ir < right.length){
    if(left[il] < right[ir]){
      result.push(left[il]);
      il++;
    }else{
      result.push(right[ir]);
      ir++;
    }
  }
  //要么left有剩余项要么right有剩余项，把剩余项加进来
  while(il < left.length){
    result.push(left[il]);
    il++;
  }
  while(ir < right.length){
    result.push(right[ir]);
    ir++;
  }
  return result;
}

arr = [1,4,3,2,6,86,12,2,59,10]
console.log(mergeSort(arr))