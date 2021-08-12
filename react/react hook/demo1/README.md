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


## useReducer useContext  实现 Redux state

useContext 避免一层层传递

redux 状态全局化 统一管理

action 更新

reducer 处理复杂的状态

代码小案例：首先一行文字，下面由两个按钮，可以控制它的颜色



- 一个显示文字组件showArea
文字的颜色由color控制
```js
import React, { useContext } from 'react';
import {ColorContext} from './color'

function ShowArea() {
    const {color} = useContext(ColorContext)
    return (
        <div style={{ color: color }}>字体颜色{ color }</div>
    )
}

```

- 一个color组件去管理这些颜色    
使用createContext   
```js
export const UPDATE_COLOR = "UPDATE_COLOR"

const reducer = (state,action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color
        default:
            return state
    }
}

export const Color = props => {
    const [color,dispatch] = useReducer(reducer,'blue')
    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}


```

- 一个父组件 UseRedux  引入button 文字  颜色控制组件
```js
import React from 'react';
import Buttons from './Button';
import ShowArea from './showArea';
import {Color} from './color'

function UseRedux() {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
            
        </div>
    )
}

```

-- 设计一个按钮组件Button
```js
import React, { useContext } from 'react';
import {ColorContext,UPDATE_COLOR} from './color'

function Buttons() {
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => {dispatch({type:UPDATE_COLOR,color:'red'})}}>红色</button>
            <button onClick={() => {dispatch({type:UPDATE_COLOR,color:'yellow'})}}>黄色</button>
        </div>
    )
}

export default Buttons

```


## useMemo

shouldComponentUpdate 组件更新之前需要先对比状态，如果状态发生了改变，再更新

但是在useEffect中 没有这个功能  因此我们需要使用的是useMemo


```js
import React, { useState,useMemo } from 'react'

// 父组件
function useMemoHooks() { 
    const [jing1, setJing1] = useState('婧')
    const [jing2, setJing2] = useState('婧1')
    
    return (
        <>
            <button onClick={() => { setJing1(new Date().getTime()) }}>jing1</button>
            <button onClick={() => { setJing2(new Date().getTime() + 'jing2') }}>jing2</button>
            <Child name={jing1}>{ jing2}</Child> // name children
        </>
    )
}

// 子组件 
function Child({ name, children }) {
    function changejing1() {
        console.log('jing1执行')
        return name+'jing1'
    }

    // 只有name的属性更新才更新
    const actionjing1 = useMemo(() => changejing1(name),[name])  // 使用useMemo 只更新需要更新的部分

    return (
        <>
            <div>{ actionjing1 }</div>
            <div>{ children }</div>
        </>
    )
}

export default useMemoHooks
```




## useRef
- 通过dom，去改变值，而不是状态

- useRef可以保存变量(少用)

```js
import React, { useRef, useState, useEffect } from 'react'

function UseRefHooks() {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.value = "hello"
        console.log(inputEl)
    }

    const [text, setText] = useState('jing')
    const textRef = useRef()
    useEffect(() => {
        textRef.current = text
        console.log('textRef.current',textRef.current)
    })
    return (
        <>
            <input ref={inputEl} text="text"></input>
            <button onClick={onButtonClick}>文字</button>

            <input value={text} onChange={(e) => {setText(e.target.value)}}></input>
        </>
    )
}

export default UseRefHooks
```


## 自定义hooks
监听窗口的宽高
```js
import React, { useState, useEffect, useCallback } from 'react';

function useWinSize() {
    const [size, setSize] = useState({
        with: document.documentElement.clientWidth,
        higth: document.documentElement.clientHeight,
    })

    // useCallback 缓存方法  useMemo缓存属性变量
    const onRest = useCallback(() => {
        setSize({
            with: document.documentElement.clientWidth,
            higth: document.documentElement.clientHeight,
        })
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', onRest, false)
        return () => {
            window.removeEventListener('resize',onRest)
        }
    }, [])
    
    return size
}



function Examplejing() {
    const size = useWinSize();
    return (
        <>
            页面的size{size.with},{size.higth}
        </>
    )
}

export default Examplejing
```

