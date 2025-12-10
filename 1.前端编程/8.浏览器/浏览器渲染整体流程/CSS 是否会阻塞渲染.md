# CSS 是否会阻塞渲染

## 概述

+ JavaScript 会阻止解析，是因为它可以修改文档

+ 那么 CSS 不能修改文档，所以它似乎没有理由阻止解析，对吧？

+ 但是，如果脚本中需要获取一些尚未解析的样式信息怎么办？在 JavaScript 中完全可以访问到 DOM 节点的某些样式，或者使用 JavaScript 直接访问 CSSOM

  ![alt text](images/JS访问CSSOM.png)

+ 因此，CSS 可能会根据文档中外部样式表和脚本的顺序阻止解析。如果在文档中的脚本之前放置了外部样式表，则 DOM 和 CSSOM 对象的构建可能会相互干扰

+ 当解析器到达一个脚本标签时，在 JavaScript 执行完成之前无法继续构建 DOM，然而如果这一段 JavaScript 中涉及到访问和使用 CSSOM，那么必须等待 CSS 文件被下载、解析并且 CSSOM 可用
+ 如果 CSSOM 处于未可用状态，则会阻塞 JavaScript 的执行

  ![alt text](images/css阻塞JS执行.png)
  + 上图中 JavaScript 的执行被 CSS 构建 CSSOM 的过程阻塞了

+ 另外，虽然 CSS 不会阻塞 DOM 的构建，但是也会阻塞渲染

+ 还记得我们前面有讲过要 DOM 树和 CSSOM 树都准备好，才会生成渲染树（ Render Tree ）么，浏览器在拥有 DOM 和 CSSOM 之前是不会显示任何内容

+ 这是因为没有 CSS 的页面通常无法使用。如果浏览器向你展示了一个没有 CSS 的凌乱页面，那么片刻之后就会进入一个有样式的页面，不断变化的内容和突然的视觉变化会给用户带来混乱的用户体验

## FOUC

+ 这种糟糕的用户体验有一个名字，叫做“无样式内容闪现”，Flash of Unstyled Content，或者简称 FOUC

  ![alt text](images/FOUC.gif)

+ 为了解决这些问题，所以我们需要尽快的交付 CSS

+ 这也解释了为什么“顶部样式，底部脚本”被称之为“最佳实践”

+ 随着现代浏览器的普及，浏览器为我们提供了更多强大的武器（资源提示关键词），合理利用，方可大幅提高页面加载速度
