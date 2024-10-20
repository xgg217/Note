# v-permission

## 概述

+ 创建一个自定义指令 v-permission，用于控制 DOM 元素根据用户权限列表来显示

## code

+ code

  ```js
  // 模拟用户权限
  const userPermissions = ['admin', 'read'];

  app.directive('permission', {
    mounted(el, binding) {
      const { value } = binding
      if (value && value instanceof Array) {
        // 检查用户权限是否包含指令传入的权限
        const hasPermission = value.some((item) => userPermissions.includes(item))
        if (!hasPermission) {
          el.style.display = 'none'
        }
      } else {
        throw new Error('请传入一个权限数组')
      }
    }
  })
  ```

  ```html
  <!-- 具有 read 权限的用户才能看到这个按钮 -->
  <button v-permission="['read']">读取按钮</button>
  <!-- 具有 write 权限的用户才能看到这个按钮 -->
  <button v-permission="['write']">写入按钮</button>
  <!-- 具有 admin 权限的用户才能看到这个按钮 -->
  <button v-permission="['admin']">管理权限</button>
  ```
