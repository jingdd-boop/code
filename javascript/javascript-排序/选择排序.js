var arr = [1,4,6,23,8,10];
var temp
for(var i=0;i<arr.length-1;i++){
  for(var j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
      temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
    }
    
}
console.log(arr)