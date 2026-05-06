# Record 类型

## z.record

+ z.record(keySchema, valueSchema) : 验证数据是否为类似字典的对象，其中所有键都符合 keySchema (通常是 z.string() 或 z.number() 或 z.enum())，所有值都符合 valueSchema

  ```js
  import { z } from 'zod';

  // 键是字符串，值是数字
  const scoreRecordSchema = z.record(z.string(), z.number());
  type ScoreRecord = z.infer<typeof scoreRecordSchema>; // { [x: string]: number; }

  console.log(scoreRecordSchema.parse({ math: 90, science: 85 }));
  // scoreRecordSchema.parse({ math: "A" }); // 抛出 ZodError (值类型错误)
  ```

  ```js
  // 使用枚举作为键
  const UserRoleEnum = z.enum(["admin", "editor", "viewer"]);
  const PermissionsSchema = z.record(UserRoleEnum, z.boolean());
  type Permissions = z.infer<typeof PermissionsSchema>;
  /*
  type Permissions = {
      admin: boolean;
      editor: boolean;
      viewer: boolean;
  }
  */
  console.log(PermissionsSchema.parse({ admin: true, editor: true, viewer: false }));
  ```
