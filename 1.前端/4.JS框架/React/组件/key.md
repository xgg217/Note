# key

## 作用

*   `Keys` 可以在 `DOM` 中的某些元素被增加或删除的时候帮助 `React`识别哪些元素发生了变化。

*   因此你应当给数组中的每一个元素赋予一个确定的标识。

    ```javascript
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    ```

*   一个元素的 `key` 最好是这个元素在列表中拥有的一个独一无二的字符串。

*   通常，我们使用来自数据的 `id` 作为元素的 `key`:

    ```javascript
    const todoItems = todos.map((todo) =>
      <li key={todo.id}>
        {todo.text}
      </li>
    );
    ```

*   当元素没有确定的 `id` 时，你可以使用他的序列号索引 `index` 作为 `key`

    ```javascript
    const todoItems = todos.map((todo, index) =>
      <li key={index}>
        {todo.text}
      </li>
    );
    ```

*   **如果列表可以重新排序，我们不建议使用索引来进行排序，因为这会导致渲染变得很慢。**

## 用keys提取组件

*   元素的 `key` 只有在它和它的兄弟节点对比时才有意义。

*   如果你提取出一个 `ListItem` 组件，你应该把 `key` 保存在数组中的这个 `<ListItem />` 元素上，而不是放在 `ListItem` 组件中的 `<li>` 元素上。

*   错误的示范

    ```javascript
    function ListItem(props) {
      const value = props.value;
      return (
        // 错啦！你不需要在这里指定key:
        <li key={value.toString()}>
          {value}
        </li>
      );
    }

    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        // 错啦！元素的key应该在这里指定：

        <ListItem value={number} />
      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }

    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(
      <NumberList numbers={numbers} />,
      document.getElementById('root')
    );
    ```

*   `key` 的正确使用方式

    ```javascript
    function ListItem(props) {
    // 对啦！这里不需要指定key:
      return <li>{props.value}</li>;
    }

    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        // 又对啦！key应该在数组的上下文中被指定

        <ListItem key={number.toString()}
                  value={number} />

      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }

    const numbers = [1, 2, 3, 4, 5];
    ReactDOM.render(
      <NumberList numbers={numbers} />,
      document.getElementById('root')
    );
    ```

*   当你在 `map()` 方法的内部调用元素时，你最好随时记得为每一个元素加上一个**独一无二**的 `key`。

## 元素的key在他的兄弟元素之间应该唯一

*   数组元素中使用的 `key` 在其兄弟之间应该是独一无二的。

*   然而，它们不需要是全局唯一的。

*   当我们生成两个不同的数组时，我们可以使用相同的键

*   `key` 会作为给 `React` 的提示，但不会传递给你的组件。

*   如果您的组件中需要使用和 `key` 相同的值，请将其作为属性传递：

    ```javascript
    // Post组件可以读出props.id，但是不能读出props.key
    const content = posts.map((post) =>
      <Post
        key={post.id}
        id={post.id}
        title={post.title} />
    );
    ```

## 权衡

*   `Keys` 应该是稳定的，可预测的，且唯一的。

*   不稳定的 `key`（类似由 `Math.random()` 生成的）将使得大量组件实例和 `DOM`节点进行不必要的重建，使得性能下降并丢失子组件的状态。

## 在jsx中嵌入map()

*   方法1

    ```javascript
    function NumberList(props) {
      const numbers = props.numbers;
      const listItems = numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />

      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }
    ```

*   方法2

    ```javascript
    function NumberList(props) {
      const numbers = props.numbers;
      return (
        <ul>
          {numbers.map((number) =>
            <ListItem key={number.toString()}
                      value={number} />

          )}
        </ul>
      );
    }
    ```
