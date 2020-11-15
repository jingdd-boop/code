// function quickSort(arr,low,high){
//   var key = arr[low];
//   var start = low;
//   var end = high;
//   while(end > start){
//     while(end>start && arr[end] >= key) end--;
//     //从右边元素开始，和key值笔记，如果大于key值，则将arr[end值往左移
//     //如果小于key值，将key值和arr[end]交换位置
//     if(arr[end] <= key){
//       var t = arr[end];
//       arr[end] = key;
//       key = t;
//     }
//     //接着从左边元素，可key值相比，如果小于key值，那么将arr[start]往右移
//     //如果大于key值，将key值和arr[start]交换位置
//     while(end>start && arr[end] <= key) start++;
//     if(arr[start] > key){
//       var t = arr[start];
//       arr[start] = key;
//       key = t
//     }
//   }
//   //以上
//   if(start > low) quickSort(arr,low,start-1);
//   if(end < high) quickSort(arr,end+1,high)
// }

function quickSort(arr,low,high){
  var key = arr[low];
  var start = low;
  var end = high;
  while(end > start){
    while(end > start && arr[end] >= key) end--;
    if(arr[end] <= key){
      var t = arr[end];
      arr[end] = key;
      key = t;
    }

    while(end>start && arr[start] <= key) start++;
    if(arr[start] > key){
      var t = arr[start];
      arr[start] = key;
      key = t;
    }
  }
  if(start > low) quickSort(arr,low,start-1);
  if(end < high) quickSort(arr,end+1,high)
}



var arr=[12,20,5,16,15,1,30,45,23,9];
var start = 0;
var end = arr.length-1;

quickSort(arr,start,end); 
console.log('After arr:' +arr); //[1,5,9,12,,15,16,20,23,30,45]