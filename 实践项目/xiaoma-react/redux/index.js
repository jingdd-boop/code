import store from "./store/index.js";
import {
    addAction,
    subAction,
    inCrement
} from './store/actionCreators.js'

store.subscribe(() => {
    console.log('state',store.getState())
})

store.dispatch(addAction(10));
store.dispatch(addAction(1));
store.dispatch(subAction(20));
store.dispatch(inCrement())
