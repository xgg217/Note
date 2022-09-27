# dir、dirxml

## dir

  - `dir` 方法用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示

    ```javascript
    console.log({f1: 'foo', f2: 'bar'})
    // Object {f1: "foo", f2: "bar"}

    console.dir({f1: 'foo', f2: 'bar'})
    // Object
    //   f1: "foo"
    //   f2: "bar"
    //   __proto__: Object
    ```

  - 该方法对于输出DOM对象非常有用，因为会显示DOM对象的所有属性
