# promise的实现
```js
// 定义三种状态、resolve和reject方法、then方法（onFulfilled、onRejected）
// 支持异步resolve.
 
function myPromise(constructor) {
    this.status = "pending" //定义初始状态
    this.value = undefined;//存储成功后的值
    this.reason = undefined;//存储失败的原因
 
    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放法数组
    this.onRejectedCallbacks = [];
 
    let resolve = value => {
        if (this.status === "pending") {
            console.log(1)
            this.status = "resolved";
            this.value = value;
            // 一旦resolve执行，调用成功数组的函数
            this.onResolvedCallbacks.forEach(fn => fn());
            console.log(2)
        }
    }
    let reject = reason => {
        if (this.status === "pending") {
            this.status = "rejected";
            this.reason = reason;
            // 一旦reject执行，调用失败数组的函数
            this.onRejectedCallbacks.forEach(fn => fn());
        }
    }
    //捕获构造异常
    try {
        constructor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
 
myPromise.prototype.then = function (onFulfilled, onRejected) {
    // 状态为fulfilled，执行onFulfilled，传入成功的值
    if (this.status === 'resolved') {
        onFulfilled(this.value);
    };
    // 状态为rejected，执行onRejected，传入失败的原因
    if (this.status === 'rejected') {
        onRejected(this.reason);
    };
    // 当状态status为pending时
    if (this.status === 'pending') {
        // onFulfilled传入到成功数组
        this.onResolvedCallbacks.push(() => {
            onFulfilled(this.value);
        })
        // onRejected传入到失败数组
        this.onRejectedCallbacks.push(() => {
            onRejected(this.reason);
        })
    }
}
```