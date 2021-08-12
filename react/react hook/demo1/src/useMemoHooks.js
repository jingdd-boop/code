import React, { useState,useMemo } from 'react'

function useMemoHooks() {
    const [jing1, setJing1] = useState('婧')
    const [jing2, setJing2] = useState('婧1')
    
    return (
        <>
            <button onClick={() => { setJing1(new Date().getTime()) }}>jing1</button>
            <button onClick={() => { setJing2(new Date().getTime() + 'jing2') }}>jing2</button>
            <Child name={jing1}>{ jing2}</Child>
        </>
    )
}

function Child({ name, children }) {
    function changejing1() {
        console.log('jing1执行')
        return name+'jing1'
    }

    const actionjing1 = useMemo(() => changejing1(name),[name]) 

    return (
        <>
            <div>{ actionjing1 }</div>
            <div>{ children }</div>
        </>
    )
}

export default useMemoHooks