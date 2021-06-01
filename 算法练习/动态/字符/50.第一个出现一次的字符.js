// 遍历字符串，将每个字符的值与出现次数记录到 map 中
// 再次遍历 map.keys() ，获取 map 中每个字符出现的次数，判断是否仅仅只有 1 次，返回第一个仅出现一次的字符

//为啥第二步是使用map.keys() ，因为，map结构是（值，和，出现的次数），map结构改变了

var firstUniqChar = function(s) {
  if(!s) return "";
  let map = new Map();
  for(let c of s) {
    if(map.has(c)) {
      map.set(c,map.get(c) + 1);
    } else {
      map.set(c,1);
    }
  }

  for(let c of map.keys()) {
    if(map.get(c) === 1) {
      return c;
    }
  }
  return ""
};

//map.has(c) 判断这个map数据结构里面是否有c
//map.set()将c的值，和出现的次数放到map结构中去
//map.get()获取键值，也就是出现的次数。
//如果没有的话，将次数设为1，否则次数加一
//再使用map.keys()获取键名
