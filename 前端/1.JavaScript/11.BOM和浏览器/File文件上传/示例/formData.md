# formData

## formData 上传文件

- 代码

    ```html
    <input type="file" accept="application/vnd.ms-excel" class="file">
    <button type="button" class="import_but">导入系统</button>
    ```

    ```js
    // 上传文件
    fileInput.addEventListener('change', function(e) {
      console.log(this.files[0]);
      fileObj = this.files[0];
    });

    // 导入
    importBut.addEventListener('click', function() {

      const formData = new FormData();
      formData.append('file', fileObj);

      asyncImport(formData);
    });

    const asyncImport = function asyncImport(formData) {
      fetch('http://192.168.110.107:9096/upload/excel', {
        method: 'POST',
          body:formData,
          bodyJson: false,
          contentType:false,
        }).then(response => response.json()).then(res => {
          console.log(res);
          if(res.code !== 200) { return; }
          alert('上传成功');

      }).catch(err => {
        alert('上传失败');
        console.error(err);
      }).finally(() => {
        maskDom.style.display = 'none';
        fileInput.value = '';
      });
    }
    ```
