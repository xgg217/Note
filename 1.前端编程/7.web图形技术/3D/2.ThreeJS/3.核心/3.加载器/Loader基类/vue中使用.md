# vue 中使用

## code

+ code

  ```js
  const url = new URL("./img.jpg", import.meta.url).href;
  const map = new THREE.TextureLoader().load(url);
  const material = new THREE.MeshBasicMaterial({
    map,
    color: 0x737373,
    side: THREE.DoubleSide,
  });
  ```
