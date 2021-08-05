## 回调函数
1. 实现函数执行四次后再执行另一个函数打印
```js
function doSth(t, cb) {
    return function () {
        if (--t === 0) {
            cb();
        }
    }
}

function logSth() {
    console.log('jingjing')
}

let fn = doSth(4, logSth);
fn();
fn();
fn();
fn();

```

2. 回调地狱
```js
function logSth(cb) {
    console.log('jingjing')
    cb();
}

function logSth2(cb) {
    console.log('zhihao')
    cb()
}

function logSth3() {
    console.log('and')
}

function doSth(t) {
    return function () {
        if (--t === 0) {
             logSth(function () {
                 logSth2(function () {
                     logSth3()
                 })
             })
        }
    }
}
let fn = doSth(4);
fn();
fn();
fn();
fn();

```