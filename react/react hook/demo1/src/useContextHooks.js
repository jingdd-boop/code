import React, { useState, createContext,useContext } from 'react';

const CountContext = createContext()

const Counter = () => {
    let count = useContext(CountContext)
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
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}
export default ContextHooks