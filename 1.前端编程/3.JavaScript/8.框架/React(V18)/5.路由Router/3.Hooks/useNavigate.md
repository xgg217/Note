# useNavigate

## 概述

+ useNavigate 是一个新的 hook，用于编程式导航

  ```js
  import { useNavigate } from 'react-router-dom';

  function Home() {
    let navigate = useNavigate();
    return (
      <button onClick={() => navigate('/about')}>Go to About</button>
    );
  }
  ```

## options.replace

+ 指定将导致导航替换历史记录堆栈中的当前条目，而不是添加新条目
+ replace: true

  ```js
  navigate('/about', { replace: true })
  ```
