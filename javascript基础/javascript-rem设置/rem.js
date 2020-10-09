//提前执行，初始化resize事件不会执行
setRem()

function setRem(){
  let doc = document.documentElement
  let width = doc.getBoundingClientRect().width
  //Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。

//如果是标准盒子模型，content-box,元素的尺寸等于width/height + padding + border-width的总和。
//如果box-sizing: border-box，元素的的尺寸等于 width/height。


//box-sizing: content-box 是W3C盒子模型
//在标准的盒子模型中，width指content部分的宽度
//box-sizing: border-box 是IE盒子模型
//在IE盒子模型中，width表示content+padding+border这三个部分的宽度

  let rem = width / 75
  doc.style.fontSize = rem + 'px'
}
//监听窗口变化
addEventListener("resize",setRem)
