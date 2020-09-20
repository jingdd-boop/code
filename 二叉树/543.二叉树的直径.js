var diameterOfBinaryTree = function(root) {
  let ans = 1;

  function depth(rootNode) {
    //如果不存在根节点，则深度为0
    if(!rootNode){
      return 0;
    }
    //递归，获取左，右子树的深度
    let L = depth(rootNode.left);
    let R = depth(rootNode.right);
    //获取该数的最长路径和现有最长路劲中最大的那个
    ans = Math.max(ans,L+R+1);
    //已知根节点的左右子树的深度，则，左右子树深度的最大值+1，便是以根节点为数的最大深度
    return Math.max(L,R)+1;
  }
  depth(root);
  //由于depth函数中已经加上树节点的自身节点，故需要－1
  return ans - 1;
};




var diameterOfBinaryTree = function(root) {
  let ans = 1;
  function depth(rootNode){
    if(!rootNode){
      return 0;
    }
    let L = depth(rootNode.left);
    let R = depth(rootNode.right);
    ans = Math.max(ans,L+R+1);
    return Math.max(L+R+1);
  }
  depth(root);
  return ans - 1;
};