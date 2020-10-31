var lastRemaining = function (n, m) {
  let ans = 0;
  //当序列长度为 1 时，一定会留下唯一的那个元素，它的编号为 0，因此lastRemaining(1, m)=0。
  //lastRemaining(n, m) = (m + lastRemaining(n-1, m)) % n 可用迭代解法。
  for (let i = 2; i<=n;i++) {
    ans = (ans + m) % i ;
  }
  return ans;
};