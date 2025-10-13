# Promise 类型

## z.promise

+ z.promise(valueSchema) : 验证数据是否为 Promise，并且该 Promise resolve 后的值符合 valueSchema

  ```js
  import { z } from 'zod';

  const stringPromiseSchema = z.promise(z.string());
  type StringPromise = z.infer<typeof stringPromiseSchema>; // Promise<string>

  async function fetchData(): Promise<string> {
    return "Data from API";
  }

  const promise = fetchData();
  console.log(stringPromiseSchema.parse(promise)); // 验证 Promise 对象本身

  // 通常与 async parse 结合使用来验证解析后的值
  stringPromiseSchema.parseAsync(promise).then(data => {
    console.log("Promise resolved data:", data); // data is string
  });
  ```
