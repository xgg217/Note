# Style

## 绑定对象

- `:style` 支持绑定 JavaScript 对象值，对应的是 [HTML 元素的](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style "HTML 元素的 ")[style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style "style")[属性](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style " 属性")

    ```typescript
    const activeColor = ref('red')
    const fontSize = ref(30)

    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

    ```

## camelCase与kebab-cased&#x20;

- 尽管推荐使用 camelCase，但 `:style` 也支持 kebab-cased 形式的 CSS 属性 key (对应其 CSS 中的实际名称)

    ```html
    <div :style="{ 'font-size': fontSize + 'px' }"></div>
    ```

## 样式对象

- 直接绑定一个样式对象通常是一个好主意，这样可以使模板更加简洁

    ```typescript
    const styleObject = reactive({
      color: 'red',
      fontSize: '13px'
    })

    <div :style="styleObject"></div>

    ```

## 计算属性

## 数组

- 可以给 `:style` 绑定一个包含多个样式对象的数组。这些对象会被合并和应用到同一元素上

    ```html
    <div :style="[baseStyles, overridingStyles]"></div>
    ```
