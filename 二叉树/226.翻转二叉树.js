/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null) return null
  let right = invertTree(root.right)
  let left = invertTree(root.left)
  root.right = left
  root.left = right
  return root
}

var invertTree = function(root){
  if(root === null) return null
  let right = invertTree(root.right)
  let left = invertTree(root.left)
  root.right = left
  root.left = right
  return root
}