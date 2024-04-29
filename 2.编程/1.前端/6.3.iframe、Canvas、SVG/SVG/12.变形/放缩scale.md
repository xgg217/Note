# 放缩 scale

## scale

+ 如果y没有提供，默认与x相同

+ 放缩后的位置，默认会参考0 0原点

+ 可以使用transform-origin 设置新的原点位置

  ```html
  <rect x="10" y="10" width="60" height="40" fill="#fcc" fill-opacity="0.8"/>
  <rect x="10" y="10" width="60" height="40" fill="none" stroke="#f00" stroke-dasharray="2.5"
        transform="scale(0.4)" transform-origin="40 30" />
  <rect x="10" y="10" width="60" height="40" fill="none" stroke="#0f0" stroke-dasharray="2.5"
        transform="scale(1,0.5)" transform-origin="40 30" />
  <rect x="10" y="10" width="60" height="40" fill="none" stroke="#00f" stroke-dasharray="2.5"
        transform="scale(0.5,1)" transform-origin="40 30" />
  ```

  ![alt text](images/放缩.png)
