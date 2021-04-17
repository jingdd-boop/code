[TOC]
# 1.react-demo  实现评分组件 （hooks）
> 要求是实现一个评分组件，比如鼠标滑到第三个星星，你的前面的星星都要亮

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210417093636689.png)
## 思路
- 创建两个组件 Star1 StarRating

star1:根据父组件的状态为每个星星显示不同的样式
```js
function Star1({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: "#ff9933" }} role="button">
      {/* 空星，实星 */}
      {marked ? "\u2605" : "\u2606"}
      {/* {marked ? "*" : "#"} */}
    </span>
  );
}

```

StarRating：主要负责控制星星的状态,有两个初始值,rating,selection

```js
const [rating, setRating] = React.useState(
    typeof props.rating == "number" ? props.rating : 0
  );
  // 鼠标移入效果
const [selection, setSelection] = React.useState(0);

```


- 在StarRating创建一个方法hoverOver
```js
const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id"))
      val = event.target.getAttribute("star-id");
      setSelection(val);
  };
```


- 在页面上创建星星,并且传值给<Star1>组件，注意这里的鼠标滑进，滑出和点击事件
```js
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

```