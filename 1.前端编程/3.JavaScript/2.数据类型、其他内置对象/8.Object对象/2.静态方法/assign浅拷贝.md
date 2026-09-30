# Object.assign

## 作用

+ Object.assign() 静态方法将一个或者多个源对象中所有可枚举的自有属性复制到目标对象，并返回修改后的目标对象

## 语法

+ `Object.assign(target, ...sources)`

  + 参数

    + target 需要应用源对象属性的目标对象，修改后将作为返回值
    + sources 一个或多个包含要应用的属性的源对象

  + 返回值 修改后的目标对象

+ 如果目标对象与源对象具有相同的键（属性名），则目标对象中的属性将被源对象中的属性覆盖，后面的源对象的属性将类似地覆盖前面的源对象的同名属性

+ Object.assign() 方法只会拷贝源对象可枚举的的自有属性到目标对象。该方法在源对象上使用 `[[Get]]` ，在目标对象上使用 `[[Set]]` ，因此它会调用 `getter` 和 `setter`
+ 故它对属性进行赋值，而不仅仅是复制或定义新的属性
+ 如果合并源对象包含 `getter` 的新属性到原型中，则可能不适合使用此方法

+ 如果要将属性定义（包括它们的可枚举性）复制到原型中，则应改用 `Object.getOwnPropertyDescriptor()` 和 `Object.defineProperty()` 方法

+ 字符串和 Symbol 类型属性都会被复制

  ```js
  // 复制对象
  const obj = { a: 1 };
  const copy = Object.assign({}, obj);
  console.log(copy); // { a: 1 }
  ```

## 深拷贝问题

+ 针对深拷贝，需要使用其他办法，因为 `Object.assign()` 只复制属性值
+ 假如源对象是一个对象的引用，它仅仅会复制其引用值

  ```js
  const obj1 = { a: 0, b: { c: 0 } };
  const obj2 = Object.assign({}, obj1);
  console.log(obj2); // { a: 0, b: { c: 0 } }

  obj1.a = 1;
  console.log(obj1); // { a: 1, b: { c: 0 } }
  console.log(obj2); // { a: 0, b: { c: 0 } }

  obj2.a = 2;
  console.log(obj1); // { a: 1, b: { c: 0 } }
  console.log(obj2); // { a: 2, b: { c: 0 } }

  obj2.b.c = 3;
  console.log(obj1); // { a: 1, b: { c: 3 } }
  console.log(obj2); // { a: 2, b: { c: 3 } }

  // 深拷贝
  const obj3 = { a: 0, b: { c: 0 } };
  const obj4 = JSON.parse(JSON.stringify(obj3));
  obj3.a = 4;
  obj3.b.c = 4;
  console.log(obj4); // { a: 0, b: { c: 0 } }
  ```

## 示例

+ 示例之合并对象

  ```js
  const o1 = { a: 1 };
  const o2 = { b: 2 };
  const o3 = { c: 3 };

  const obj = Object.assign(o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
  console.log(o1); // { a: 1, b: 2, c: 3 }，目标对象本身发生了变化
  ```

+ 示例之合并具有相同属性的对象:属性会被后续参数中具有相同属性的其他对象覆盖

  ```js
  const o1 = { a: 1, b: 1, c: 1 };
  const o2 = { b: 2, c: 2 };
  const o3 = { c: 3 };

  const obj = Object.assign({}, o1, o2, o3);
  console.log(obj); // { a: 1, b: 2, c: 3 }
  ```

+ 示例之拷贝 Symbol 类型属性

  ```js
  const o1 = { a: 1 };
  const o2 = { [Symbol("foo")]: 2 };

  const obj = Object.assign({}, o1, o2);
  console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
  Object.getOwnPropertySymbols(obj); // [Symbol(foo)]
  ```

+ 示例之原型链上的属性和不可枚举的属性不能被复制

  ```js
  const obj = Object.create(
    // foo 在 obj 的原型链上
    { foo: 1 },
    {
      bar: {
        value: 2, // bar 是不可枚举的属性
      },
      baz: {
        value: 3,
        enumerable: true, // baz 是可枚举的自有属性
      },
    },
  );

  const copy = Object.assign({}, obj);
  console.log(copy); // { baz: 3 }
  ```

+ 示例之基本类型会被封装为对象

  ```js
  const v1 = "abc";
  const v2 = true;
  const v3 = 10;
  const v4 = Symbol("foo");

  const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
  // 基本类型将被封装，null 和 undefined 将被忽略。
  // 注意，只有字符串封装对象才拥有可枚举的自有属性。
  console.log(obj); // { "0": "a", "1": "b", "2": "c" }
  ```

+ 示例之异常会中断后续的复制

  ```js
  const target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false,
  }); // target.foo 是一个只读属性

  Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
  // TypeError: "foo" is read-only
  // 这个异常会在给 target.foo 赋值的时候抛出

  console.log(target.bar); // 2，第一个源对象成功复制。
  console.log(target.foo2); // 3，第二个源对象的第一个属性也成功复制。
  console.log(target.foo); // 1，异常在这里被抛出
  console.log(target.foo3); // undefined，属性赋值已经结束，foo3 不会被复制
  console.log(target.baz); // undefined，第三个源对象也不会被复制
  ```




