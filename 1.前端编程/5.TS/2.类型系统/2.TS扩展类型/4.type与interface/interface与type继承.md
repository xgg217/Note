# interface与type继承

## 概述

+ interface extends type

  ```js
  type PartialPointX = { x: number };

  interface TB {
    z: number;
  }

  interface Point extends PartialPointX, TB {
    y: number;
  }

  const p: Point = { x: 1, y: 2, z: 3 };
  ```

+ type extends interface

  ```js
  interface ParticalPointX = {x:number;};
  type Point = ParticalPointX & {y:number};
  ```
