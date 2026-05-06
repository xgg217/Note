# from

## 作用

+ 将 数组 、 类数组 、 Promise 、可迭代对象 转换成流

## API

+ `from(input: O): Observable<ObservedValueOf<O>>`

+ 参数

## 示例

+ 示例1 将数组转换为可观测量

  ```js
  import { from } from 'rxjs';

  const array = [10, 20, 30];
  const result = from(array);

  result.subscribe(x => console.log(x));

  // 10
  // 20
  // 30
  ```

+ 示例2 将 Promise 转换成流

  ```js
  import { fromEvent, of, from } from "rxjs";

  fromEvent(input, "input")
    .pipe(
      // 版本号+取消前一个请求解决竞态问题
      switchMap((keyword) =>
        from(fetch(`/api/search?q=${encodeURIComponent(keyword)}`)
          .then((res) => res.json())).pipe(
            finalize(() => {
              // 处理
            })
          )
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
