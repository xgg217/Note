# 自定义renderer

## 概述

+ 完全自定义Renderer的意思就是将原本使用new BpmnModeler创建画布的方式改为使用new CustomModeler来创建.其实和之前的palette一样处理

同样是在customModeler/custom的文件夹下创建一个customRender.js文件, 然后写入以下代码:

  ```js
  import inherits from "inherits-browser";

  import BaseRenderer from "diagram-js/lib/draw/BaseRenderer";

  import { is } from "bpmn-js/lib/util/ModelUtil";

  import {
    append as svgAppend,
    attr as svgAttr,
    create as svgCreate,
    remove as svgRemove,
  } from "tiny-svg";

  export default function CustomRenderer(eventBus, bpmnRenderer) {
    BaseRenderer.call(this, eventBus, 2000);
    this.bpmnRenderer = bpmnRenderer;

    this.drawCustomElements = function (parentNode, element) {
      const shape = this.bpmnRenderer.drawShape(parentNode, element);

      if (is(element, "bpmn:Task")) {
        // 当元素类型是 bpmn:Task 时
        const rect = drawRect(parentNode, 100, 80, 2, "#52B415"); // 创建一个带绿色边框的矩形

        prependTo(rect, parentNode);

        svgRemove(shape);

        return shape;
      }
      return shape;
    };
  }

  inherits(CustomRenderer, BaseRenderer);

  CustomRenderer.$inject = ["eventBus", "bpmnRenderer"];

  CustomRenderer.prototype.canRender = function (element) {
    // ignore labels
    return !element.labelTarget;
  };

  CustomRenderer.prototype.drawShape = function (p, element) {
    return this.drawCustomElements(p, element);
  };

  CustomRenderer.prototype.getShapePath = function (shape) {
    console.log(shape);
  };

  // copied from bpmn-js/lib/draw/BpmnRenderer.js
  function drawRect(parentNode, width, height, borderRadius, strokeColor) {
    const rect = svgCreate("rect");

    svgAttr(rect, {
      width: width,
      height: height,
      rx: borderRadius,
      ry: borderRadius,
      stroke: strokeColor || "#000",
      strokeWidth: 2,
      fill: "#fff",
    });

    svgAppend(parentNode, rect);

    return rect;
  }

  // copied from /diagram-js/lib/core/GraphicsFactory.js
  function prependTo(newNode, parentNode, siblingNode) {
    parentNode.insertBefore(newNode, siblingNode || parentNode.firstChild);
  }

  ```

+ 同样，在index.js中引入：

  ```js
  import CustomPalette from "./CustomPalette";
  import CustomRenderer from "./CustomRenderer";
  export default {
    __init__: ["paletteProvider", "customRenderer"],
    paletteProvider: ["type", CustomPalette],
    customRenderer: ['type', CustomRenderer],
  };
  ```

+ 在vue界面中使用：

  ```js
  import CustomModeler from './customModeler/index.js'

  ......
  modeler = new CustomModeler({
    container: canvasRef.value
  });
  ```
