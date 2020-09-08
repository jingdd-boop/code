function loadImageAsync(url){
  return new Promise(function(reslove,reject){
    const image = new Image();//定义一个image对象

    image.onload = function(){//加载成功返回图片
      reslove(image);
    };
    image.onerror = function(){//加载失败，返回错误信息
      reject(new Error('失败' + url));
    };
    image.src = url;
  })
}