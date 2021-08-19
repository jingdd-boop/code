import React, { useEffect, useState } from 'react'

function Counter2() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count
    })
    // 渲染完之后
    return (
        <div>
            <div>{count}</div>
            <button onClick={e => setCount(count + 1)}>按钮</button>
        </div>
    )
}

export default Counter2
