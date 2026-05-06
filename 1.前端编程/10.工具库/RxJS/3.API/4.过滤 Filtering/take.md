# take

## 示例

+ 示例

  ```js
  // take(3)：取前 3 个值就结束
  rxjs.interval(1000).pipe(rxjs.operators.take(3))
    .subscribe(n => console.log("take:", n));
  // 0, 1, 2，然后 complete

  // first()：等价于 take(1)，但更语义化
  rxjs.interval(1000).pipe(rxjs.operators.first())
    .subscribe(n => console.log("first:", n));
  // 0，然后 complete

  // takeWhile：条件满足就继续，不满足就停
  rxjs.interval(1000).pipe(
    rxjs.operators.takeWhile(n => n < 3)
  ).subscribe(n => console.log("takeWhile:", n));
  // 0, 1, 2，n=3 时条件为 false → complete
  ```
