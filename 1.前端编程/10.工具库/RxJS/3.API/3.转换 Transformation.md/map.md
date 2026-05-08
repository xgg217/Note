# map

## API

+ `map(project: (value: T, index: number) => R): OperatorFunction<T, R>`

  ![alt text](images/map.png)

+ 参数

  + project `(value: T, index: number) => R`

+ 返回值 `OperatorFunction<T, R>`

## 示例

+ 示例 每次点击都映射到点击的位置clientX

  ```js
  import { fromEvent, map } from 'rxjs';

  const clicks = fromEvent<PointerEvent>(document, 'click');
  const positions = clicks.pipe(map(ev => ev.clientX));

  positions.subscribe(x => console.log(x));
  ```
