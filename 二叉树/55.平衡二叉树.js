/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if(!root) return true;
  let left = dfs(root.left);
  let right = dfs(root.right);
  //递归找到左右节点数

  if(Math.abs(right-left) > 1) return false;

  //
  return isBalanced(root.left) && isBalanced(root.right);
};

//获取深度
//如果节点为空，则返回0，否则，使用递归，找到左右节点的最大节点数；
function dfs(root) {
  if(!root) return 0;
  return Math.max(dfs(root.left),dfs(root.right)) + 1;
};

//如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。

 