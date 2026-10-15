# DragAndDrop 交互

## 概述

+ 允许用户 **拖拽文件**（如 `.geojson`, `.kml`, `.gpx`, `.igc`）到地图上并自动加载为矢量图层

  + 文件拖拽导入：用户从桌面拖拽文件到地图区域，交互自动读取并解析

  + 多格式支持：内置支持 GeoJSON、KML、GPX、IGC、TopoJSON 等常见地理数据格式

  + 自动投影转换：解析后的数据会自动转换到地图当前视图的投影

## API

+ API

  ```js
  import { DragAndDrop } from 'ol/interaction';

  const dragAndDrop = new DragAndDrop({
    formatConstructors: [GeoJSON, KML], // 可选，指定支持的格式
    source: vectorSource,                // 可选，指定目标矢量源
    projection: 'EPSG:4326'              // 可选，指定源数据的投影
  });

  map.addInteraction(dragAndDrop);
  ```

+ 参数

  + formatConstructors：一个格式构造函数数组

    + 如果不指定，默认支持所有内置格式（GeoJSON、KML、GPX、IGC、TopoJSON 等）
    + 指定后只解析这些格式

  + source：目标矢量源

    + 如果指定，解析后的要素会直接添加到此源；如果不指定，交互会为每个拖入的文件创建一个新的 VectorLayer 并添加到地图上

  + projection：源数据的投影

    + 默认会根据文件格式自动推断，必要时可手动指定

  ```javascript
  import { DragAndDrop } from 'ol/interaction'

  map.addInteraction(
    new DragAndDrop({
      source: vectorSource,
      formatConstructors: [GeoJSON],
    })
  )
  vectorSource.on('addfeature', () => {
    const newExtent = vectorSource.getExtent()
    map.getView().fit(newExtent)
  })
  ```

## 事件

+ DragAndDrop 交互会在拖拽过程中触发以下事件：

  + addfeatures：文件被成功解析，要素即将被添加到地图时触发。事件对象包含 features（解析出的要素数组）和 file（原始文件对象）。可以通过监听此事件来拦截、修改或取消要素的添加。

    ```js
    dragAndDrop.on('addfeatures', (event) => {
      console.log('拖入的文件:', event.file.name);
      console.log('解析出的要素数量:', event.features.length);

      // 可以在这里修改要素属性或样式
      event.features.forEach((feature) => {
        feature.set('imported', true);
      });
    });
    ```

## 示例

+ 示例1 拖拽文件自动创建图层

  ```js
  import DragAndDrop from 'ol/interaction/DragAndDrop.js';

  const dragAndDrop = new DragAndDrop();
  map.addInteraction(dragAndDrop);

  // 添加后，用户拖入 .geojson、.kml 等文件，地图会自动创建一个新的矢量图层来显示这些数据
  ```

+ 示例2 指定目标源：拖拽文件添加到已有图层

  ```js
  import DragAndDrop from 'ol/interaction/DragAndDrop.js';
  import VectorSource from 'ol/source/Vector.js';
  import GeoJSON from 'ol/format/GeoJSON.js';

  const vectorSource = new VectorSource();
  // ... 创建并添加包含此源的矢量图层 ...

  const dragAndDrop = new DragAndDrop({
    formatConstructors: [GeoJSON],
    source: vectorSource
  });
  map.addInteraction(dragAndDrop);

  // 此时拖入的 GeoJSON 文件会合并到同一个矢量源中，而不是新建图层
  ```

+ 示例3 完整示例

  ```html
  <script setup>
  import { Map, View } from 'ol'
  import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'
  import { XYZ, Vector } from 'ol/source'
  import { GeoJSON } from 'ol/format'
  import { Style, Fill, Stroke } from 'ol/style'
  import { DragAndDrop } from 'ol/interaction'
  import hangzhou from './assets/hangzhou.json'

  const TDT_TOKEN = '55c0066c8dd3630394c756dfcd97add5'

  const vectorSource = new Vector({
    features: new GeoJSON().readFeatures(hangzhou, {
      dataProjection: 'EPSG:4326', // 数据源是经纬度
      featureProjection: 'EPSG:3857', // 地图是墨卡托
    }),
  })

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: new Style({
      stroke: new Stroke({
        color: '#FF0000',
        width: 4,
      }),
      fill: new Fill({
        color: '#FFFF0080',
      }),
    })
  })

  onMounted(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url:
              'http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=' +
              TDT_TOKEN,
          }),
        }),
        new TileLayer({
          source: new XYZ({
            url:
              'http://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=' +
              TDT_TOKEN,
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        zoom: 4,
        center: [0, 0],
      }),
    })

    const extent = vectorSource.getExtent()
    map.getView().fit(extent)

    map.addInteraction(
      new DragAndDrop({
        source: vectorSource,
        formatConstructors: [GeoJSON]
      })
    )

    vectorSource.on('addfeature', () => {
      // 获取范围
      const newExtent = vectorSource.getExtent()
      map.getView().fit(newExtent)
    })

  })
  </script>

  <template>
    <div id="map"></div>
  </template>

  <style scoped>
  #map {
    position: absolute;
    inset: 0;
  }
  </style>
  ```
