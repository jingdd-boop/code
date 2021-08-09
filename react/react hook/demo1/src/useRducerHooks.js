// // useReducer
import React, { useReducer } from 'react';

const UseReducer = () => {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
        case "add":
            return state + 1
        case "sub":
            return state - 1
        default:
            return state
    }
    }, 0)
    
    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={() => {dispatch('add')}}>+</button>
            <button onClick={() => {dispatch('sub')}}>-</button>
        </div>
    )
}


export default UseReducer







// import { useReducer } from "react"

// function countReducer(state, action) {
//     switch (action.type) {
//         case "add":
//             return state + 1
//         case "add":
//             return state - 1
//         case "add":
//         default:
//             return state
//     }
// }

// useReducer