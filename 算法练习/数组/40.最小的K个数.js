/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  // sort = arr.sort((a,b) => a-b);
  // newarr = sort.slice(0,k);
  // return newarr

 return arr.sort((a,b) => a-b).slice(0,k);

};