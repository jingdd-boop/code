/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res = dfs(root,k);
  return res.reverse()[k-1];
};


let res = [];
const dfs = (root) => {
  if(!root) return;
  dfs(root.left);
  res.push(root.val);
  dfs(root.right);
  return res;
}