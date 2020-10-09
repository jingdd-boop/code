function sort(array){
  let sortNum = array.sort(function(a,b){
    return a-b
  });
  for(let i = 0;i < sortNum.length;i++){
    if(sortNum[i] == sortNum[i+1]){
      sortNum.splice(i,1);
    }
  }
  return sortNum;
}

var arr = [1,2,3,2,5,3,4];
console.log(sort(arr))