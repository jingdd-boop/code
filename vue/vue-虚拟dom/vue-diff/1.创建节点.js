function createEle (vnode, parentElm,refElm) {
    const data = node.data
    const children = node.children
    const tag = node.tag
    if (isDef(tag)) { // 标签
        vnode.elm = nodeOps.createElement(tag, vnode)
        createChildren(vnode,children,insertedVnodeQueue)
        insert(parentElm,vnode,elm,refElm)
    } else if (isTrue(vnode.isComment)) { // 注释
        vnode.elm = nodeOps.createComment(vnode.text)
        insert(parentEle,vnode.elm,refElm)
    } else { // 文本
        vnode.elm = nodeOps.createTextNode(vnode.text)
        insert(parentEle,vnode.elm,refElm)
    }
}