# this 指向内容

## API

+ `@this` 说明此处 this 所指代的内容

  ```js
  /**
   * @class
   */
  function myClass() {
      ...
  }

  /**
  * @func
  * @this myClass
  * @param {string} a - 参数a
  */
  function foo(a) {
      this.a = a;
  }

  foo.call(new myClass(), 'a');
  ```
