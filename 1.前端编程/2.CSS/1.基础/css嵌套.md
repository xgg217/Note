# CSS 嵌套

## 概述

+ 写法更接近 Sass

  ```css
  .card {
    padding: 1rem;

    & h2 {
      font-size: 1.25rem;
    }

    &:hover {
      background: #eee;
    }
  }
  ```
