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