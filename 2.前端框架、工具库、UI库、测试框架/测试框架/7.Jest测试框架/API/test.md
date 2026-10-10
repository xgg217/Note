# test

## API

+ `test(name, fn, timeout)`

  + name 针对这个测试用例的一个描述
  + fn 执行该用例所对应的回调函数

  ```js
  test("测试加法", () => {
    return expect(sum(1, 2)).toBe(3);
  });

  test('描述', () => {
    return fetchBeverageList().then(list => {
      expect(list).toContain('lemon');
    });
  });
  ```
