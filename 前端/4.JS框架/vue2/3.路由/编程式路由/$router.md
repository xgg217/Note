# $router

## $router.push

  - 想要导航到不同的 URL，则使用 `router.push` 方法

  - 这个方法会向 `history` 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL

  - 当你点击 `<router-link>` 时，这个方法会在内部调用，所以说，点击 `<router-link :to="...">` 等同于调用 `$router.push(...)`

  - 该方法的参数可以是一个字符串路径，或者一个描述地址的对象。

    ```javascript
    // 字符串
    this.$router.push('home')

    // 对象
    this.$router.push({ path: 'home' })

    // 命名的路由
    this.$router.push({ name: 'user' })

    // 带查询参数，变成 /register?plan=private
    this.$router.push({ path: 'register', query: { plan: 'private' }})
    // 获取参数
    this.$router.query.plan

    const userId = '123'
    router.push({ name: 'user', params: { userId }}) // -> /user/123
    router.push({ path: `/user/${userId}` }) // -> /user/123
    // 这里的 params 不生效
    router.push({ path: '/user', params: { userId }}) // -> /user
    // 获取参数
    this.$router.query.params
    ```

## $router.replace

  - 跟 `router.push` 很像，唯一的不同就是，它不会向 `history` 添加新记录，而是替换掉当前的 `history` 记录。

## $router.go(n)

  - 这个方法的参数是一个整数，意思是在 `history` 记录中向前或者后退多少步，类似 `window.history.go(n)`。

    ```javascript
    // 在浏览器记录中前进一步，等同于 history.forward()
    this.$router.go(1)

    // 后退一步记录，等同于 history.back()
    this.$router.go(-1)

    // 前进 3 步记录
    this.$router.go(3)

    // 如果 history 记录不够用，那就默默地失败呗
    this.$router.go(-100)
    this.$router.go(100)
    ```
