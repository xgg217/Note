# Proxy示例

## 示例1

  - 示例1

    ```javascript
    const obj = {
      a: 1,
      b: 2
    };

    const p = new Proxy(obj, {
      set: function(target, propertyKey, value) {
        console.log(target);
        console.log(propertyKey);
        console.log(value);
        Reflect.set(target, propertyKey, value);
        return true;
      },
      get(target, propertyKey) {
        if(Reflect.has(target, propertyKey)) {
          return Reflect.get(target, propertyKey)
        }
        console.error(`属性 ${propertyKey} 不存在`);
        return undefined;
      }
    });
    console.log(p); // Proxy {a: 1, b: 2}
    p.a = 10;
    console.log(p); // Proxy {a: 10, b: 2}
    p.c = -1;
    console.log(p); // Proxy {a: 10, b: 2, c: -1}
    console.log(p.d); // undefined
    ```

## set

  - 当为对象里面的属性赋值的时候，会触发 `set`

  - 示例：某系统需要录入一系列数值用于数据统计，但是在录入数值的时候，可能录入的存在一部分异常值，对于这些异常值需要在录入的时候进行处理,&#x20;

      - 比如大于100的值，转换为100,&#x20;

      - 小于0的值，转换为0

  - 这时候就可以使用 `proxy` 的 `set` ，在赋值的时候，对数据进行处理

    ```javascript
    const numbers = []
    const proxy = new Proxy(numbers, {
      set(target,key,value) {
        if(value < 0) {
          value = 0
        }else if(value > 100) {
          value = 100
        }
        target[key] = value
        // 对于set 来说，如果操作成功必须返回true, 否则会被视为失败
        return true
      }
    })

    proxy.push(1)
    proxy.push(101)
    proxy.push(-10)
    // 输出 [1, 100, 0]
    console.log(numbers)
    ```

## has

  - 使用 `in` 判断属性是否在 `proxy` 代理对象里面时，会触发 `has`

  - 示例：一般情况下我们在js中声明私有属性的时候，会将属性的名字以 `_` 开头，对于这些私有属性，是不需要外部调用，所以如果可以隐藏掉是最好的，这时候就可以通过 `has` 在判断某个属性是否在对象时，如果以 `_` 开头，则返回 `false`

    ```javascript
    const obj =  {
      publicMethod() {},
      _privateMethod(){}
    }
    const proxy = new Proxy(obj, {
      has(target, key) {
        if(key.startsWith('_')) {
          return false
        }
        return Reflect.get(target,key)
      }
    })

    // 输出 false
    console.log('_privateMethod' in proxy)

    // 输出 true
    console.log('publicMethod' in proxy)
    ```

## deleteProperty

  - 当使用 `delete` 去删除对象里面的属性的时候，会进入 `deleteProperty`拦截器

  - 示例：现在有一个用户信息的对象，对于某些用户信息，只允许查看，但不能删除或者修改，对此使用 `Proxy` 可以对不能删除或者修改的属性进行拦截并抛出异常，如下

    ```javascript
    const userInfo = {
      name: '子君',
      gzh: '前端有的玩',
      sex: '男',
      age: 22
    }

    // 只能删除用户名和公众号
    const readonlyKeys = ['name', 'gzh']
    const proxy = new Proxy(userInfo, {
      set(target,key,value) {
        if(readonlyKeys.includes(key)) {
          throw new Error(`属性${key}不能被修改`)
        }
        target[key] = value
        return true
      },
      deleteProperty(target,key) {
        if(readonlyKeys.includes(key)) {
          throw new Error(`属性${key}不能被删除`)
          return
        }
        delete target[key]
        return true
      }
    })
    // 报错
    delete proxy.name
    ```

## ownKeys

  - 示例

    ```javascript
    let user = {
      name: "John",
      age: 30,
      _password: "***"
    };

    user = new Proxy(user, {
      ownKeys(target) {
        // 过滤掉 _password
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }

    });
    for(let key in user) {
      console.log(key); // // name，然后是 age
    }
    console.log(Object.keys(user) ); //  ["name", "age"]
    console.log(Object.values(user)); //  ["John", 30]
    ```
