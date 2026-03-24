# partial

## API

+ partial函数允许你预先绑定函数的部分参数，生成一个新的函数，这在创建特定功能的函数变体时非常有用

  ```js
  function partial<F extends Function>(func: F, ...partialArgs: any[]): (...args: any[]) => ReturnType<F>;

  namespace partial {
    placeholder: symbol;
  }
  ```

+ 参数

  + func (F): 要部分应用的原始函数。
  + partialArgs (any[], 可选): 附加的部分参数

    ```
    partial函数支持复杂的参数绑定模式：

    使用场景              代码示例	                        说明
    固定前几个参数         partial(func, arg1, arg2)        预先绑定前两个参数
    使用占位符跳过参数      partial(func, _, arg2)           跳过第一个参数，绑定第二个
    混合绑定模式           partial(func, arg1, _, arg3)     绑定第一和第三个参数
    ```

+ 返回值

  + `((...args: any[]) => ReturnType<F>)`: 返回新的部分应用函数


## 使用场景

+ 使用场景

  ```js
  import { partial } from 'es-toolkit';

  // 基本部分应用
  const multiply = (x, y) => x * y;
  const double = partial(multiply, 2);
  console.log(double(5)); // 输出: 10
  ```

+ 使用场景

  ```js
  // 使用占位符进行灵活的参数绑定
  const greet = (greeting, name) => `${greeting}, ${name}!`;
  const greetJohn = partial(greet, partial.placeholder, 'John');
  console.log(greetJohn('Hello')); // 输出: Hello, John!
  ```

+ 使用场景

  ```js
  import { partial } from 'es-toolkit/function';

  function greet(greeting, name) {
    return greeting + ' ' + name;
  }

  const sayHelloTo = partial(greet, 'hello');
  sayHelloTo('fred');
  // => 'hello fred'

  // Partially applied with placeholders.
  const greetFred = partial(greet, partial.placeholder, 'fred');
  greetFred('hi');
  // => 'hi fred'
  ```

+ 复杂场景

  ```js
  import { flow, curry, partial } from 'es-toolkit';

  // 业务场景：用户数据处理流水线
  const processUserData = flow(
    // 第一步：数据验证和清理
    curry((validate, clean) => data => clean(validate(data)))(
      data => data.filter(user => user.active),
      data => data.map(user => ({ ...user, name: user.name.trim() }))
    ),

    // 第二步：数据转换
    partial((transform, data) => data.map(transform),
      user => ({
        id: user.id,
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email.toLowerCase()
      })
    ),

    // 第三步：数据排序
    data => data.sort((a, b) => a.fullName.localeCompare(b.fullName))
  );

  // 使用示例
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'JOHN@EXAMPLE.COM', active: true },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', active: false },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'BOB@EXAMPLE.COM', active: true }
  ];

  const processedUsers = processUserData(users);
  console.log(processedUsers);
  ```
