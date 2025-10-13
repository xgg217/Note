# 对象 (Objects)

## z.object

+ z.object({ key: valueSchema, ... }) : 验证数据是否为具有特定属性和对应 schema 的对象

  ```js
  import { z } from 'zod';

  const UserSchema = z.object({
    id: z.string().uuid(),
    username: z.string().min(3),
    email: z.string().email(),
    age: z.number().positive().optional(), // age 是可选的
    isActive: z.boolean().default(true), // isActive 有默认值 true
    address: z.object({ // 嵌套对象
      street: z.string(),
      city: z.string(),
      zipCode: z.string().regex(/^\d{5}(-\d{4})?$/), // 美国邮编格式
    }).optional(),
  });

  type User = z.infer<typeof UserSchema>;
  /*
  推断出的类型 User:
  {
    id: string;
    username: string;
    email: string;
    age?: number | undefined;
    isActive: boolean;
    address?: {
      street: string;
      city: string;
      zipCode: string;
    } | undefined;
  }
  */

  const userData = {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    username: "john_doe",
    email: "john.doe@example.com",
    // age 和 address 未提供，因为它们是可选的
  };

  const validationResult = UserSchema.safeParse(userData);
  if (validationResult.success) {
    console.log("用户数据有效:", validationResult.data);
    // validationResult.data.isActive 将会是 true (因为有 default)
  } else {
    console.error("用户数据无效:", validationResult.error.flatten());
  }

  ```

## 对象方法和修饰符

+ .shape: 获取定义对象形状的对象。UserSchema.shape.username 会给你 username 的 schema
+ .keyof(): 创建一个由对象键组成的枚举 schema。UserSchema.keyof() 会是 z.enum(['id', 'username', 'email', 'age', 'isActive', +'address'])
+ .extend({ newKey: newSchema, ... }): 扩展现有对象 schema，添加新的字段
+ .merge(otherObjectSchema): 合并两个对象 schema
+ .pick({ keyToPick: true, ... }): 从现有 schema 中选择一部分键来创建新的对象 schema
+ .omit({ keyToOmit: true, ... }): 从现有 schema 中排除一部分键来创建新的对象 schema
+ .partial(): 使对象中的所有字段都变为可选。可以传入参数指定哪些字段变为可选 UserSchema.partial({ username: true })
+ .deepPartial(): 递归地使对象及其嵌套对象中的所有字段都变为可选
+ .required(): 使对象中的所有字段都变为必需。可以传入参数指定哪些字段变为必需
+ .passthrough(): 默认情况下，Zod 会去除对象中未在 schema 中定义的额外字段。使用 .passthrough() 会保留这些额外字段
+ .strict(message?): 如果对象包含未在 schema 中定义的额外字段，则抛出错误
+ .strip(): (默认行为) 去除对象中未在 schema 中定义的额外字段
+ .catchall(valueSchema): 为对象中所有未明确定义的键指定一个 schema。这对于动态键很有用

  ```js
  import { z } from 'zod';

  const BaseUserSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
  });

  // .extend()
  const AdminUserSchema = BaseUserSchema.extend({
    permissions: z.array(z.string()),
  });
  type AdminUser = z.infer<typeof AdminUserSchema>;
  // { id: string; name: string; permissions: string[] }

  // .pick()
  const UserNameSchema = BaseUserSchema.pick({ name: true });
  type UserName = z.infer<typeof UserNameSchema>; // { name: string }

  // .omit()
  const UserWithoutIdSchema = BaseUserSchema.omit({ id: true });
  type UserWithoutId = z.infer<typeof UserWithoutIdSchema>; // { name: string }

  // .partial()
  const PartialUserSchema = BaseUserSchema.partial();
  type PartialUser = z.infer<typeof PartialUserSchema>;
  // { id?: string | undefined; name?: string | undefined; }

  // .passthrough() vs .strict()
  const StrictSchema = z.object({ a: z.string() }).strict();
  const PassthroughSchema = z.object({ a: z.string() }).passthrough();

  console.log(StrictSchema.safeParse({ a: "hello", b: "world" })); // success: false (因为有额外的 'b')
  console.log(PassthroughSchema.safeParse({ a: "hello", b: "world" })); // success: true, data: { a: "hello", b: "world" }
  console.log(z.object({ a: z.string() }).parse({ a: "hello", b: "world" })); // 默认 .strip(), 返回 { a: "hello" }

  // .catchall()
  const DynamicObjectSchema = z.object({
      fixedProp: z.string()
  }).catchall(z.number()); // 其他所有属性都必须是数字
  type DynamicObject = z.infer<typeof DynamicObjectSchema>;
  /*
  {
      fixedProp: string;
      [k: string]: unknown; // z.infer 对 catchall 的推断比较保守
                            // 实际验证时，非 fixedProp 的属性会被 catchall(z.number()) 校验
  }
  */
  console.log(DynamicObjectSchema.parse({ fixedProp: "value", dynamicKey1: 123, dynamicKey2: 456 }));
  // console.log(DynamicObjectSchema.safeParse({ fixedProp: "value", dynamicKey1: "not a number" })); // success: false

  ```
