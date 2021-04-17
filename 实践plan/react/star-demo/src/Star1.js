import React from "react";


// 星星组件
// 定义一个星星组件，里面有两个值可以带到外部去
// marked:标识这个星星要不要亮，也就是说转换星星的形状
// starId：标识这个星星，好确定是哪个星星需要改变

function Star1({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: "#ff9933" }} role="button">
      {/* 空星，实星 */}
      {marked ? "\u2605" : "\u2606"}
      {/* {marked ? "*" : "#"} */}
    </span>
  );
}


// 星级评分
// 定义两个初始化的变量
// rating:是否初始化了评分等级
// selection： 被选中了评分
function StarRating(props) {
  // 分数显示
  const [rating, setRating] = React.useState(
    typeof props.rating == "number" ? props.rating : 0
  );
  // 鼠标移入效果
  const [selection, setSelection] = React.useState(0);

  //根据传入的参数event更新selection，rating
  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id"))
      val = event.target.getAttribute("star-id");
      setSelection(val);
  };


  return (
    <div
      // 鼠标移入效果
      onMouseOut={() => hoverOver(null)}
      // 点击选中分数
      onClick={event =>
        setRating(event.target.getAttribute("star-id") || rating)
      }
      onMouseOver={hoverOver}
    >

      {/* 创建5个组件 */}
      {Array.from({ length: 10 }, (v, i) => (
        <Star1
          starId={i + 1}
          key={`star_${i + 1} `}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}


    </div>
  );
}


export default function() {
  return (
    <div>
      <StarRating />
      <StarRating rating={2} />
    </div>
  );
}