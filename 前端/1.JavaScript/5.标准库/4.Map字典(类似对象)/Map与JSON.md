# Map与JSON

## Map 转为 JSON

+ 一种情况是，`Map` 的键名都是字符串，这时可以选择转为对象 `JSON`

    ```js
    function strMapToJson(strMap) {
      return JSON.stringify(strMapToObj(strMap));
    }

    let myMap = new Map().set('yes', true).set('no', false);
    strMapToJson(myMap)
    // '{"yes":true,"no":false}'
    ```

+ 另一种情况是，`Map` 的键名有非字符串，这时可以选择转为数组 `JSON`

    ```js
    function mapToArrayJson(map) {
      return JSON.stringify([...map]);
    }

    let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
    mapToArrayJson(myMap)
    // '[[true,7],[{"foo":3},["abc"]]]'
    ```

## JSON 转为 Map

+ JSON 转为 Map，正常情况下，所有键名都是字符串

    ```js
    function jsonToStrMap(jsonStr) {
      return objToStrMap(JSON.parse(jsonStr));
    }

    jsonToStrMap('{"yes": true, "no": false}')
    // Map {'yes' => true, 'no' => false}
    ```

+ 有一种特殊情况，整个 `JSON` 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组

+ 这时，它可以一一对应地转为 `Map`。这往往是 `Map` 转为数组 `JSON` 的逆操作

    ```js
    function jsonToMap(jsonStr) {
      return new Map(JSON.parse(jsonStr));
    }

    jsonToMap('[[true,7],[{"foo":3},["abc"]]]')
    // Map {true => 7, Object {foo: 3} => ['abc']}
    ```
