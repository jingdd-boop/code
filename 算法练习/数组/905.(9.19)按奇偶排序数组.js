/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  len = A.length-1;
  let one = [];
  let two = [];
  for(let i = 0;i < len+1;i++){
      if(A[i]%2 == 0){
          one.push(A[i]);
      }else{
          two.push(A[i]);
      }
  }
  let B = [];
  B = B.concat(one,two);
  return B;
};