# iframe通信

## 原理

  - 通过 `postMessages` 实现跨域通讯

## 父 发消息给 子

  - 子窗口注册 以下事件接收

  - 父窗口通过 以下方式发消息即可

    ```js
    document.getElementById('iframe').contentWindow.postMessage('来自父窗口的消息', 'c.aaa.com')
    ```

## 子 发消息给 父

  - 因为跨域，子窗口拿不到父窗口的 `window.parent` / `top`

  - 方法1：可以通过 “页面代理” 的方式解决

  - 方法2：父窗口首先 `postMessage` 给子窗口，子窗口在接受到消息后，存储 全局/局部 变量 `evevt`

    ```js
    // 子页面
    let parentEvent = null

    // 监听父页面消息
    window.onload = function() {
      window.addEventListener('message', receiveMsg, false)
    }

    function receiveMsg(e) {
      console.log('子系统接收消息', e)

      // 存储全局变量 e
      parentEvent = e
      event.source.postMessage('消息回传', e.origin);
    }

    // 给父页面发送消息
    function postMsg() {
      let data = { usr: 'admin', psd: '123' }
      // 1. 这种事拿不到的，跨域
      // window.top.postMessage(data, parentEvent.origin)

      // 2. 通过上一步存储的父窗口对象
      parentEvent.source.postMessage(data, parentEvent.origin)
    }
    ```
