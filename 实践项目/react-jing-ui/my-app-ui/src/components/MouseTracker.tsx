import React, { useEffect, useState } from "react";

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
            // 清除组件
            console.log('remove',postion.x)  // 0
            document.removeEventListener('click',updateMouse)
        }
    },[])
    console.log('befor render',postion.x)
    return (
        <p>X:{postion.x},Y:{ postion.y }</p>
    )
}

export default MouseTracker