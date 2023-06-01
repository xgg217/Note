# keyof索引查询

## 作用

+ `keyof` 与 `Object.keys` 略有相似，**该操作符可以用于获取某种类型的所有键(key 值)，其返回类型是联合类型**

## 基本数据类型

+ 代码

  ```js
  let K1: keyof boolean; // let K1: "valueOf"
  let K2: keyof number; // let K2: "toString" | "toFixed" | "toExponential" | ...
  let K3: keyof symbol; // let K1: "valueOf"
  ```

## 对象

+ 代码

  ```js
  type Point = { x: number; y: number };
  type P = keyof Point; // p = 'x' | 'y'

  ```

+ 如果该类型具有 `string` 或 `number` 索引签名，`keyof` 则将返回这些类型

  ```js
  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish; // type A = number

  ```

  ```js
  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish; // type M = string | number

  // 因为js对象属性不区分number还是string,从类型兼容上来说number的属性是兼容的(因为Number 也会被转为 String)
  // 例如
  type A = {
      [x: string]: string;
  }

  const a : A = {
      1: '234'
  } // ok
  ```

## 接口interface

+ 示例

  ```js
  interface Person {
    name: string;
    age: number;
    location: string;
  }

  type K1 = keyof Person; // "name" | "age" | "location"
  type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
  type K3 = keyof { [x: string]: Person };  // string | number
  ```

  ```js
  // ts 定义
  interface Person {
    name: string;
    age: number;
    location: string;
  }

  function prop(obj: Person, key: keyof Person) {
    return obj[key];
  }
  ```

## 类

## 枚举

+ 代码

  ```js
  enum HttpMethod {
    GET,
    Post
  }

  type Method = keyof typeof HttpMethod; // "GET" | "Post"
  ```

## 数组
