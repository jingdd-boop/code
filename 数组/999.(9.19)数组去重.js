//1/es6 Set去重

// function unique(arr){
//   return Array.from(new Set(arr))
// }
// var arr = [1,2,'4','4',5,7]
// console.log(unique(arr))

function unique(arr) {
  return Array.from(new Set(arr))
}

//2、利用for嵌套for，然后splice去重

function unique(arr){
  for(var i = 0;i<arr.length;i++){
    for(var j = i+1;j<arr.length;j++){
      if(arr[i] == arr[j]){
        arr.splice(j,1)
        j--;
      }
    }
  }
  return arr;
}

var a = [1,2,'4','4',5,7]
console.log(unique(a))

function unique(arr) {
  for(var i = 0;i<arr.length;i++){
    for(var j = i+1;j<arr.length;j++){
      if(arr[i] == arr[j]){
        arr.splice(j,1)
        j--
      }
    }
  }
  return arr
}