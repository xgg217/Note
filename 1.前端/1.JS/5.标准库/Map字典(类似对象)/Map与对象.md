# Map与对象

## Map 转为对象

  - 如果所有 `Map` 的键都是字符串，它可以无损地转为对象。

    ```javascript
    function strMapToObj(strMap) {
      let obj = Object.create(null);
      for (let [k,v] of strMap) {
        obj[k] = v;
      }
      return obj;
    }

    const myMap = new Map()
      .set('yes', true)
      .set('no', false);
    strMapToObj(myMap)
    // { yes: true, no: false }
    ```

  - 如果有非字符串的键名，那么这个键名会被转成字符串，再作为对象的键名。

## 对象转为 Map

  - 对象转Map

    ```javascript
    function objToStrMap(obj) {
      let strMap = new Map();
      for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
      }
      return strMap;
    }

    objToStrMap({yes: true, no: false})
    // Map {"yes" => true, "no" => false}
    ```
