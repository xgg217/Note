# 代码着色

## highlight.js

+ 安装

  ```shell
  npm install highlight.js
  # or
  yarn add highlight.js
  ```

+ 基本使用

  ```html
  <pre>
    <code id="code-area">
      * {
        margin: 0;
      }
    </code>
  </pre>

  <script>
    import hljs from 'highlight.js';

    // 获取着色元素
    const code = document.getElementById("code-area");
    hljs.highlightElement(code, {
      language: 'css'
    })
  </script>
  ```

+ 基本内容2：内容来自接口请求

  ```html
  <pre>
    <code id="code-area">
    </code>
  </pre>

  <script>
    import hljs from 'highlight.js';

    const code = document.getElementById("code-area");

    // 获取着色元素
    const data = "来自接口请求的数据";
    const res = hljs.highlight(data, {
      language: 'css'
    });

    code.innerHTML = res.value;
    code.className = `hljs language-${语言版本}`;
  </script>
  ```

