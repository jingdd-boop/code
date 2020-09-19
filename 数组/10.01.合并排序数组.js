/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
// var merge = function(A, m, B, n) {
//   let len1 = m-1;
//   let len2 = n-1;
//   let len =m + n - 1;
//   while(len2>=0){
//       if(len1<0){
//           A[len--] = B[len2--];
//           continue;
//       }
//       A[len--] = A[len1]>=B[len2] ? A[len1--] : B[len2--];

//   }
// };




var merge = function(A, m, B, n) {
  let len1 = m-1;
  let len2 = n-1;
  let len = m + n -1;
  while(len2>=0){
    if(len1<0){
      A[len--] = B[len2--];
      continue; 
    }
    A[len--] = A[len1]>=B[len2] ? A[len1--] : B[len2--];
  }
   return A;
}

let A = [2,3,6,8,0,0,0,0];
let m = 4;
let B = [1,4,5,9];
let n = 4;
console.log(merge(A,m,B,n));