# 是否为 JSON

## isJSON

+ 检查给定值是否为有效的 JSON 字符串

  ```js
  /*
  * @param {unknown} value The value to check.
  * @returns {boolean} Returns `true` if `value` is a valid JSON string, else `false`.
  *
  * @example
  * isJSON('{"name":"John","age":30}'); // true
  * isJSON('[1,2,3]'); // true
  * isJSON('true'); // true
  * isJSON('invalid json'); // false
  * isJSON({ name: 'John' }); // false (not a string)
  * isJSON(null); // false (not a string)
  */
  export function isJSON(value: unknown): value is string {
    if (typeof value !== 'string') {
      return false;
    }

    try {
      JSON.parse(value);
      return true;
    } catch {
      return false;
    }
  }
  ```

## isJSONValue

+ 检查给定值是否为有效的 JSON 值

  ```js
  export function isJSONValue(value: unknown): value is Record<string, any> | any[] | string | number | boolean | null {
    switch (typeof value) {
      case 'object': {
        return value === null || isJSONArray(value) || isJSONObject(value);
      }
      case 'string':
      case 'number':
      case 'boolean': {
        return true;
      }
      default: {
        return false;
      }
    }
  }
  ```

## isJSONArray

+ 检查给定值是否为有效的 JSON 数组

  ```js
  const result = isJSONArray(value);
  ```

  ```js
  export function isJSONArray(value: unknown): value is any[] {
    if (!Array.isArray(value)) {
      return false;
    }

    return value.every(item => isJSONValue(item));
  }
  ```

## isJSONObject

+ 检查给定值是否为有效的 JSON 对象

  ```js
  export function isJSONObject(obj: unknown): obj is Record<string, any> {
    if (!isPlainObject(obj)) {
      return false;
    }

    const keys = Reflect.ownKeys(obj);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = obj[key];

      if (typeof key !== 'string') {
        return false;
      }

      if (!isJSONValue(value)) {
        return false;
      }
    }

    return true;
  }
  ```
