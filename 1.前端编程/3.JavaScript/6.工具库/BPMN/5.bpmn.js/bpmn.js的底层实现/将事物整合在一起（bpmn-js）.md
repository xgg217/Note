# 将事物整合在一起（bpmn-js）

## 概述

这层是 bpmn-js 本身，这部分把 diagram-js（图形交互）和 bpmn-moddle（BPMN 语义）组合在一起，加上 BPMN 专属的渲染、规则、工具、Palette、行为逻辑等。

其主要职责与流程：

导入 / 解析阶段
用户给一个 BPMN XML 文档（字符串），bpmn-js 通过 bpmn-moddle 的 fromXML 将其解析成对象模型树（语义模型）。
然后 bpmn-js 遍历语义模型，决定哪些节点 / 关系要渲染出来（即是可视元素）。为每个需要显示的节点 / 边创建对应的 diagram-js 图形元素（shape / connection）。这时它会把语义对象（businessObject）挂到图形元素上，使两者关联。
渲染阶段
渲染器 (例如 BpmnRenderer) 知道每一种 BPMN 元素要如何画（图形、样式、图标等），并把图形元素画在画布（Canvas）上。
如果有需要，也可以定制某些 BPMN 元素的渲染（覆写默认 renderer）以显示自己风格的图形。
编辑 / 模型阶段
用户可以在编辑器（Modeler 模式）中做各种建模操作：创建节点 / 删除 / 连线 / 修改属性 / 拖拽 / 重连 / 拆分 / 合并 等等。bpmn-js 提供 Modeling 模块来响应这些操作。
在具体执行操作时，会检查 “规则”（BpmnRules）来决定某些操作是否合法（比如不能把一个结束事件当成起始事件的目标，不能把某种连接连到不允许的节点等）
若操作合法，则 Modeling 模块会更新图形层（diagram-js 的数据模型 /图形）和语义层（bpmn-moddle 对象模型）—— 也就是说，要同时保持图形结构和语义模型的一致性。这个同步更新由 bpmn-js 的更新器（BpmnUpdater 等）负责。
导出 / 保存阶段
用户完成编辑后，可以把当前的语义模型通过 bpmn-moddle 的 toXML 导出为 BPMN 2.0 合规的 XML。
在这个过程中，可以做一定校验、保证导出的 XML 满足规范。
扩展 / 插件机制
bpmn-js 提供 additionalModules 选项，在创建 Modeler / Viewer 的时候可以注入自定义模块 / 服务，从而替换 / 增强某些行为（渲染、规则、工具、Palette、contextPad 等）
例如添加自定义元素、重写某些 modeling 规则、定制 context pad（元素旁边的操作菜单）、定制 shape 渲染等。
你甚至可以基于 bpmn-js 打包一个自定义发行版（bundle）来提供给你的用户或产品。
不同变体 / 模式 bpmn-js 提供几种不同用途 / 功能集的模式 / 版本：
Viewer：只做显示 / 导入 / 查看，不提供编辑能力。
NavigatedViewer：在 Viewer 基础上加一些导航功能（平移、缩放、定位）
Modeler：完整的编辑 / 构建 BPMN 图功能，包含 Palette、context pad、Modeling、规则、更新、undo/redo 等。
