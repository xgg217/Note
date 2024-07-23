# @if控制指令

## 概述

+ `@if()` 函数允许您根据条件进行分支，并仅返回两种可能结果中的一种

+ 语法方式同js的 `if....else if ...else`

  ```css
  .container{
    // 第一种
    @if(/* 条件 */){
      // ...
    }

    // 第二种
    @if(/* 条件 */){
      // ...
    }@else{
      // ...
    }

    // 第三种
    @if(/* 条件 */){
      // ...
    }@else if(){
      // ...
    }@else{
      // ...
    }
  }
  ```

  ```css
  $theme:"green";
  .container {
    @if $theme=="red" {
      color: red;
    }
    @else if $theme=="blue" {
      color: blue;
    }
    @else if $theme=="green" {
      color: green;
    }
    @else {
      color: darkgray;
    }
  }
  ```
