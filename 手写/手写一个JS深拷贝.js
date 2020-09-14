function deepCopy(obj){
  //判断是否是简单数据类型，
  if(typeof obj == "object"){
      //复杂数据类型
      var result = obj.constructor == Array ? [] : {};
      for(let i in obj){
          result[i] = typeof obj[i] == "object" ? deepCopy(obj[i]) : obj[i];
      }
  }else {
      //简单数据类型 直接 == 赋值
      var result = obj;
  }
  return result;
}



//第一种简单模式：
function clone(source) {
    var target = {};
    for(var i in source) {
        if (source.hasOwnProperty(i)) {
            if (typeof source[i] === 'object') {
                target[i] = clone(source[i]); // 注意这里
            } else {
                target[i] = source[i];
            }
        }
    }

    return target;
}


//一行代码的深拷贝
function cloneJSON(source) { return JSON.parse(JSON.stringify(source)); }