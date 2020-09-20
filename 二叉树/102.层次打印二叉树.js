var levelOrder = function(root) {
  if(!root) return  [];//节点为空，直接返回空
  const queue = [root];//queue存储当前层次的节点
  const res = [];//res存储最终要输出的结果
  let level = 0;//当前层数先初始化为0
  //遍历当前层数节点（知道当层节点数为0）
  while(queue.length){
    res[level] = [];//res[level]用来保存打印当前层数节点的值
    let levelNum = queue.length;
    while(levelNum--){
      //队首元素出列
      const front = queue.shift();
      //将取出的这个节点push到当前层数的节点res[level]中
      res[level].push(front.val);
      //再看看它是否有左右节点，如果有，也一起push到队列中
      if(front.left) queue.push(front.left);
      if(front.right) queue.push(front.right);
    }
    level++
  }
  return res;

}







var levelOrder = function(root) {
  if(!root) return [];
  const queue = [root];
  const res = [];
  let level = 0;
  while(queue.length){
   res[level] = [];
   let levelNum = queue.length;
   while(levelNum--){
     const front = queue.shift;
     res[level].push(front.val);
     if(front.left) queue.push(front.left);
     if(front.right) queue.push(front.right);
   }
   level++
  }
  return res;

}