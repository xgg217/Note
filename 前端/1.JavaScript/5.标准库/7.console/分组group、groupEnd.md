# group、groupEnd

## group groupEnd

+ 用于将显示的信息分组，可以把信息进行折叠和展开

    ```js
    console.group('第一层');
    console.group('第二层');

      console.log('error');
      console.error('error');
      console.warn('error');

    console.groupEnd();
    console.groupEnd();
    ```
