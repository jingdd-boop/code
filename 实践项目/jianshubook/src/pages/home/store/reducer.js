import { fromJS } from 'immutable'
import *as constants from './constants'


const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  writeList:[],
  articlePage:1,
  showScroll:false
});

const changeHomeData = (state,action) => {
  return   state.merge({
    topList:fromJS(action.topicList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList),
    writeList:fromJS(action.writeList)
  });
}

const changeArticleList = (state,action) => {
  return state.merge({
    'articleList':state.get('articleList').concat(action.list),
    'articlePage':action.nextPage
  });
}


export default (state = defaultState,action)=>{
  switch(action.type){
    case constants.CHANGE_HOME_DATA:
     return changeHomeData(state,action);
    case constants.ADD_ARTICLE_LIST:
     return changeArticleList(state,action);
    case constants.TAGGLE_TOP_SHOW:
     return state.set('showScroll',action.show)
    default:
     return state; 
  }
  //immutable对象的set、方法，会结合之前immutable对象的值
  //和设置的值返回一个全新的对象
}