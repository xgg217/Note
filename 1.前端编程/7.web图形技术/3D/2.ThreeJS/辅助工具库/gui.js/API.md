# API

## 销毁

+ `gui.destroy()`

## save 保存界面上的属性值

+ gui.save 将当前界面上的属性值保存到一个对象中，以 JSON 对象的形式存储

  ```js
  let preset = {};

  const obj = {
    value1: 'original',
    value2: 1996,
    savePreset() {
      // 保存当前值到一个对象中
      preset = gui.save();
      loadButton.enable();
    },
    loadPreset() {
      // gui.load 将通过 gui.save保存的对象重新加载到界面上
      gui.load(preset);
    }
  }

  gui.add(obj, 'value1');
  gui.add(obj, 'value2');

  gui.add(obj, 'savePreset');

  const loadButton = gui.add(obj, 'loadPreset');
  loadButton.disable();
  ```

+ 处理属性名称冲突

  + 界面上有相同的属性名时，用 gui.save 会报名称冲突的错误。这时可以用 name 方法改名可以避免这个问题

  ```js
  const position = {
    x: 1
  };
  const rotation = {
    x: 2
  };
  // gui.add( position, 'x' );
  // gui.add( rotation, 'x' );
  // 避免两个对象中的 x 同名
  gui.add(position, 'x').name('position.x');
  gui.add(rotation, 'x').name('rotation.x');

  const obj = {
    savePreset() {
      preset = gui.save();
      loadButton.enable();
    },

    // 恢复您保存的值
    loadPreset() {
      gui.load(preset);
    }
  };

  let preset = {};

  gui.add(obj, 'savePreset');

  const loadButton = gui.add(obj, 'loadPreset');
  loadButton.disable();
  ```

## 重置为其初始值 .reset

+ 将所有控制器重置为其初始值

  + recursive - 传递 false 以排除从此 GUI 降级的文件夹

  + 默认值：true

## 显示 .show

+ 显示隐藏后的 GUI

  + 默认值：true

  ```js
  gui.show();
  gui.show( false ); // hide
  gui.show( gui._hidden ); // toggle
  ```

## 隐藏 hide

+

## 启用 enable

+ 默认值 true

  ```js
  controller.enable();
  controller.enable( false ); // disable
  controller.enable( controller._disabled ); // toggle
  ```

## 禁用 disable

+ 默认值 true

  ```js
  controller.disable();
  controller.disable( false ); // enable
  controller.disable( !controller._disabled ); // toggle
  ```
