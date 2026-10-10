# ElLoading

## 动态修改 内容

+ 修改内容

  ```js
  const loadingInstance = ElLoading.service({
    target: ".box",
    lock: true,
    text: "加载中",
    background: "rgba(0, 0, 0, 0.7)",
  });

  const str = `加载中(1/2)`;
  loadingInstance!.setText(str);
  ```
