/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];


};


//10/9
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  //跳1节台阶 1
  //跳2节台阶 2 
  //跳0节台阶 1
  //d[2] = d[1]+d[0]
  const arr = new Array(n+1).fill(0);
  arr[0] = 1;
  arr[2] = 2;
  arr[1] = 1;
  for(let i = 3;i<=n;i++){
      arr[i] = (arr[i-1] + arr[i-2])%1000000007
  }
  return arr[n];

};


