import {
    ADD_NUMBER,
    SUB_NUMBER,
    IN_CREMENT
} from './constance.js'

// export function addAction(num) {
//     return {
//         type: "ADD_NUMBER",
//         num
//     }
// }
// export const addAction = (num) =>{
//     return {
//         type: "ADD_NUMBER",
//         num
//     }
// }

export const addAction = num => ({
    type: ADD_NUMBER,
    num
})

export const subAction = num => ({
    type:  SUB_NUMBER,
    num
})

export const inCrement = () => ({
    type: IN_CREMENT,
})