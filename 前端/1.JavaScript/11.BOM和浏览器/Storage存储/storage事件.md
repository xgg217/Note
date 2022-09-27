# storage事件

## 概况

  - 当储存的数据发生变化时，会触发 `storage` 事件

    ```javascript
    function onStorageChange(e) {
     console.log(e.key);
    }
    ```

  - 除了 `key` 属性，`event` 对象的属性还有三个：

      - `oldValue`：更新前的值。如果该键为新增加，则这个属性为 `null`

      - `newValue`：更新后的值。如果该键被删除，则这个属性为 `null`

      - `url`：原始触发 `storage` 事件的那个网页的网址

## 注意

  - 值得特别注意的是，该事件不在导致数据变化的当前页面触发

  - 如果浏览器同时打开一个域名下面的多个页面，当其中的一个页面改变 `sessionStorage` 或 `localStorage` 的数据时，其他所有页面的storage事件会被触发，而原始页面并不触发 `storage` 事件

  - 可以通过这种机制，实现多个窗口之间的通信。所有浏览器之中，只有**IE浏览器**除外，它会在所有页面触发 `storage` 事件
