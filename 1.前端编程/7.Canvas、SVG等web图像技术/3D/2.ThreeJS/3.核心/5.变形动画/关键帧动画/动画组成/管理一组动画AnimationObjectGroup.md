# 管理一组动画 THREE.AnimationObjectGroup

## 概述

+ THREE.AnimationObjectGroup 是 Three.js 中一个较新的特性，用于管理一组动画对象，使其能够作为一个整体进行动画播放和控制

+ 这个类可以帮助你在复杂的场景中更好地组织和控制多个动画对象，特别是当你需要同时播放和控制多个对象的动画时

## 构造函数

+ 构造函数 `new THREE.AnimationObjectGroup()` 不需要任何参数来创建一个动画对象组

## 方法

+ add(object)：将一个 THREE.AnimationObject 或 THREE.AnimationObjectGroup 添加到当前组中
+ remove(object)：从当前组中移除一个 THREE.AnimationObject 或 THREE.AnimationObjectGroup
+ playClip(clip, clipActionOptions)：播放一个动画剪辑，并返回一个 THREE.AnimationAction 实例
+ update(delta)：更新所有动画对象的状态，通常在每一帧渲染时调用，delta 参数表示当前帧与前一帧之间的时间差（以秒为单位）

## 使用示例

+ 创建一个动画对象组

  ```js
  // 建了一个 THREE.AnimationObjectGroup，并将一个包含动画的模型添加到这个组中
  // 通过 animationGroup.update 方法来更新所有动画对象的状态

  // 创建一个动画对象组
  const animationGroup = new THREE.AnimationObjectGroup();

  // 创建一个包含动画的模型
  const loader = new THREE.GLTFLoader();
  loader.load('path/to/model.gltf', function (gltf) {
    const model = gltf.scene;

    // 添加到场景
    scene.add(model);

    // 获取模型的动画
    const animations = gltf.animations;

    // 创建 AnimationMixer
    const mixer = new THREE.AnimationMixer(model);

    // 创建 AnimationAction
    const action = mixer.clipAction(animations[0]);

    // 将动画对象添加到动画对象组
    const animationObject = new THREE.AnimationObject(mixer);
    animationGroup.add(animationObject);

    // 开始播放动画
    action.play();

    // 在渲染循环中更新动画
    let previousTime = performance.now();
    function animate() {
      requestAnimationFrame(animate);

      // 计算当前时间与上次渲染之间的时间差
      const currentTime = performance.now();
      const deltaTime = (currentTime - previousTime) / 1000;
      previousTime = currentTime;

      // 更新动画
      animationGroup.update(deltaTime); // deltaTime 是当前帧与前一帧之间的时间差

      renderer.render(scene, camera);
    }
    animate();
  });
  ```

+ 添加多个动画对象

  ```js
  // 创建了两个 THREE.AnimationMixer，并将它们分别包装成 THREE.AnimationObject
  // 然后添加到 THREE.AnimationObjectGroup 中
  // 这样就可以同时更新这两个动画对象的状态

  // 创建多个动画对象
  const mixer1 = new THREE.AnimationMixer(model1);
  const mixer2 = new THREE.AnimationMixer(model2);

  const animationObject1 = new THREE.AnimationObject(mixer1);
  const animationObject2 = new THREE.AnimationObject(mixer2);

  // 将动画对象添加到动画对象组
  animationGroup.add(animationObject1);
  animationGroup.add(animationObject2);

  // 在渲染循环中更新动画
  let previousTime = performance.now();
  function animate() {
    requestAnimationFrame(animate);

    // 计算当前时间与上次渲染之间的时间差
    const currentTime = performance.now();
    const deltaTime = (currentTime - previousTime) / 1000;
    previousTime = currentTime;

    // 更新动画
    animationGroup.update(deltaTime); // deltaTime 是当前帧与前一帧之间的时间差

    renderer.render(scene, camera);
  }
  animate();
  ```

## 动画控制

+ THREE.AnimationObjectGroup 可以用来统一控制多个动画对象的播放、停止等操作

  ```js
  // 暂停所有动画
  function pauseAllAnimations() {
    for (const object of animationGroup.objects) {
      if (object instanceof THREE.AnimationObject) {
        object.mixer.clipActions.forEach(action => action.paused = true);
      } else if (object instanceof THREE.AnimationObjectGroup) {
        pauseAllAnimations(object);
      }
    }
  }

  // 调用暂停所有动画
  pauseAllAnimations();
  ```
