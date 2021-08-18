import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer.js'
import thunkMiddleWare from 'redux-thunk'

const storeenhancer = applyMiddleware(thunkMiddleWare)

const store = createStore(reducer,storeenhancer)

export default store;