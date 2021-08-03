npx create-react-app my-app --template typescript

## useState
合并state 对象写法：
```js
import React, { useState } from "react";
const LikeButton: React.FC = () => {
    const [obj, setObj] = useState({like: 0, on: true})
    return (
     <>
        <button onClick={() => { setObj({like: obj.like + 1,on:obj.on}) }}>
            {obj.like} 👍
        </button>
        <button onClick={() => { setObj({like: obj.like, on: !obj.on}) }}>
        {obj.on ? 'ON' : 'OFF'}
        </button>
     </>
    )
}
export default LikeButton
```

state拆分写法：
```js
import React, { useState } from "react";

const LikeButton: React.FC = () => {
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    return (
     <>
        <button onClick={() => { setLike(like + 1) }}>
            {like} 👍
        </button>
        <button onClick={() => { setOn(!on) }}>
        {on ? 'ON' : 'OFF'}
        </button>
     </>
    )
}
export default LikeButton
```

## useEffect
无需清除的Effect

副作用：请求，操作dom，订阅

使用useEffect 去操作DOM完成标题更新

如果是使用class，那么在componentDidMount和componentDidUpdate中都要进行操作，加载和更新需要执行