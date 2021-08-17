import {
    ADD_NUMBER,
    SUB_NUMBER,
    IN_CREMENT
} from './constance.js'

const defalutState = {
    counter: 0
}

function reducer(state = defalutState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num };
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num };
        case IN_CREMENT:
            return { ...state, counter: state.counter + 1 };
        default:
            return state;
    }
}

export default reducer