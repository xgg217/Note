# 储存DOM节点

## 示例 -- 储存 DOM 节点

  - 储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏

    ```javascript
    // 保证了Foo的实例方法，只能在Foo的实例上调用
    const foos = new WeakSet()
    class Foo {
      constructor() {
        foos.add(this)
      }
      method () {
        if (!foos.has(this)) {
          throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
        }
      }
    }
    ```
