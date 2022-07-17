# TupleToObject

## 功能

*   代码

    ```typescript
    const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

    type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
    ```

*   实现

    ```typescript
    // 只能传入 内容为 string 、 number 、symbol 类型的只读数组
    type TupleToObject<T extends readonly (string | number | symbol)[]> = {
      [P in T[number]]: P // key 值是 数组的值
    }

    const tuple = ['xgg', '1'] as const;
    type a = TupleToObject<typeof tuple>;
    // type a = {
    //   xgg: "xgg";
    //   1: "1";
    // }
    ```

## JS实现

*   代码

    ```typescript
    const tuple = ['xgg', '1'];

    interface IObj {
      [p: string]: string
    }

    const tupleToObject = function tupleToObject(arr:string[]):IObj {
      // 判断 数组的内容是不是 string 、 number 、 symbol 类型
      // 如果不是就报错

      const obj:IObj = {};
      arr.forEach(item => {
        obj[item] = item;
      });
      return obj;
    }
    ```

## TS获取数组的索引

*   代码

    ```typescript
    // 只能传入 内容为 string 、 number 、symbol 类型的只读数组
    type TupleToObject<T extends readonly (string | number | symbol)[]> = {
      [P in keyof T]: P // key 值是 数组的索引
    }

    const tuple = ['xgg', '1'] as const;
    type a = TupleToObject<typeof tuple>; // type a = number[]

    ```

## TS获取数组的值

*   代码

    ```typescript
    // 只能传入 内容为 string 、 number 、symbol 类型的只读数组
    type TupleToObject<T extends readonly (string | number | symbol)[]> = {
      [P in T[number]]: P // key 值是 数组的值
    }

    const tuple = ['xgg', '1'] as const;
    type a = TupleToObject<typeof tuple>;
    // type a = {
    //   xgg: "xgg";
    //   1: "1";
    //   2: 2;
    // }
    ```
