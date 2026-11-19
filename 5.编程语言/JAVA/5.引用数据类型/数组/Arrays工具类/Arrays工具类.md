# Arrays 工具类

## 概述

## Arrays.toString() 打印数组

+ Arrays.toString()

  ```java
  import java.util.Arrays;

  int[] arr = {1, 2, 3, 4, 5};

  System.out.println(Arrays.toString(arr));   // [1, 2, 3, 4, 5]
  ```

+ 转字符串

  ```java
  String s = Arrays.toString(arr);         // "[1, 1, 2, 3, 4, 5, 6, 9]"
  ```

## Arrays.sort(arr) 排序（升序）

+ 排序（升序）

  ```java
  import java.util.Arrays;

  int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};
  Arrays.sort(arr); // [1, 1, 2, 3, 4, 5, 6, 9]
  ```

+  部分排序 `[from, to)`

  ```java
  import java.util.Arrays;

  int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};
  Arrays.sort(arr, 0, 3);
  ```

##  二分查找（必须先排序）

+  二分查找（必须先排序）

  ```java
  import java.util.Arrays;

  int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};
  int idx = Arrays.binarySearch(arr, 5); // 返回索引，找不到返回负数
  ```

## 填充

+ 填充

  ```java
  int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};
  int[] f = new int[5];
  Arrays.fill(f, 7);                       // [7, 7, 7, 7, 7]
  ```

## 复制

+ 复制

  ```java
  int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};
  int[] copy = Arrays.copyOf(arr, arr.length);   // 全量复制
  int[] part = Arrays.copyOfRange(arr, 2, 5);    // 复制索引 [2,5)
  ```

## 比较（内容相等）

  ```java
  int[] arr = {3, 1, 4, 1, 5, 9, 2, 6};
  int[] copy = Arrays.copyOf(arr, arr.length);
  boolean eq = Arrays.equals(arr, copy);   // true
  ```

## 二维数组转字符串

+ 二维数组转字符串

  ```java
  int[][] mat = {{1, 2}, {3, 4}};
  System.out.println(Arrays.deepToString(mat));   // [[1, 2], [3, 4]]
  ```

## 二维数组比较

+ 二维数组比较

  ```java
  int[][] mat = {{1, 2}, {3, 4}};

  boolean eq2 = Arrays.deepEquals(mat, mat);
  ```
