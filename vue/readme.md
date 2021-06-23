# 一、过滤器
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

首先我们知道filter过滤器时写在模板里面的，会进行`编译成渲染函数字符串`，然后挂载的时候执行渲染函数，从而就会使得过滤器失效

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

# 二、keep-alive
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

