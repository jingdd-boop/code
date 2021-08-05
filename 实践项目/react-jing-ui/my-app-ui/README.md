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
### 无需清除的Effect

副作用：请求，操作dom，订阅

使用useEffect 去操作DOM完成标题更新

如果是使用class，那么在componentDidMount和componentDidUpdate中都要进行操作，加载和更新需要执行

### 需要清除的Effect

使用useEffect完成一个鼠标跟踪器

在class中实现：
```js
componentDidMount() {
    document.addEventListener('click',this.updateMouse)
}
componentDidUpdate() {
    document.removeEventListener('click',this.updateMouse)
}
```

```js
const MouseTracker: React.FC = () => {
    const [postion, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        console.log('add effect',postion.x)
        const updateMouse = (e: MouseEvent) => {
            console.log('inner')
            setPosition({x:e.clientX,y:e.clientY})
        }
        document.addEventListener('click', updateMouse)
        return () => {
            // 用完之后清除
            console.log('remove',postion.x)  // 0
            document.removeEventListener('click',updateMouse)
        }
    })
    console.log('befor render',postion.x)
    return (
        <p>X:{postion.x},Y:{ postion.y }</p>
    )
}

```

### 控制useEffect的执行
修改前面的两个例子

第二个参数为[]  只执行一次effect 不会重复执行


## 自定义hook
将组件逻辑提取到可重用的函数中

使用自定义hook抽象鼠标跟踪器
```js
import React, { useEffect, useState } from "react";

const useMousePosition = () => {
    const [postions, setPositions] = useState({ x: 0, y: 0 })
    useEffect(() => {
        console.log('add effect', postions.x);
        const updateMouse = (e: MouseEvent) => {
            setPositions({x: e.clientX, y: e.clientY})
        }
        document.addEventListener('mousemove', updateMouse)
        return () => {
            console.log('remove effect', postions.x)
            document.removeEventListener('mousemove',updateMouse)
        }
    }, [])
    return postions
}

export default useMousePosition
```

可以很好的复用在其他组件里面

```js
import useMousePosition from './hooks/useMousePosition'
const position = useMousePosition()

<p>X:{position.x},Y:{ position.y }</p>
 ```

## HOC 高阶组件 组件重用的技术
高阶组件就是一个函数，接收一个组件作为参数，返回一个新的组件