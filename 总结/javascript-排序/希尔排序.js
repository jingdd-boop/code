function xier(arr){
  var interval = parseInt(arr.length / 2);
  while(interval > 0){
    for(var i=0;i<arr.length;i++){
      var n=i;
      while(arr[n] < arr[n-interval] && n>0){
        var temp = arr[n];
        arr[n] = arr[n-interval];
        arr[n-interval] = temp;
        n = n-interval 
      }
    }
    interval = parseInt(interval / 2);
  }
  return arr;
}


arr = [56,78,34,24,12,32,90]
console.log(xier(arr));