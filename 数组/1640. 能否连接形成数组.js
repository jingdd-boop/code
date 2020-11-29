var canFormArray = function(arr, pieces) {
  //arr是源数组
  //pieces是未扁平化的二维数组
  //首先将arr数组转成字符串，
  //遍历二维数组pieces，把里面的数组转成字符串

  // let arr2 = arr.toString()+',';
  // for (let it of pieces) {
  //   if(!arr2.includes(it.toString()+',')) {
  //     return false;
  //   }
  // }
  // return true;

  let res = false;
  for(let i = 0;i<pieces.length;i++) {
    for(var j = 0,k = arr.indexOf(pieces[i][j]);j<pieces[i].length;j++,k++) {
      if(pieces[i][j] === arr[k]) {
        continue;
      } else {
        return false;
      }
    }
    if(j === k) {
      res = true;
    }
  }
  return res;
};