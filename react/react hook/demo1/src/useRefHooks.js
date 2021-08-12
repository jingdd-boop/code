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