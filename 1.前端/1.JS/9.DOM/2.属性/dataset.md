# dataset

## 命名规范

*   只能包含字母、数字、连词线（`-`）、点（`.`）、冒号（`:`）和下划线（`_`)。

*   属性名不应该使用A到Z的大写字母，

*   比如不能有 `data-helloWorld` 这样的属性名，而要写成 `data-hello-world`

## 属性书写样式

*   代码

    ```html
    <div id="mydiv" data-foo="bar">
    ```

## 读写

*   代码

    ```javascript
    var n = document.getElementById('mydiv');
    n.dataset.foo // bar
    n.dataset.foo = 'baz'
    ```

## 删除

*   代码

    ```javascript
    delete document.getElementById('myDiv').dataset.foo;
    ```
