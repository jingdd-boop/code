// 类组件里面可以通过类名 contextType = MyContext方式 在类中获取context
// 多个context或者在函数式组件中通过MyContext.Cnsumer方式共享context
import { UserContext, ThemContext} from '../App.js'

import React, { useContext } from 'react'

function Context() {
    const user = useContext(UserContext)
    const them = useContext(ThemContext)
    console.log(user,them)
    return (
        <div></div>
        
    )
}

export default Context
