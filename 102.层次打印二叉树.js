var levelOrder = function(root) {
  if(!root) return  [];
  const queue = [root];
  const res = [];
  let level = 0;
  while(queue.length){
    res[level] = [];
    let levelNum = queue.length;
    while(levelNum--){
      const front = queue.shift();
      res[level].push(front.val);
      if(front.left) queue.push(front.left);
      if(front.right) queue.push(front.right);
    }
    level++
  }
  return res;

}