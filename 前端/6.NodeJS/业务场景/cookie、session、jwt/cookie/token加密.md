# token加密

## 使用 cookie-parser

  - 属于 **对称加密**

  - 加密

    ```javascript
    const express = require("express");
    const cookieParser = require('cookie-parser');

    const app = express();

    app.use(cookieParser());
    ```
