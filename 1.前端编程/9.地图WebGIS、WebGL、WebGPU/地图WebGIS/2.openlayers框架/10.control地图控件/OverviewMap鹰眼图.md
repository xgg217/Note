# OverviewMap鹰眼图

## 概述

+ 鹰眼图是地图控件的一种，是一个内嵌在主地图中的小地图控件，用于显示主地图视图的大致位置和范围，常见于地图导航和态势感知场景（如应急大屏、地理分析平台等）

  ```javascript
  import { defaults as defaultControls, OverviewMap } from 'ol/control'

  new Map({
    controls: defaultControls().extend([
      new OverviewMap({
        layers: [overviewLayer],
        collapsed: false,
        view: new View({
          extent,
        })
      })
    ])
  })
  ```



  ```css
  ::v-deep(.ol-overviewmap) {
    left: auto;
    right: 0.5em;
    .ol-overviewmap-map {
      width: 300px;
      height: 300px;
    }
  }
  ```

## 示例

+ 示例

  ```html
  <script setup lang="ts">
  import { Map, View } from "ol";
  import { XYZ, Vector } from "ol/source";
  import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
  import { Style, Fill, Stroke, Text, Circle } from "ol/style";
  import "ol/ol.css";
  import { defaults as defaultControls, OverviewMap } from "ol/control";
  import { GeoJSON } from "ol/format";
  import { transformExtent } from "ol/proj";

  const mapRef = useTemplateRef<InstanceType<typeof HTMLElement>>("mapRef");
  const extent = transformExtent([117, 26, 124, 32], "EPSG:4326", "EPSG:3857");

  const vectorSource = new Vector({
    url: "https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=330000_full",
    format: new GeoJSON({
      dataProjection: "EPSG:4326",
      featureProjection: "EPSG:3857",
    }),
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,

    style: (feature) => {
      const name = feature.get("name");

      return new Style({
        stroke: new Stroke({
          color: "#FF0000",
          width: 2,
        }),
        fill: new Fill({
          color: "#FFFF0080",
        }),
        text: new Text({
          font: "16px sans-serif",
          fill: new Fill({
            color: "black",
          }),
          text: name,
        }),

        image: new Circle({
          radius: 7,
          fill: new Fill({ color: "#FFFF00" }),
          stroke: new Stroke({ color: "#FF0000", width: 2 }),
        }),
      });
    },
  });

  onMounted(() => {
    const map = new Map({
      target: mapRef.value!,
      layers: [
        new TileLayer({
          source: new XYZ({
            url:
              "http://t0.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" +
              import.meta.env.VITE_API_TIANDITU_MAP,
          }),
        }),
        new TileLayer({
          source: new XYZ({
            url:
              "http://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=" +
              import.meta.env.VITE_API_TIANDITU_MAP,
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        center: [0, 0],
        // center: coordinate,
        zoom: 4,
        extent,
      }),
      controls: defaultControls().extend([
        new OverviewMap({
          layers: [vectorLayer], // 设置图层
          collapsed: false, // 设置默认打开
          view: new View({
            extent,
          }),
        }),
      ]),
    });

    vectorSource.on("change", () => {
      if (vectorSource.getState() === "ready") {
        const extent = vectorSource.getExtent();
        extent && map.getView().fit(extent);
      }
    });
  });
  </script>

  <template>
    <div class="warpp">
      <div ref="mapRef" class="map"></div>
    </div>
  </template>

  <style scoped>
  .warpp {
    position: relative;
    top: 0;
    left: 0;
  }

  .map {
    width: 100%;
    height: 100vh;
  }

  ::v-deep(.ol-overviewmap) {
    left: auto;
    right: 0.5em;
    .ol-overviewmap-map {
      width: 300px;
      height: 300px;
    }
  }
  </style>

  ```
