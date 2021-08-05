import React, { useEffect, useState } from "react";
import useMousePosition from '../hooks/useMousePosition';

const LikeButton: React.FC = () => {
    const position = useMousePosition()
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    useEffect(() => {
        console.log('runing')
        document.title = `点击了${like}次`
    },[like])
    return (
        <>
        <p>X:{position.x},Y:{ position.y }</p>
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