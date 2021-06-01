import { fromJS } from 'immutable'
import *as constants from './constants'


const defaultState = fromJS({
  title:'往后余生，静待新生',
  content:'<img src="https://upload-images.jianshu.io/upload_images/18564963-6f0636910a34f633.png?imageMogr2/auto-orient/strip|imageView2/2/w/600/format/webp"/><p>我和胖子结婚四年了，我们的女儿都三岁了。说实话我一点都不喜欢这个头发微秃，身材臃肿的的男人。我不知道我们为什么结婚，也许是为了给孩子上户口，也许..</p><p>我和胖子结婚四年了，我们的女儿都三岁了。说实话我一点都不喜欢这个头发微秃，身材臃肿的的男人。我不知道我们为什么结婚，也许是为了给孩子上户口，也许..</p><p>我和胖子结婚四年了，我们的女儿都三岁了。说实话我一点都不喜欢这个头发微秃，身材臃肿的的男人。我不知道我们为什么结婚，也许是为了给孩子上户口，也许..</p><p>我和胖子结婚四年了，我们的女儿都三岁了。说实话我一点都不喜欢这个头发微秃，身材臃肿的的男人。我不知道我们为什么结婚，也许是为了给孩子上户口，也许..</p>'
})

export default (state = defaultState,action)=>{
  switch(action.type){
    case constants.CHANGE_DETAIL:
      return state.merge({
        title:action.title,
        content:action.content
      })
    default:
     return state; 
  }
  //immutable对象的set、方法，会结合之前immutable对象的值
  //和设置的值返回一个全新的对象
}