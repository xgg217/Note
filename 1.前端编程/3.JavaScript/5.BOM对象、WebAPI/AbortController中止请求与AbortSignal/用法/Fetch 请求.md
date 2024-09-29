# Fetch 请求

## fetch() 请求

+ fetch() 函数也支持 AbortSignal，中断请求应该也是 AbortController 使用最多的场景。

+ 一旦 signal 上的 abort 事件被触发，fetch() 函数返回的请求 Promise 就会被拒绝，从而终止未完成的请求

  ```html
  <input type="file" id="fileInput" />
  <button id="uploadButton">上传</button>
  <button id="cancelButton">取消上传</button>

  <script>
    function uploadFile(file) {
      const controller = new AbortController();

      // 将中止信号传递给 fetch 请求
      const response = fetch('/upload', {
        method: 'POST',
        body: file,
        signal: controller.signal,
      });

      return { response, controller };
    }

    document.getElementById('uploadButton').addEventListener('click', () => {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];

      if (!file) {
        alert('请选择一个文件');
        return;
      }

      const { response, controller } = uploadFile(file);

      response.then(res => res.json())
        .then(data => {
          console.log('文件上传成功:', data);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('文件上传被取消');
          } else {
            console.error('文件上传失败:', err);
          }
        });

      // 保存 controller 以便取消上传
      window.currentUploadController = controller;
    });

    document.getElementById('cancelButton').addEventListener('click', () => {
      if (window.currentUploadController) {
        window.currentUploadController.abort();
        console.log('点击了取消上传按钮');
      } else {
        console.log('没有正在进行的上传操作');
      }
    });
  </script>
  ```
