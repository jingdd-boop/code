/**
 * 
 * @param {TreeNode} root 
 * @param {number} x 
 * @param {number} y 
 * @return {bolean}
 */
var isCousins = function(root, x, y) {
    if(root === null) {
      return false;
    }
    let queue = [root] //把root节点入队
    while (queue.length) {
      let len = queue.length  //len表示当前节点的个数
      let array = [];//arr用来存放该层的节点；
      while (len) {
        // 从队列里一个一个出队当前层的节点，直到推出 len 个
        let node = queue.shift();
        if(node.var === x || node.val === y) {
          array.push(node)
        }
        if(node.left !== null) {
          node.left.parent = node.val;
          queue.push(node.left);
        }
        if(node.right !== null) {
          node.right.parent = node.val;
          queue.push(node.right);
        }
        len--;
      }
      //判断，如果该层节点为一个，那么返回错误，如果是两个，还有确定他们的父节点不同；
      if(array.length === 1) {
        return false;
      } else if(array.length === 2) {
        return array[0].parent !== array[1].parent ? true : false;
      }
    }
    return false;
};