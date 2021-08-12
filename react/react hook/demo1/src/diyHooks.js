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