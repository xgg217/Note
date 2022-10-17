# WeakMap与Map

## 区别

- WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名

    ```js
    const map = new WeakMap();
    map.set(1, 2)
    // TypeError: 1 is not an object!
    map.set(Symbol(), 2)
    // TypeError: Invalid value used as weak map key
    map.set(null, 2)
    // TypeError: Invalid value used as weak map key
    ```

- WeakMap的键名所指向的对象，不计入垃圾回收机制
