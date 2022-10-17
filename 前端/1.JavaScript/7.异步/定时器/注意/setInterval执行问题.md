# setInterval执行问题

## 执行问题

- 累计效应（上面提到的），如果 `setInterval` 代码在（ `setInterval` ）再次添加到队列之前还没有完成执行，就会导致定时器代码连续运行好几次，而之间没有间隔。就算正常间隔执行，多个 `setInterval` 的代码执行时间可能会比预期小（因为代码执行需要一定时间）

- 譬如像iOS的webview,或者Safari等浏览器中都有一个特点，在滚动的时候是不执行JS的，如果使用了 `setInterval` ，会发现在滚动结束后会执行多次由于滚动不执行JS积攒回调，如果回调执行时间过长,就会非常容器造成卡顿问题和一些不可知的错误（这一块后续有补充，setInterval自带的优化，不会重复添加回调）

- 而且把浏览器最小化显示等操作时，`setInterval` 并不是不执行程序，它会把 `setInterval` 的回调函数放在队列中，等浏览器窗口再次打开时，一瞬间全部执行时

## 解决方法

- 用 `setTimeout` 模拟 `setInterval` ，或者特殊场合直接用 `requestAnimationFrame`
