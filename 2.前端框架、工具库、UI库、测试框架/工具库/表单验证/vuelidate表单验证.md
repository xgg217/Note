# vuelidate

## 概述

+ Vuelidate 是一个轻量级的表单验证库，专门为 Vue.js 设计，提供简单而灵活的方式来验证表单输入
+ 它可以与 Vue2 和 Vue3 一起使用，并且支持各种常见的验证规则，例如必填字段、最小和最大长度、模式匹配等

[Vuelidate官方文档](https://vuelidate-next.netlify.app/validators.html)

## 基本使用

+ 首先安装这个库：

  ```bash
  npm install @vuelidate/core @vuelidate/validators
  ```

+ 安装的版本信息：

  + "@vuelidate/core": "^2.0.3"
  + "@vuelidate/validators": "^2.0.4"

+ 基础使用核心代码：

  ```js
  const v$ = useVuelidate(rules, state)

  // 提交表单的处理函数
  function submitForm() {
    v$.value.$touch()
    if (v$.value.$invalid) {
      console.log('Form is invalid')
    } else {
      console.log('Form is valid')
    }
  }
  ```

+ 重要的代码解释：

  ```js
  // 创建一个表单验证的实例对象
  const v$ = useVuelidate(rules, state)
  ```

+ 这行代码调用 useVuelidate 函数，将**验证规则 rules** 和**验证状态 state** 作为参数传入，并将返回的验证对象赋值给 v$ 变量

+ v$ 是一个代理对象，包含了所有表单字段的验证状态，另外还有一系列的属性和方法，用于检查和操作验证状态

  ```js
  // 触发验证
  v$.value.$touch()
  ```

+ $touch( ) 方法用于标记所有验证规则为 “已触摸” 状态。这个方法通常在提交表单时调用，以**触发所有字段的验证**。

  ```js
  v$.value.$invalid
  ```

+ $invalid 用于表示整个表单是否无效。如果**表单中有任何一个字段不符合验证规则，$invalid 属性将为 true**

## 有哪些规则？

1. required: 字段必须填写
2. minLength: 字段值的最小长度
3. maxLength: 字段值的最大长度
4. minValue: 字段值的最小数值
5. maxValue: 字段值的最大数值
6. between: 字段值必须在指定的数值范围内
7. alpha: 字段值只能包含字母
8. alphaNum: 字段值只能包含字母和数字
9. numeric: 字段值必须是数字
10. integer: 字段值必须是整数
11. decimal: 字段值必须是小数
12. email: 字段值必须是有效的电子邮件地址
13. ipAddress: 字段值必须是有效的 IP 地址
14. macAddress: 字段值必须是有效的 MAC 地址
15. url: 字段值必须是有效的 URL 地址
16. sameAs: 字段值必须与另一个字段的值相同
17. or: 多个验证规则中至少一个为 true
18. and: 多个验证规则必须都为 true
19. not: 验证规则必须为 false
20. requiredIf: 字段必须在某个条件为 true 时填写
21. requiredUnless: 字段必须在某个条件为 false 时填写

## 使用正则

+ 在 Vuelidate 里面可以通过 helpers.regex 来创建一个自定义的正则验证器

  ```js
  const phoneNumberWithMessage = helpers.withMessage(
    '必须是一个有效的电话号码',
    helpers.regex(/^1[3-9]\d{9}$/)
  )

  const rules = {
    phoneNumber: {
      required: requiredWithMessage,
      numeric: numericWithMessage,
      phoneNumber: phoneNumberWithMessage
    },
  }
  ```

## 自定义验证规则

+ 通过 helpers 可以自定义验证规则

## 示例

+ 示例1

  ```html
  <template>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="name">姓名</label>
        <input v-model="state.name" id="name" class="form-control" />
        <span v-if="v$.name.$error" class="error-message">姓名是必填项</span>
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" v-model="state.password" id="password" class="form-control" />
        <span v-if="v$.password.$error" class="error-message">密码不能少于6个字符</span>
      </div>

      <button type="submit" class="submit-button">提交</button>
    </form>
  </template>

  <script setup>
  import { reactive } from 'vue'
  import { required, minLength } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  // 创建一个响应式状态对象，用于存储表单数据
  const state = reactive({
    name: '',
    password: ''
  })

  // 定义验证规则
  const rules = {
    name: { required },
    password: {
      required,
      minLength: minLength(6) // 规定长度不能小于6个字符
    }
  }

  // 创建一个验证实例对象
  // 1. 验证规则  2. 要对哪一个状态对象进行验证
  const v$ = useVuelidate(rules, state)

  const submitForm = () => {
    // 1. 触发验证
    // 标记所有规则为“已触摸”
    v$.value.$touch()

    // 2. 检验验证后的状态
    if (v$.value.$invalid) {
      // 说明有验证不通过
      console.log('表单验证不通过')
    } else {
      // 说明验证通过
      console.log('表单验证通过')
    }
  }
  </script>

  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .error-message {
    color: #ff4d4f;
    font-size: 14px;
    margin-top: 5px;
    display: block;
  }

  .submit-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>
  ```

+ 示例2

  ```html
  <template>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="username">用户名</label>
        <input v-model="state.username" id="username" class="form-control" />
        <span v-if="v$.username.$error" class="error-message">
          <span v-for="error in v$.username.$errors" :key="error.$uid">{{ error.$message }}</span>
        </span>
      </div>

      <div class="form-group">
        <label for="email">电子邮件</label>
        <input v-model="state.email" id="email" class="form-control" />
        <span v-if="v$.email.$error" class="error-message">
          <span v-for="error in v$.email.$errors" :key="error.$uid">{{ error.$message }}</span>
        </span>
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" v-model="state.password" id="password" class="form-control" />
        <span v-if="v$.password.$error" class="error-message">
          <span v-for="error in v$.password.$errors" :key="error.$uid">{{ error.$message }}</span>
        </span>
      </div>

      <div class="form-group">
        <label for="confirmPassword">确认密码</label>
        <input
          type="password"
          v-model="state.confirmPassword"
          id="confirmPassword"
          class="form-control"
        />
        <span v-if="v$.confirmPassword.$error" class="error-message">
          <span v-for="error in v$.confirmPassword.$errors" :key="error.$uid">{{
            error.$message
          }}</span>
        </span>
      </div>

      <div class="form-group">
        <label for="phoneNumber">电话号码</label>
        <input v-model="state.phoneNumber" id="phoneNumber" class="form-control" />
        <span v-if="v$.phoneNumber.$error" class="error-message">
          <span v-for="error in v$.phoneNumber.$errors" :key="error.$uid">{{ error.$message }}</span>
        </span>
      </div>

      <div class="form-group">
        <label for="age">年龄</label>
        <input v-model="state.age" id="age" class="form-control" type="number" />
        <span v-if="v$.age.$error" class="error-message">
          <span v-for="error in v$.age.$errors" :key="error.$uid">{{ error.$message }}</span>
        </span>
      </div>

      <div class="form-group">
        <label for="website">网站</label>
        <input v-model="state.website" id="website" class="form-control" />
        <span v-if="v$.website.$error" class="error-message">
          <span v-for="error in v$.website.$errors" :key="error.$uid">{{ error.$message }}</span>
        </span>
      </div>

      <button type="submit" class="submit-button">注册</button>
    </form>
  </template>

  <script setup>
  import { reactive, toRefs } from 'vue'
  import {
    required,
    minLength,
    maxLength,
    email,
    sameAs,
    numeric,
    minValue,
    maxValue,
    url,
    helpers
  } from '@vuelidate/validators'
  import { useVuelidate } from '@vuelidate/core'

  // 创建一个响应式状态对象，用于存储表单数据
  const state = reactive({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    age: '',
    website: ''
  })

  // 通过 helpers 函数创建验证规则
  // 通过 helpers.withMessage 来自定义错误消息
  // 前面是自定义错误消息，后面是用到的内置的验证规则
  const requiredWithMessage = helpers.withMessage('该字段是必填的', required)
  const minLengthWithMessage = (min) => helpers.withMessage(`至少需要${min}个字符`, minLength(min))
  const maxLengthWithMessage = (max) => helpers.withMessage(`最多只能有${max}个字符`, maxLength(max))
  const emailWithMessage = helpers.withMessage('请输入有效的电子邮件地址', email)
  const someAsPasswordWithMessage = (password) =>
    helpers.withMessage('两次输入的密码不一致', sameAs(password))
  const numericWithMessage = helpers.withMessage('必须是一个有效的数字', numeric)
  const minValueWithMessage = (min) => helpers.withMessage(`必须大于或等于${min}`, minValue(min))
  const maxValueWithMessage = (max) => helpers.withMessage(`必须小于或等于${max}`, maxValue(max))
  const urlWithMessage = helpers.withMessage('必须是一个有效的 URL', url)
  const phoneNumberWithMessage = helpers.withMessage(
    '必须是一个有效的电话号码',
    helpers.regex(/^1[3-9]\d{9}$/)
  )

  const { password } = toRefs(state)

  // 定义验证规则
  const rules = {
    // 针对一个字段设置了多个验证规则
    username: {
      required: requiredWithMessage,
      minLength: minLengthWithMessage(3),
      maxLength: maxLengthWithMessage(20)
    },
    email: {
      required: requiredWithMessage,
      email: emailWithMessage
    },
    password: {
      required: requiredWithMessage,
      minLength: minLengthWithMessage(8)
    },
    confirmPassword: {
      required: requiredWithMessage,
      sameAsPassword: someAsPasswordWithMessage(password)
    },
    phoneNumber: {
      required: requiredWithMessage,
      numeric: numericWithMessage,
      phoneNumber: phoneNumberWithMessage
      // minLength: minLengthWithMessage(10),
      // maxLength: maxLengthWithMessage(15)
    },
    age: {
      required: requiredWithMessage,
      numeric: numericWithMessage,
      minValue: minValueWithMessage(18),
      maxValue: maxValueWithMessage(120)
    },
    website: {
      required: requiredWithMessage,
      url: urlWithMessage
    }
  }

  // 创建一个验证实例对象
  const v$ = useVuelidate(rules, state)

  // 提交表单
  const submitForm = () => {
    // 1. 触发验证
    v$.value.$touch()
    if (v$.value.$invalid) {
      console.log('表单验证失败')
    } else {
      console.log('表单验证成功')
    }
  }
  </script>

  <style scoped>
  .form-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .error-message {
    color: #ff4d4f;
    font-size: 14px;
    margin-top: 5px;
    display: block;
  }

  .submit-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  .submit-button:hover {
    background-color: #0056b3;
  }
  </style>

  ```

