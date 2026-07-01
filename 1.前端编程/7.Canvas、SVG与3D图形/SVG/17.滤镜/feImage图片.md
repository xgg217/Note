# feImage 图片

## 概述

+  SVG 滤镜原语从外部来源获取图像数据，并提供像素数据作为输出

  ```html
  <svg viewBox="0 0 200 200" width="200" height="200">
    <defs>
      <filter id="image">
        <feImage href="mdn_logo_only_color.png" />
      </filter>
    </defs>

    <rect x="10%" y="10%" width="80%" height="80%" style="filter:url(#image);" />
  </svg>
  ```

## 属性

+ crossorigin

+ preserveAspectRatio

+ xlink:href


