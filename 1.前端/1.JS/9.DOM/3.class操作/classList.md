# classList

## 介绍

*   `Element.classList` 是一个只读属性，返回一个元素的类属性的实时 `DOMTokenList` 集合。

*   相比将 `Element.className` 作为以空格分隔的字符串来使用，`classList` 是一种更方便的访问元素的类列表的方法。

## 语法

*   语法

    ```javascript
    const elementClasses = elementNodeReference.classList;
    ```

*   返回值

    *   `elementClasses` 是一个 `DOMTokenList` 表示  `elementNodeReference` 的类属性 。

    *   如果类属性未设置或为空，那么 `elementClasses.length` 返回 0。

    *   虽然 `element.classList` 本身是只读的，但是你可以使用 `add()` 和 `remove()` 方法修改它。

## add

*   添加或删除多个类: `add(class1, class2, ...)`

*   在元素中添加一个或多个类名。如果指定的类名已存在，则不会添加

    ```javascript
    div.classList.add("foo","bar");
    div.classList.remove("foo", "bar");
    div.classList.add("anotherclass");
    ```

*   使用

    ```javascript
    // 初始状态：<div class="a"></div>
    div.classList.add("b");

    // 结果 <div class="a b">点击</div>
    ```

## contains

*   `contains(class)` :返回布尔值，判断指定的类名是否存在。

    *   `true` - 元素包已经包含了该类名;

    *   `false` - 元素中不存在该类名

    ```javascript
    // 初始状态：<div class="a"></div>

    // 存在：返回 true
    const isA =  but.classList.contains('a');
    console.log(isA)； // true

    // 不存在： 返回 false
    const isC =  but.classList.contains('c');
    console.log(isC);  // false
    ```

## remove

*   `remove(class1, class2, ...)` : 移除元素中一个或多个类名。

*   移除不存在的类名，不会报错。

    ```javascript
    div.classList.remove("foo");
    ```

## toggle

*   `toggle(class, true|false)`:在元素中切换类名。

*   第一个参数为要在元素中移除的类名，并返回 `false`。

*   如果该类名不存在则会在元素中添加类名，并返回 `true`。

*   第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。

    ```javascript
    div.classList.toggle("visible");
    ```

## 实际使用

*   代码

    ```javascript
    const div = document.createElement('div');
    div.className = 'foo';

    // 初始状态：<div class="foo"></div>
    console.log(div.outerHTML);

    // 使用 classList API 移除、添加类值
    div.classList.remove("foo");
    div.classList.add("anotherclass");

    // <div class="anotherclass"></div>
    console.log(div.outerHTML);

    // 如果 visible 类值已存在，则移除它，否则添加它
    div.classList.toggle("visible");

    // add/remove visible, depending on test conditional, i less than 10
    div.classList.toggle("visible", i < 10 );

    console.log(div.classList.contains("foo"));

    // 添加或移除多个类值
    div.classList.add("foo", "bar", "baz");
    div.classList.remove("foo", "bar", "baz");

    // 使用展开语法添加或移除多个类值
    const cls = ["foo", "bar"];
    div.classList.add(...cls); 
    div.classList.remove(...cls);

    // 将类值 "foo" 替换成 "bar"
    div.classList.replace("foo", "bar");
    ```
