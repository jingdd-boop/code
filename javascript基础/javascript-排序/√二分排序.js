function sort(arr,start,end){
  if(start > end){
    return [];
  }else if(start == end){
    return [arr[start]];
  };
  //①边界条件：当start>end，或者start=end时

  //②将一个数组一分为二，分成两个数组（left,right)
  var center = Math.floor((start + end)/2);


  var left = sort(arr,start,center);
  var right = sort(arr,center+1,end);
  var result = [];
  //③将两个数组利用递归再次拆分

  //④最后将左右两个数组进行排序
  while(left.length > 0 || right.length > 0){
    if(left[0] < right[0]){
      result.push(left.shift());
      //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
      //如果左边的数小于右边的数，那么将左数组的第一个元素取出来，放到result里面
     
    }
    else{
       //如果左边的数大于右边的数，那么将右数组的第一个元素取出来，放到result里面
      result.push(right.shift());
    }
    //当左边的数组数字全取完了，那么result就是right数组中的值
    if(left.length == 0){
      result = result.concat(right);
      break;
    }
    ////当右边的数组数字全取完了，那么result就是left数组中的值
    else if(right.length == 0){
      result = result.concat(left);
      break;
    } 
  }
  return result;
};

var arr = [12,34,23,3,7,49,45];
console.log(sort(arr,0,arr.length-1));