# BPMN 元模型（bpmn-moddle）

## 概述

+ bpmn-moddle 是专门用于处理 BPMN 2.0 语义 / 元模型 / XML 的库
+ 它与 diagram-js 是分离的、语义角度独立的那部分

## 职责 /功能包括：

+ 元模型定义 (Meta-model) bpmn-moddle 基于 moddle（一个定义元模型的通用库）来定义 BPMN 的类型、属性、关系等。
+ XML ↔ 对象模型 映射
fromXML(xmlString)：把 BPMN 2.0 的 XML 文档解析为 JavaScript 对象（按照元模型结构组织）
toXML(objectModel)：把 JavaScript 对象模型（经过编辑后的）序列化回合规的 BPMN 2.0 XML。
验证 / 结构约束 因为 bpmn-moddle 知道 BPMN 2.0 的规范（哪些元素合法、哪些属性可有可无、关系约束等），它可以在导入 / 编辑 / 导出时进行基础验证。比如，不允许把某些类型连线到不合适的节点。
业务对象 (businessObject) 在 bpmn-js 渲染 / 编辑时，每个图形元素（shape / connection）背后都会关联一个 businessObject，这个对象就是 bpmn-moddle 的那套对象模型（类型 / 属性 / 关系）。通过它就可以访问 BPMN 语义层面的信息（比如这个节点是 “bpmn:UserTask” / “bpmn:StartEvent” / 这个 sequenceFlow 的条件表达式等）。
总结：bpmn-moddle 是负责 “理解 BPMN” 的那部分 —— 它不关心图形如何画、如何交互，只负责语义模型和与 XML 的转换。

