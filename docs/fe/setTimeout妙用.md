# setTimeout妙用
提到js的定时器，会想到setTimeout和setInterval。setTimeout(fn,time)是超时调用，它在大于等于time之后调用fn；setInterval(fn,time)是间歇调用；每隔time调用一次。

但是对于setInterval来言，它有一些问题：
****1**.某些间隔会被跳过 2.多个定时器的代码执行时间可能会比预期小。**
## setInterval间歇调用
setInterval间歇调用，是在前一个方法执行前，就开始计时，比如间歇时间是500ms，那么不管那时候前一个方法是否已经执行完毕，都会把后一个方法放入执行的序列中。这时候就会发生一个问题，假如前一个方法的执行时间超过500ms，加入是1000ms，那么就意味着，前一个方法执行结束后，后一个方法马上就会执行，因为此时间歇时间已经超过500ms了。
所以我们可以采用setTimeout来代替setInterval
```js
function time(t) {
    setTimeout(function () {
            time(t)
        },t);
}
```
上面实现了递归调用，这样做的好处是：在前一个定时器代码执行完成之前，不会向队列插入新的定时代码，确保不会有任何的缺失间隔。而且，它保证在下一次定时器代码执行之前，至少要等待指定的时间间隔。