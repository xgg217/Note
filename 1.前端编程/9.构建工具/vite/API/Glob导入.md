# Glob 导入

## 概述

+ Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块：

  ```js
  const modules = import.meta.glob('./dir/*.js')
  ```

  ```js
  // 以上将会被转译为下面的样子：

  // vite 生成的代码
  const modules = {
    './dir/foo.js': () => import('./dir/foo.js'),
    './dir/bar.js': () => import('./dir/bar.js'),
  }
  ```

+ 你可以遍历 modules 对象的 key 值来访问相应的模块

  ```js
  for (const path in modules) {
    modules[path]().then((mod) => {
      console.log(path, mod)
    })
  }
  ```

## 直接引入所有的模块

+ 匹配到的文件默认是懒加载的，通过动态导入实现，并会在构建时分离为独立的 chunk。如果你倾向于直接引入所有的模块（例如依赖于这些模块中的副作用首先被应用），你可以传入 { eager: true } 作为第二个参数

  ```js
  const modules = import.meta.glob('./dir/*.js', { eager: true });

  // 以上会被转译为下面的样子：
  // vite 生成的代码
  import * as __glob__0_0 from './dir/foo.js'
  import * as __glob__0_1 from './dir/bar.js'
  const modules = {
    './dir/foo.js': __glob__0_0,
    './dir/bar.js': __glob__0_1,
  }
  ```

## 多个匹配模式

+ 第一个参数可以是一个 glob 数组，例如：

  ```js
  const modules = import.meta.glob(['./dir/*.js', './another/*.js'])
  ```

## 反面匹配模式

+ 同样也支持反面 glob 匹配模式（以 ! 作为前缀）。若要忽略结果中的一些文件，你可以添加“排除匹配模式”作为第一个参数

  ```js
  const modules = import.meta.glob(['./dir/*.js', '!**/bar.js'])

  // vite 生成的代码
  const modules = {
    './dir/foo.js': () => import('./dir/foo.js'),
  }
  ```

## 具名导入

+ 也可能你只想要导入模块中的部分内容，那么可以利用 import 选项

  ```js
  const modules = import.meta.glob('./dir/*.js', { import: 'setup' });

  // vite 生成的代码
  const modules = {
    './dir/foo.js': () => import('./dir/foo.js').then((m) => m.setup),
    './dir/bar.js': () => import('./dir/bar.js').then((m) => m.setup),
  }
  ```

+ 当与 eager 一同存在时，甚至可以对这些模块进行 tree-shaking

  ```js
  const modules = import.meta.glob('./dir/*.js', {
    import: 'setup',
    eager: true,
  });

  // vite 生成的代码
  import { setup as __glob__0_0 } from './dir/foo.js'
  import { setup as __glob__0_1 } from './dir/bar.js'
  const modules = {
    './dir/foo.js': __glob__0_0,
    './dir/bar.js': __glob__0_1,
  }
  ```

+ 设置 import 为 default 可以加载默认导出

  ```js
  const modules = import.meta.glob('./dir/*.js', {
    import: 'default',
    eager: true,
  })

  // vite 生成的代码
  import __glob__0_0 from './dir/foo.js'
  import __glob__0_1 from './dir/bar.js'
  const modules = {
    './dir/foo.js': __glob__0_0,
    './dir/bar.js': __glob__0_1,
  }
  ```

## 自定义查询

+ 你也可以使用 query 选项来提供对导入的自定义查询，比如，可以将资源 作为字符串引入 或者 作为 URL 引入 ：

  ```js
  const moduleStrings = import.meta.glob('./dir/*.svg', {
    query: '?raw',
    import: 'default',
  })
  const moduleUrls = import.meta.glob('./dir/*.svg', {
    query: '?url',
    import: 'default',
  });

  // vite 生成的代码
  const moduleStrings = {
    './dir/foo.svg': () => import('./dir/foo.js?raw').then((m) => m['default']),
    './dir/bar.svg': () => import('./dir/bar.js?raw').then((m) => m['default']),
  }
  const moduleUrls = {
    './dir/foo.svg': () => import('./dir/foo.js?url').then((m) => m['default']),
    './dir/bar.svg': () => import('./dir/bar.js?url').then((m) => m['default']),
  }
  ```

+ 你还可以为其他插件提供定制化的查询参数

  ```js
  const modules = import.meta.glob('./dir/*.js', {
    query: { foo: 'bar', bar: true },
  });
  ```


## Glob 导入注意事项

+ 这只是一个 Vite 独有的功能而不是一个 Web 或 ES 标准
+ 该 Glob 模式会被当成导入标识符：必须是相对路径（以 `./` 开头）或绝对路径（以 `/` 开头，相对于项目根目录解析）或一个别名路径（请看 `resolve.alias` 选项)
+ Glob 匹配是使用 `tinyglobby` 来实现的 —— 阅读它的文档来查阅 支持的 Glob 模式
+ 你还需注意，所有 `import.meta.glob` 的参数都必须以字面量传入。你不可以在其中使用变量或表达式

