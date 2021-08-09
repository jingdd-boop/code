## useState

- 申明 
```js
const [count, setCount] = useState(0); // es6数组解构

//相当于
let _useState = userState(0)
let count = _useState[0]
let setState = _useState[1]
```
- 读取
```js
 <p>click {count} time</p>
```

count 如何记录： 通过useState的声明顺序



- 修改
```js
<button onClick={() => { setCount(count + 1) }}>click</button>
```

不允许使用循环 多状态
```js
import React, { useState } from 'react';
const Example2 = () => {
    const [age, setAge] = useState(18);
    
    const [sex, setSex] = useState('nan');
    
    const [work, setWork] = useState('net');
    return(
        <div>
            <p>{age}</p>
            <p>{sex} </p>
            <p>{work}</p>
        </div>
    )
}
export default Example2
```

## useEffect 是异步的，里面的函数不影响视图更新

实时计算页面的大小，（会延迟）

```js
useEffect(() => {
        console.log('useEffect',count)
})
```
相当于：
```js
componentDidMount() {
        console.log('componentDidMount',this.state.count)
    }
componentDidUpdate() {
        console.log('componentDidUpdate',this.state.count)
    }
```

useEffect第二个参数为空的话就是，`当这个组件被销毁的时候才会进行一个操作`（比如页面跳转路由改变）
```js
const Index = () => {
    useEffect(() => {
        console.log('useEffect index 我来了')
        return () => {
            console.log('useEffect index 我走了')
        }
    }, [])
    return <h2>jing</h2>
}
```

## useContext
```js
import React, { useState, createContext,useContext } from 'react';//  createContext,useContext 

const CountContext = createContext()  // 通过createContext()定义一个父组件的值

const Counter = () => {
    let count = useContext(CountContext)  // 子组件接收
    return (
        <h1>{ count }</h1>
    )
}

const ContextHooks = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>click {count} time</p>
            <button onClick={() => { setCount(count + 1) }}>click</button>
            <CountContext.Provider value={count}> //  CountContext.Provider   value
                <Counter></Counter> // 将父组件count的值传给子组件
            </CountContext.Provider>
        </div>
    )
}
export default ContextHooks
```

## useRducer
实现一个reducer
```js
import { useReducer } from "react"

function countReducer(state, action) {
    switch (action.type) {
        case "add":
            return state + 1
        case "add":
            return state - 1
        case "add":
        default:
            return state
    }
}
```

