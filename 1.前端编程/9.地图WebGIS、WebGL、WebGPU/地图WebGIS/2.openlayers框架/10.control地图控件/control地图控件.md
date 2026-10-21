# control地图控件

## 概述

+ OpenLayers 中的 `ol/control` 模块用于添加各种地图控件，如：缩放按钮、比例尺、全屏按钮等
+ 控件可以帮助用户更好地交互和操作地图

| **控件类**      | **功能说明**               |
| --------------- | -------------------------- |
| `Zoom`          | 缩放按钮（+ / -）          |
| `Rotate`        | 重置旋转                   |
| `Attribution`   | 版权信息                   |
| `OverviewMap`   | 鹰眼图                     |
| `ScaleLine`     | 比例尺                     |
| `FullScreen`    | 全屏切换                   |
| `ZoomSlider`    | 缩放滑块                   |
| `ZoomToExtent`  | 缩放到预设范围             |
| `MousePosition` | 显示鼠标当前坐标           |
| `Control`       | 控件基类（用于自定义控件） |

  ```js
  import { defaults as defaultControls, ScaleLine, FullScreen, ZoomSlider } from 'ol/control'

  new Map({
    controls: defaultControls().extend([
      new ScaleLine(),
      new FullScreen({
        className: 'custom-fullscreen',
      }),
      new ZoomSlider()
    ])
  })
  ```
