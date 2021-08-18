import axios from 'axios'
import {
    ADD_NUMBER,
    SUB_NUMBER,
    IN_CREMENT,
    CHANGE_BNNERS,
    CHANGE_RECOMMEND
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

// 轮播和推荐
export const changeBanner = (banners) => ({
    type: CHANGE_BNNERS,
    banners
})

export const changeRecommend = (recommend) => ({
    type: CHANGE_RECOMMEND,
    recommend
})

export const getHomeMultidataAction = (dispatch) => {
    // console.log(getState(),'get')
    axios({
            url: 'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
        const data = res.data.data
        dispatch(changeBanner(data.banner.list))
        dispatch(changeRecommend(data.recommend.list))
        })
}