# tap

## 作用

+ 调试、打印log、埋点等
+ 用于对源可观测物的通知执行副作用

  + 与当前数据流转换无关的操作

## API

+ `tap(observerOrNext?: Partial<TapObserver<T>> | ((value: T) => void)): MonoTypeOperatorFunction<T>`

+ 参数

  + next	(value: T) => void 可选。默认是 。undefined

  + error	(error: any) => void 可选。默认是 。undefined

  + complete	() => void 可选。默认是 。undefined

## 示例

+ 示例1 调试

  ```js
  import { of, tap } from 'rxjs';

  const source = of(1, 2, 3, 4, 5);

  source.pipe(
    tap(n => {
      console.log(n)
    })
  )
  .subscribe({ next: console.log, error: err => console.log(err.message) });
  ```

+ 示例2 操作 DOM

  ```js
  const input = document.querySelector("#search");
  const results = document.querySelector("#results");

   fromEvent(input, "input")
    .pipe(
      tap(n => {
        // 开始加载 动画
        loading.value = true;
      }),

      // 版本号+取消前一个请求解决竞态问题
      switchMap((keyword) =>
        fetch(`/api/search?q=${encodeURIComponent(keyword)}`)
          .then((res) => res.json())
      ),
      catchError((err) => {  // 错误兜底
        console.error("搜索请求失败:", err);
        return of({ items: [] }); // 出错时返回空结果
      })
    )
    .subscribe((data) => {
      results.innerHTML = data.items.map((item) => `<li>${item}</li>`).join("");
    });
  ```
