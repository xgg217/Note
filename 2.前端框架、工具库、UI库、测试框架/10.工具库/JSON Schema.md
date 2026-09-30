# JSON Schema

## 概述

+ JSON Schema 是一个声明式语言，用于注解和验证 JSON 数据的结构。

## 作用

+ 就像 TypeScript 之于 JavaScript，JSON Schema 之于 JSON

## 核心用途

+ 定义 JSON 数据中字段的类型、是否必填、格式、取值范围等约束

## 地位

+ 是 JSON 生态中的官方标准（draft 系列，最新主流为 2020-12），被广泛用于 API 设计、配置校验、数据生成等场景

## 版本 $schema

+ 声明使用的 Schema 版本（验证器会据此解析）

  ```js
  {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/person.schema.json",
    "title": "Person",
    "description": "个人信息",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "minLength": 1,
        "maxLength": 50
      },
      "age": {
        "type": "integer",
        "minimum": 0,
        "maximum": 150
      },
      "email": {
        "type": "string",
        "format": "email"
      },
      "address": {
        "type": "object",
        "properties": {
          "city": { "type": "string" },
          "street": { "type": "string" }
        },
        "required": ["city"]
      },
      "hobbies": {
        "type": "array",
        "items": { "type": "string" },
        "minItems": 0,
        "maxItems": 10
      }
    },
    "required": ["name", "age"]
  }
  ```

## 关键字

+ 类型

  + type : `string` 、 `number` 、 `integer` 、 `boolean` 、 `object` 、 `array` 、 `null`

+ 对象

  + properties: 定义属性及其类型
  + required: 必填属性列表
  + additionalProperties: 是否允许额外属性（`false` 则禁止）
  + patternProperties: 用正则匹配属性名

+ 字符串

  + minLength / maxLength: 长度限制
  + pattern: 正则匹配
  + format: 常用格式：`email` 、 `date-time` 、 `url` 、 `uuid`

+ 数值

  + minimum / maximum: 范围（含边界）
  + exclusiveMinimum / exclusiveMaximum: 范围（不含边界）
  + multipleOf: 倍数

+ 数组

  + items: 数组元素类型
  + minItems / maxItems: 元素数量
  + uniqueItems: 是否去重

+ 组合

  + allOf、anyOf、oneOf: 逻辑组合（类似“且/或/唯一”继承）
  + not: 取反约束

+ 其他

  + enum: 枚举值列表(关键字的值是一个数组，该数组至少要有一个元素，且数组内的每一个元素都是唯一的)

    ```js
    "sex": {
      "description": "The gender of the person",
      "enum": [
        "male",
        "female"
      ],
      "type": "string"
    }

    {"sex": "male"} //Ok
    {"sex": "man"} //not Ok
    ```

  + const: 固定常量值
  + default: 默认值（仅注解，不参与校验）
  + examples: 示例值（仅注解）

## 引用（$ref）

+ 用于复用定义，避免重复：

  ```js
  {
    "$defs": {
      "point": {
        "type": "object",
        "properties": {
          "x": { "type": "number" },
          "y": { "type": "number" }
        }
      }
    },
    "properties": {
      "start": { "$ref": "#/$defs/point" },
      "end": { "$ref": "#/$defs/point" }
    }
  }
  ```

## 示例1

+ 示例1

  ```js
  {
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://example.com/person.schema.json",
    "title": "Person",
    "description": "个人信息",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "备注",
        "minLength": 1,
        "maxLength": 50
      },
      "age": {
        "type": "integer",
        "minimum": 0,
        "maximum": 150
      },
      "email": {
        "type": "string",
        "format": "email"
      },
      "address": {
        "type": "object",
        "properties": {
          "city": { "type": "string" },
          "street": { "type": "string" }
        },
        "required": ["city"]
      },
      "hobbies": {
        "type": "array",
        "items": { "type": "string" },
        "minItems": 0,
        "maxItems": 10
      }
    },
    "required": ["name", "age"]
  }
  ```
