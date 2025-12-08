# @keyframes 关键帧

## 声明动画的规则

+ 声明动画的规则

  ```css
  @keyframes 动画名称 {
    完成动画关键帧列表
  }
  ```

## 动画名称命名规则

+ 符合 CSS 语法中对标识符的定义 使用以下字符组合

  + 任意字母（a～z或A～Z）
  + 数字（0～9）
  + 短横线（-）
  + 下划线（_）
  + 转义字符（使用反斜杠\转义）
  + Unicode字符（反斜杠\后面跟十六进制数字）

+ 注意：

  + 不能是css属性支持的关键字 none, initial, unset, inherit等
  + 不能以十进制数字开始

## 使用

+ 代码

  ```css
  @keyframes 动画名字 {
    0% {
      color: red;
    }
    25% {
      color: red;
    }
    50% {
      color: red;
    }
    100% {
      color: red;
    }
  }
  ```

+ 如果只有 `0%` 和 `100%` 可以用 `from` 和 `to` 来代替

  ```css
  @keyframes 动画名字 {
    from {
      color: red;
    }
    to {
      color: red;
    }
  }
  ```

## 注意点：

+ 顺序不影响动画的执行
+ 初始关键可以不设置，以默认样式为基础关键帧
+ 关键帧中定义的样式中的!important将不生效 ，优先级比行间样式要高
+ 关键帧列表可以合并(钟摆运动)

  ```css
  @keyframes a3 {
    0%, 100% {
      transform: rotate(45deg)
    }
    50% {
      transform: rotate(-45deg)
    }
  }
  ```

+ 重复定义关键帧，指挥覆盖相同属性

  ```css
  @keyframes a4 {
    100% {
      left: 50px;
    }
    100% {
      top: 100px;
      left: 25px;
    }
  }
  ```
