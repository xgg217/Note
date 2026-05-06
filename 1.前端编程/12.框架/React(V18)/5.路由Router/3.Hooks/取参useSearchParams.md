# useSearchParams

## 概述

+ 钩子用于读取和修改当前位置的 URL 中的查询字符串

  ```js
  import { useSearchParams } from "react-router-dom";

  let [searchParams, setSearchParams] = useSearchParams();

  // 取参数
  searchParams.get('id');
  ```
