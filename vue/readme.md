# vue-object变化侦听
1. data 通过observer转换成getter/setter的形式来追踪变化
2. 当外界通过Watcher读取数据时，会触发getter从而将Watcher添加到依赖中。
3. 当数据发生了变化时，会触发setter，从而向Dep中的依赖（即Watcher）发送通知。
4. Watcher接收到通知后，会向外界发送通知，变化通知到外界后可能会触发视图更新，也有可能触发用户的某个回调函数等。

# 过滤器
对数值进行处理，比如超出省略，处理字符串

举个小栗子，当字数超过10时，后面显示...
```js
<div>{{title | filterFn}}<div>

filters: {
    filterFn: function(value) {
        if (!value) return ''
        if (value.length > 10) {
            value = value.slice(0,10) + '...'
            return value
        }
    }
}
```

## 使用方式
- 双花括号
```js
{{ title | filterFn }}
```
- v-bind
```js
<div v-bind:id="rawId | formatId"></div>
```

以|为标识的后面的就是过滤器，它接受前面的值(返回值)作为自己的参数

`串联过滤`
```js
{{ message | filterA | filterB }}
filterA接收message作为参数，filterB接收filterA返回的值作为参数

{{ message | filterA('arg1', arg2) }}
filterA接收三个参数，其中message作为它的第一个参数

```

## filter 工作原理

首先我们知道filter过滤器时写在模板里面的，会进行`编译成渲染函数字符串`，然后挂载的时候执行渲染函数，从而就会使得过滤器生效

举一个官网的例子
```js
{{ message | capitalize }}

filters: {
    capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
}
```
当编译成编译成渲染函数字符串后，它会变成下面这个样子：
```js
_f("capitalize")(messsage)
```
_f对应的是一个函数resolveFilter,通过`模板编译`会生成一个_f函数`调用字符串`，当`执行渲染函数`的时候，就会`执行_f函数`，从而让过滤器生效。
(要好好学模板编译，加油)

# keep-alive
组件复用，提高性能
缓存不太使用的组件，而不是直接销毁

参数
1. include: [String,RegExp,Array] 只有匹配到的组件才能进行缓存
2. exclude：[String,RegExp,Array] 匹配到的组件都不缓存
3. max： [String,Number] 数字，最多能缓存多少组件实例。在新实例创建之前，缓存中最就没有使用的实例会被销毁

## props:三个属性 include exclude max

created:定义两个属性
```js
this.cache = Object.create(null)
this.keys = []
```
this.cache是一个对象，用来存储需要缓存的组件
```js
this.cache = {
    'key1':'组件1',
    'key2':'组件2'
    、、、
}
```
this.keys是以一个数组，用来存储每个需要缓存的组件的key，即对应this.cache对象中的键值。

## destoryed
该钩子会遍历this.cache对象，然后将那些被缓存的并且当前没有处于被渲染状态的组件都销毁掉，并将其从this.cache对象中移除
```js
destoryed() {
    for (const key in this.cache) {
        pruneCacheEntery(this.cache,key,this.keys);
    }
}

function pruneCacheEntery(cache,key,keys,current) {
    const cached = cache[key]
    if (cached &&& (!current || cached.tag !== current.tag)) {
        cached.componentInstance.$destory()
    }
    cache[key] = null
    remove(keys,key)
}
```

## mounted
在mounted中观测 include exclude的变化
```js
mounted () {
    this.$watch('include', val => {
        pruneCache(this, name => matches(val,name))
    })
    this.$watch('exclude', val => {
        pruneCache(this, name => !matches(val,name))
    })
}
```
## render
keep-alive如何实现缓存
1. 获取第一个子组件的节点
```js
const slot = this.$solts.default
const vnode = getFirstComponentChild(solt)
```
<keep-alive> 只处理第一个子元素，所以一般和它搭配使用的有 component 动态组件或者是 router-view。

2. 获取该组件节点的名称
```js
/* 获取该组件节点的名称 */
const name = getComponentName(componentOptions)

/* 优先获取组件的name字段，如果name不存在则获取组件的tag */
function getComponentName (opts: ?VNodeComponentOptions): ?string {
  return opts && (opts.Ctor.options.name || opts.tag)
}
```

3. 用组件名称跟include exclude 中的普配规则取匹配
- 如果name与index规则不匹配或者与exclude规则匹配，表示不缓存该组件，直接返回这个组件的vnode就可以
```js
const { include, exclude } = this
if (
    (include && (!name || !matches(include, name))) ||
    (exclude && name && !matches(exclude,name))
) {
    return vnode
}
```
- 否则进行缓存
```js
const { cache, keys } = this
// 获取组件的key值
const key = vnode.key == null?
componentOptions.Ctor.cid + (componentOptions.tag ? `::${componentOptions.tag}` : '')
: vnode.key

//拿到key值后取this.cach对象中寻找是否有该值，如果有，说明组件有缓存，命中缓存
/* 如果命中缓存，则直接从缓存中拿 vnode 的组件实例 */
if (cache[key]) {
    vnode.componentInstance = cache[key].componentInstance
    /* 调整该组件key的顺序，将其从原来的地方删掉并重新放在最后一个 */
    remove(keys, key)
    keys.push(key)
} else {
    cache[key] = vnode
    keys.push(key)
    /* 如果配置了max并且缓存的长度超过了this.max，则从缓存中删除第一个 */
    if (this.max && keys.length > parseInt(this.max)) {
        pruneCacheEntry(cache, keys[0], keys, this._vnode)
    }
}
// 如果没有，则将组件存入缓存
```
LRU 最近最少使用

