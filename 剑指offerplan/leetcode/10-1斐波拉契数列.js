/**
 *  @param {Number} n
 *  @return {Mumber}
 */

function fib(n) {
  let fibonacci = [0,1];
    for(let i = 2; i <= n; i ++) {
        fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % (1e9 +7);
    }
    return fibonacci[n];
}


function fib(n) {
  let q = 0,p = 1,res;
  for (let i = 0;i < n;i++) {
    res = (q + p) % (1e9 + 7);
    q = p;
    p = res;
  }
  return q;
}



