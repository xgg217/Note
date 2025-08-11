# export type 和 export 区别

## 实际应用建议

+ 对于纯类型（接口、类型别名）：

  + 两种方式都可以，但使用 export type 更明确表示你只导出类型
  + 例如：`export type { IContext }`

+ 对于同时有类型和值的声明（类、枚举）：

  + 使用 `export { IContext }` 导出完整定义（类型+值）
  + 使用 `export type { IContext }` 仅导出类型部分
  + 根据实际需要选择合适的方式

+ 重新导出时的最佳实践：

  + 如果确定只需要类型：`export type { IContext } from "..."`
  + 如果需要完整定义：`export { IContext } from "..."`
  + 如果不确定：使用 `export { IContext } from "..."` 更安全，因为它保留了所有信息

+ 使用 import type 的情况：

  + 当你只需要类型信息时，可以使用 import type { IContext } from './module'
  + 这样可以确保在编译后的JavaScript中不会包含这些导入，有助于减小打包体积

## 场景1：当 IContext 是接口（interface）时

+ 当 IContext 是接口（interface）时

  ```js
  interface IContext {
    userId: string;
    // ...其他属性
  }

  // 导出方式                    行为
  // export { IContext }       导出接口类型
  // export type { IContext }  导出接口类型
  ```

+ 结论：对于纯接口，两种方式效果相同，因为接口只存在于类型空间，没有值空间的表示

+ 示例

  ```js
  // 两种导入方式都可以这样使用
  import { IContext } from './your-module';

  const userContext: IContext = {
    userId: '12345'
  };
  ```

## 场景2：当 IContext 是类（class）时

+ 当 IContext 是类（class）时

  ```js
  class IContext {
    userId: string;
    constructor(id: string) {
      this.userId = id;
    }

    getUserInfo() {
      return `User ID: ${this.userId}`;
    }
  }

  // 导出方式                        行为
  // export { IContext }            同时导出类型和类的实现（可以用于类型注解和创建实例）
  // export type { IContext }	      只导出类型部分（只能用于类型注解，不能创建实例）
  ```

+ 使用示例: 使用 `export { IContext }`

  ```js
  // 导入完整类
  import { IContext } from './your-module';

  // 可以作为类型使用
  const context: IContext = new IContext('12345');

  // 可以创建实例
  const newContext = new IContext('67890');
  console.log(newContext.getUserInfo()); // 输出: User ID: 67890
  ```

+ 使用 `export type { IContext }`

  ```js
  // 只导入类型
  import type { IContext } from './your-module';

  // 可以作为类型使用
  const context: IContext = {
    userId: '12345',
    getUserInfo: () => 'User ID: 12345'
  };

  // 错误: 'IContext' 仅表示类型，但在此处却作为值使用
  // const newContext = new IContext('67890'); // 编译错误!
  ```

## 场景3：当 IContext 是枚举（enum）时

+ 当 IContext 是枚举（enum）时

  ```js
  enum IContext {
    Admin = "admin",
    User = "user",
    Guest = "guest"
  }

  // 导出方式                    行为
  // export { IContext }        导出枚举的类型和值（可以访问枚举成员）
  // export type { IContext }   只导出枚举的类型（不能访问枚举成员）
  ```

+ 使用示例：使用 `export { IContext }`

  ```js
  // 导入完整枚举
  import { IContext } from'./your-module';

  // 可以作为类型使用
  const userRole: IContext = IContext.Admin;

  // 可以访问枚举成员
  console.log(IContext.Admin); // 输出: "admin"
  console.log(IContext.User);  // 输出: "user"

  // 可以用于类型判断
  function checkAccess(role: IContext) {
    if (role === IContext.Admin) {
      return true;
    }
    return false;
  }
  ```

+ 使用 `export type { IContext }`

  ```js
  // 只导入类型
  import type { IContext } from'./your-module';

  // 可以作为类型使用
  let userRole: IContext;
  // userRole = ???  // 但无法直接赋值，因为枚举成员不可访问

  // 错误: 'IContext' 仅表示类型，但在此处却作为值使用
  // console.log(IContext.Admin); // 编译错误!

  // 可以用于类型注解，但不能访问枚举值
  function checkAccess(role: IContext) {
    // 错误: 'IContext' 仅表示类型，但在此处却作为值使用
    // if (role === IContext.Admin) { // 编译错误!
    //   return true;
    // }
    return false;
  }
  ```

## 场景4：当 IContext 是类型别名（type alias）时

+ 当 IContext 是类型别名（type alias）时

  ```js
  type IContext = {
    userId: string;
    // ...其他属性
  };

  // 导出方式                      行为
  // export { IContext }          导出类型别名
  // export type { IContext }     导出类型别名
  ```

+ 结论：对于类型别名，两种方式效果相同，因为类型别名只存在于类型空间

+ 示例

  ```js
  // 两种导入方式都可以这样使用
  import { IContext } from './your-module';

  const userContext: IContext = {
    userId: '12345'
  };
  ```