当使用keep-alive后，组件将不会进行created和mounted，但是有的时候我们需要在组件里面执行一定的操作，用的是activated和deactivated 两个钩子函数，它的执行时机是 <keep-alive> 包裹的组件激活时调用和停用时调用

# 虚拟dom
1. 虚拟dom是用一个JS对象来描述一个dom节点
```html
<div class="a" id="b">我是内容</div>
```

使用js来描述：
```js
{
    tag: 'div', //元素标签
    attrs: { // 属性
        class:'a',
        id: 'b'
    },
    text:'我是内容',// 文本
    children:[], // 子元素
}
```

2. 为什么需要虚拟dom？
首先我们知道vue是数据驱动视图的，数据发生变化视图就要随之更新，再更新视图的时候就要操作dom，而操作真实dom是非常消耗性能的

`用js的计算性能来换取操作dom所消耗的性能`

虽然还是需要操作真实dom，但是我们可以尽可能少的操作dom。

那么如何取减少操作dom呢？

> 我们不要盲目的去更新视图，而是通过对比数据变化前后的状态，计算出视图中哪些地方需要更新，只更新需要更新的地方，而不需要更新的地方则不需关心，这样我们就可以尽可能少的操作DOM了。这也就是上面所说的用JS的计算性能来换取操作DOM的性能。


3. vue中的虚拟dom
在vue中通过VNode类，取实例化出不同类型的虚拟dom节点

VNode类中包含了描述一个真实DOM节点所需要的一系列属性，如tag表示节点的标签名，text表示节点中包含的文本，children表示该节点包含的子节点等。通过属性之间不同的搭配，就可以描述出各种类型的真实DOM节点。
4. VNode的类型

注释，文本，元素，组件，函数式组件，克隆


5. patch
以新的VNode为基准，改造旧的oldVNode使之成为跟新的VNode一样，这就是patch过程要干的事。

- 创建节点
新的vnode中没有的节点，就在旧的oldvnode中创建
- 删除节点
新的vnode中有的节点，就在旧的oldvnode中删除
- 更新节点
新的vnode和旧的oldvnode中都有的，就以新的vnode为基准，更新旧的oldnode


vnode中一共有六种类型的节点，但只有三种类型的节点能过被创建并插入到dom中

`元素节点 文本节点 注释节点`

## 创建节点
Vue在创建节点的时候会判断在新的VNode中有而旧的oldVNode中没有的这个节点是属于哪种类型的节点，从而调用不同的方法创建并插入到DOM中

- 如果VNode是元素节点-->创建元素节点-->插入到DOM中
- 如果VNode是注释节点-->创建注释节点-->插入到DOM中
- 否则就是文本节点 --> 创建文本节点 --> 插入到DOM中

## 删除节点
删除节点非常简单，只需在要删除节点的父元素上调用removeChild方法即可
```js
function removeNode() {
    const parent = nodeOps.parentNode(el)
    if(isDef(parent)) {
        nodeOps.removeChild(parent,el)
    }
}
```
## 更新节点
`静态节点`的概念：下面这个节点里面只包含了纯文字，没有任何可变的变量，这也就是说，不管数据再怎么变化，只要这个节点第一次渲染了，那么它以后就永远不会发生变化，这是因为它不包含任何变量，所以数据发生任何变化都与它无关。我们把这种节点称之为静态节点。
```js
<p>我是不会变化的文字</p>
```

更新节点有三种情况：
1. VNode和oldVNode都是静态节点，那就可以不用更新，因为他们是一样的
2. VNode和oldVNode都是文本节点，比较新旧节点里面的文本内容是否相同，如果不同直接修改文本
3. VNode和oldVNode都是元素节点 -- 看看是否包含了子节点

该节点包含子节点：
1. 新节点包含子节点，先看旧节点有没有包含子节点
2. 如果旧的节点里也包含了子节点，那就需要递归对比更新子节点
3. 如果旧的节点里不包含子节点，那么这个旧节点有可能是空节点或者是文本节点，如果旧的节点是空节点就把新的节点里的子节点创建一份然后插入到旧的节点里面，如果旧的节点是文本节点，则把文本清空，然后把新的节点里的子节点创建一份然后插入到旧的节点里面。

该节点不包含子节点：