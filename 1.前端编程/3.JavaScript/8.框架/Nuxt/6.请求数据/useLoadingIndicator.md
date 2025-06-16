# useLoadingIndicator

## 概述

+ useLoadingIndicator 返回一个加载器实例对象，该对象提供 start() 和 finish() 等方法，用于在某个异步操作开始前启动加载效果，操作结束后结束加载效果。

  ```html
  <template>
    <NuxtLoadingIndicator />
    <div>
      <button @click="fetchData">获取数据</button>
    </div>
  </template>

  <script setup lang="ts">
  const loading = useLoadingIndicator()

  // 模拟一个异步数据请求
  async function fetchData() {
    // 开始加载
    loading.start()
    try {
      // 模拟延时 3 秒后返回数据
      const data = await new Promise(resolve =>
        setTimeout(() => resolve("模拟数据"), 3000)
      )
      console.log("获取到数据：", data)
    } catch (error) {
      console.error("数据获取失败：", error)
    } finally {
      // 数据请求完成后结束加载
      loading.finish()
    }
  }
  </script>
  ```

+ 在这个例子中：

  + 调用 useLoadingIndicator() 获取加载指示器实例。
  + 在 fetchData 函数中，调用 loading.start() 开始显示加载指示器。
  + 模拟一个 3 秒延时的异步操作，完成后调用 loading.finish() 结束加载效果

+ 来看一个具体的例子。当用户点击“登录”按钮后，加载指示器开始工作，等待异步模拟的登录请求完成后再结束加载，从而让用户明确知道正在进行登录操作。

  ```html
  <template>
    <NuxtLoadingIndicator />
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="username">用户名：</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="请输入用户名"
        />
      </div>
      <div>
        <label for="password">密码：</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
      </div>
      <button type="submit">登录</button>
    </form>
  </template>

  <script setup lang="ts">
  const username = ref("");
  const password = ref("");

  // 获取加载指示器实例
  const loading = useLoadingIndicator();

  async function handleSubmit() {
    // 启动加载效果
    loading.start();
    try {
      // 模拟一个异步登录请求，延时 2 秒返回结果
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true }), 2000)
      );
      if (response.success) {
        console.log("登录成功");
        // 这里可以继续处理登录成功后的逻辑
      } else {
        console.error("登录失败");
      }
    } catch (error) {
      console.error("请求出错：", error);
    } finally {
      // 无论成功或失败，都结束加载效果
      loading.finish();
    }
  }
  </script>
  ```
