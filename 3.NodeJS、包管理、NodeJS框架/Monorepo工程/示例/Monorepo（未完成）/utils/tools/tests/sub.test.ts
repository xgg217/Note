import { sub } from "./../src/sub";

test("测试sub方法", () => {
  const result = sub(10, 2);
  expect(result).toBe(8);
})
