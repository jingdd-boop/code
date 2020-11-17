// 求出矩阵每个点到 (r0, c0) 的曼哈顿距离。
// 既然要按照距离大小排，那就把相同距离的坐标丢到一个数组里（桶），用一个map管理。
// 然后按距离从小到大遍历这些桶，把桶里的坐标，逐个加入结果数组。


var allCellsDistOrder = (R, C, r0, c0) => {
  const res = [];
  const hash = {};
  for (let i = 0;i<R;i++) {
    for (let j = 0;j<C;j++) {
      const d = getD(i,j,r0,c0);

      //把相同距离的坐标丢到一个数组中去
      if(!hash[d]) {
        hash[d] = [[i,j]]
      } else {
        hash[d].push([i,j])
      }
    }
  }

  //按距离从小到大遍历这些数组，把这些坐标，逐个加入结果数组
  for (let d = 0;d <= R + C - 2;d++) {
    if(!hash[d]) continue;
    for(const pair of hash[d]) {
      res.push(pair);
    }
  }
  return res;
};

//q求出矩阵每个点到（r0，c0）的曼哈顿距离
var getD = (x1,y1,x2,y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}




