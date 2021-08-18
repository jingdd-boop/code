import {
    ADD_NUMBER,
    SUB_NUMBER,
    IN_CREMENT,
    CHANGE_BNNERS,
    CHANGE_RECOMMEND
} from './constance.js'

// import * as actionTypes from './constance';
// actionTypes.

const defalutState = {
    counter: 0,
    banners: [],
    recommend: []
}

function reducer(state = defalutState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num };
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num };
        case IN_CREMENT:
            return { ...state, counter: state.counter + 1 };
        case CHANGE_BNNERS:
            return { ...state, banners: action.banners };
        case CHANGE_RECOMMEND:
            return { ...state, recommend: action.recommend };
        default:
            return state;
    }
}

export default reducer