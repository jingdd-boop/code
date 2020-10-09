function unique(array){
  for(let i = 0;i<array.length;i++){
    for(let j =i+1;j<array.length;j++){
      if(array[i] === array[j]){
      array.splice(j,1);
      }
    }
  }
  return array;
}
var array = [1,2,3,4,3,5]
console.log(unique(array));
//遍历数组，当数组的哪一项相等了，使用splice方法，把它清除掉