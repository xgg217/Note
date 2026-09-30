# html 校验

## 匹配img和src

+ code

  ```js
  const imgReg = /<img.*?src=[\"|\']?(.*?)[\"|\']?\s.*?>/ig

  const htmlStr = '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />'

  console.log(imgReg.exec(htmlStr))
  // [
  //   '<img src="sunshine.png" />',
  //   'sunshine.png',
  //   index: 11,
  //   input: '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />',
  //   groups: undefined
  // ]
  console.log(imgReg.exec(htmlStr))
  // [
  //   '<img src="sunshine111.png" />',
  //   'sunshine111.png',
  //   index: 37,
  //   input: '<div></div><img src="sunshine.png" /><img src="sunshine111.png" />',
  //   groups: undefined
  // ]
  ```

## 匹配html中的注释

+ code

  ```js
  const noteReg = /<!--(.*?)-->/g

  const htmlStr = '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>'

  console.log(noteReg.exec(htmlStr))
  // [
  //   '<!--一个div标签-->',
  //   '一个div标签',
  //   index: 0,
  //   input: '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>',
  //   groups: undefined
  // ]
  console.log(noteReg.exec(htmlStr))
  // [
  //   '<!--一个div标签-->',
  //   '一个div标签',
  //   index: 27,
  //   input: '<!--一个div标签--> <div></div> <!--一个div标签--> <div></div>',
  //   groups: undefined
  // ]
  ```

## 匹配html中的style

+ code

  ```js
  const styleReg = /style="[^=>]*"([(\s+\w+=)|>])/g

  const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div>'

  console.log(styleReg.exec(htmlStr))
  // [
  //   'style="background:#000;">',
  //   '>',
  //   index: 5,
  //   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
  //   groups: undefined
  // ]
  console.log(styleReg.exec(htmlStr))
  // [
  //   'style="color:#fff">',
  //   '>',
  //   index: 36,
  //   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
  //   groups: undefined
  // ]
  ```

## 匹配html中的颜色

+ code

  ```js
  const colorReg = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g

  const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div>'

  console.log(colorReg.exec(htmlStr))
  // [
  //   '#000',
  //   '000',
  //   index: 23,
  //   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
  //   groups: undefined
  // ]
  console.log(colorReg.exec(htmlStr))
  // [
  //   '#fff',
  //   'fff',
  //   index: 49,
  //   input: '<div style="background:#000;"><span style="color:#fff"></span></div>',
  //   groups: undefined
  // ]
  ```

## 匹配htmlTag（html标签）

+ code

  ```js
  const endReg = /<("[^"]*"|'[^']*'|[^'">])*>/g

  const htmlStr = '<div style="background:#000;"><span style="color:#fff"></span></div><h1></h1>'

  console.log(endReg.exec(htmlStr))
  console.log(endReg.exec(htmlStr))
  console.log(endReg.exec(htmlStr))
  console.log(endReg.exec(htmlStr))
  console.log(endReg.exec(htmlStr))
  console.log(endReg.exec(htmlStr))
  ```


