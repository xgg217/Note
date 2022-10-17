# v-if

## v-if

- `v-if` 指令被用于按条件渲染一个区块。这个区块只会在指令的表达式为真时才被渲染

    ```html
    <h1 v-if="awesome">Vue is awesome!</h1>
    ```

## v-else

- 也可以使用 `v-else` 为 `v-if` 添加一个“else 区块”

    ```html
    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    ```

- 一个 `v-else` 元素必须跟在一个 `v-if` 或者 `v-else-if` 元素后面，否则将不会识别它

## v-else-if

- `v-else-if` 提供的是相应于 `v-if` 的“else if 区块”。它可以连续多次重复使用

    ```html
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    ```

- 和 `v-else` 相似，一个使用 `v-else-if` 的元素必须紧跟在一个 `v-if` 或一个 `v-else-if` 元素后面

## \<template> 上的 v-if

- 因为 `v-if` 是一个指令，他必须依附于某个元素。但如果我们想要切换不止一个元素呢？在这种情况下我们可以在一个 `<template>` 元素上使用 `v-if`，这只是一个不可见的包装器元素，最后渲染的结果并不会包含这个 `<template>` 元素

    ```html
    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
    ```

- `v-else` 和 `v-else-if` 也可以在 `<template>` 上使用
