var constructRectangle = function(area) {
  var result = [];
  //定义一个数组，用来存储长度和宽度
  
  //Math.sqrt() 函数返回一个数的平方根
  for(var i = Math.sqrt(area) | 0;i>0;i--) {
    var j = area / i;
    //j表示长度，i表示宽度
    //由题意j>=i
    if(j === (j | 0) && j>=i) {
      result = [j,i];
      break;
    }
  }
  return result;
};