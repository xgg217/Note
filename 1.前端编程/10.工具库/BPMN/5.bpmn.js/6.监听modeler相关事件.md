# 监听modeler相关事件

## 概述

+ 很多时候你期望的是在用户在进行不同操作的时候能够监听到他操作的是什么, 从而做想要做的事情.

+ 是进行了shape的新增还是进行了线的新增.

+ 比如如下的一些监听事件:

  + shape.added 新增一个shape之后触发;
  + shape.move.end 移动完一个shape之后触发;
  + shape.removed 删除一个shape之后触发

  ```js
  import type ElementRegistry from "diagram-js/lib/core/ElementRegistry";

  function modelerListener() {
    // 监听 modeler 的事件
    if (!modeler) return;
    const m = modeler; // 类型缩窄，确保下面用到的m不是null

    // shape 的新增、移动、删除
    const events = ["shape.added", "shape.move.end", "shape.removed"];
    events.forEach(function (event) {
      m.on(event, (e: any) => {
        var elementRegistry = m.get<ElementRegistry>("elementRegistry");
        var shape = e.element ? elementRegistry.get(e.element.id) : e.shape;
        console.log(shape);
        if (event === "shape.added") {
          console.log("新增了shape");
        } else if (event === "shape.move.end") {
          console.log("移动了shape");
        } else if (event === "shape.removed") {
          console.log("删除了shape");
        }
      });
    });
  }
  ```

+ 创建好bpmnModeler之后，就可以直接调用这个方法触发监听

  ```js
  async function loadXml(xml: string) {
    if (!modeler) return;
    try {
      await modeler.importXML(xml);
      modelerListener();
    } catch (e) {
      console.error("importXML error:", e);
    }
  }
  ```


