// store reducer action

const redux = require('redux');

const initialState = {
    counter: 0
}

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 }
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 }
        case "ADD_NUMBER":
            return { ...state, counter: state.counter + action.nums }
        case "SUB_NUMBER":
            return { ...state, counter: state.counter - action.nums }
        default:
            return state;
    }
}

// store 在创建的时候，需要传一个reducer
const store = redux.createStore(reducer)


// 订阅store的修改
store.subscribe(() => {
    console.log('state 发生了改变',store.getState().counter)
})

// action 对象
const action1 = { type: "INCREMENT" };
const action2 = { type: "DECREMENT" };
const action3 = { type: "ADD_NUMBER", nums: 6 };
const action4 = { type: "SUB_NUMBER", nums: 12 };

// 派发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)
