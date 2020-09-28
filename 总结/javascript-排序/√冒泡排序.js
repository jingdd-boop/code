// //性能一般
// var arr=[1,5,7,9,16,2,4];
// //冒泡排序,每一趟找出最大的,总共比较次数为arr.length-1次,每次的比较次数为arr.length-1次，依次递减
// var temp;
// for(var i=0;i<arr.length-1;i++){
//     for(var j=0;j<arr.length-1;j++){
//         if(arr[j]>arr[j+1]){
//             temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr)

function sort(arr){
    var t;
    for(var i = 0;i<arr.length-1;i++){
        for(var j = 0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
               t = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = t; 
            }
        }
    }
    return arr;
}

function sort(arr){
    var t;
    for(var i = 0;i<arr.length-1;i++){
        for(var j = 0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
}
var arr = [1,4,3,2,6]
console.log(sort(arr));

//插入排序
//时间复杂度：O(n*n)
//空间复杂度:O(1)