import { fromJS } from 'immutable'
import *as constants from './constants'


const defaultState = fromJS({
 login:false
});


export default (state = defaultState,action)=>{
  switch(action.type){
    case constants.CHANGE_LOGIN:
      return state.set('login',action.value);
    case constants.LOGIN_OUT:
      return state.set('login',action.value);
    default:
     return state; 
  }
  //immutable对象的set、方法，会结合之前immutable对象的值
  //和设置的值返回一个全新的对象
}