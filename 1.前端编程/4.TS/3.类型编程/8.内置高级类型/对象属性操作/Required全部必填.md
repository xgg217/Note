# Required全部必填

## Required<T> 全部必填

+ 将一个类型的所有属性设置为 **必填**

  ```js
  type User = {
    name?: string;
    age?: number;
  };

  type RequiredUser = Required<User>;

  现在：
    name → 必填
    age → 必填
  ```

+ 使用场景

  + 在保存之前数据必须完整

  + 表单提交校验

  + API 请求体准备
