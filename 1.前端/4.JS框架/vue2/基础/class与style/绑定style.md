# 绑定style

## 使用对象语法

*   看着比较像CSS，但其实是一个JavaScript对象

*   CSS属性名可以用驼峰式(camelCase)或者短横线分隔(kebab-case)来命名 但是使用短横线分隔时，要用引号括起来

    ```javascript
    <div v-bind:style="{ fontSize: size + 'px' }"></div>

    data() {
      return {
        size: 30
      }
    }
    ```

    ```javascript
    <div class="bar" :style="{background: item.color, width: item.size + px}"></div>

    data() {
      return {
        item: {
          color： "red",
          size: 400,
        }
      }
    }
    ```

*   也可以直接绑定一个样式对象，这样模板会更清晰：

    ```javascript
    <div v-bind:style="styleObject"></div>

    data() {
      return {
        styleObject: {
          fontSize: '13px'
        }
      }

    }
    ```

## 数组语法

*   数组语法可以将多个样式对象应用到同一个元素

    ```javascript
    <div v-bind:style="[styleObjectA, styleObjectB]"></div>
    ```

## 注意

*   自动添加前缀 绑定 `style` 时，使用需要添加浏览器引擎前缀的CSS属性时，如 `transform`，Vue.js会自动侦测并添加相应的前缀。

*   多重值 从 2.3.0 起你可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值

    ```javascript
    <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
    ```

*   这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 `flexbox`，那么就只会渲染 `display: flex`。
