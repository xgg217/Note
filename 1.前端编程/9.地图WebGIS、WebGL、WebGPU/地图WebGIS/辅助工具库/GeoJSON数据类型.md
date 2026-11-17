# GeoJSON数据 数据类型

## 数据类型

+ 内置

  ```ts
  import type { Geometry } from 'ol/geom'
  import { Feature } from "ol"
  import type { FeatureLike } from "ol/Feature";
  ```

## 第三方

+ `@types/geojson`

  ```bash
  npm install -D @types/geojson
  ```

  ```ts
  const result = {
    type: "FeatureCollection",
    features: [],
  } as GeoJSON.FeatureCollection;
  ```

+ 基础类型标注

  ```ts
  import type {
    Feature,
    FeatureCollection,
    Point,
    LineString,
    Polygon,
    GeoJsonProperties,
  } from "geojson";

  // 一个点要素
  const pointFeature: Feature<Point> = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [116.397, 39.908], // [经度, 纬度]
    },
    properties: { name: "天安门" },
  };

  // 一个要素集合
  const collection: FeatureCollection<Point> = {
    type: "FeatureCollection",
    features: [pointFeature],
  };
  ```

+ 使用型约束 properties: 默认 properties 是 `GeoJsonProperties（{ [name: string]: any } | null）`，建议传入明确的属性类型

  ```ts
  import type { Feature, Polygon } from "geojson";

  interface ParkProps {
    name: string;
    area: number;
  }

  const park: Feature<Polygon, ParkProps> = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [0, 0],
          [1, 0],
          [1, 1],
          [0, 0],
        ],
      ],
    },
    properties: {
      name: "中央公园",
      area: 3.41,
    },
  };

  // 现在 park.properties.name 有类型提示
  console.log(park.properties?.name.toUpperCase());
  ```

+ 处理 geometry 和 properties 可能为 null

  ```ts
  import type { Feature, Geometry } from "geojson";

  function getCenter(feature: Feature): [number, number] | null {
    const geom = feature.geometry;
    if (!geom) return null; // geometry 可能为 null

    if (geom.type === "Point") {
      return geom.coordinates as [number, number];
    }
    return null;
  }

  function getName(feature: Feature): string {
    // properties 默认可能为 null
    return feature.properties?.name ?? "未命名";
  }
  ```

+ 使用类型守卫区分几何类型:`@types/geojson` 自带 Geometry 的联合类型，可用 type 字段做判别

  ```ts
  import type { Geometry, Position } from "geojson";

  function countPoints(geom: Geometry): number {
    switch (geom.type) {
      case "Point":
        return 1;
      case "MultiPoint":
      case "LineString":
        return geom.coordinates.length;
      case "Polygon":
      case "MultiLineString":
        return geom.coordinates.reduce((n, ring) => n + ring.length, 0);
      case "MultiPolygon":
        return geom.coordinates.reduce(
          (n, poly) => n + poly.reduce((m, ring) => m + ring.length, 0),
          0
        );
      case "GeometryCollection":
        return geom.geometries.reduce((n, g) => n + countPoints(g), 0);
      default:
        return 0;
    }
  }

  // Position 即 number[]，表示一个坐标
  const p: Position = [116.397, 39.908];
  ```

+ 解析外部 JSON 时的安全写法

  ```ts
  import type { FeatureCollection } from "geojson";

  function isFeatureCollection(x: unknown): x is FeatureCollection {
    return (
      typeof x === "object" &&
      x !== null &&
      (x as any).type === "FeatureCollection" &&
      Array.isArray((x as any).features)
    );
  }

  const raw: unknown = JSON.parse('{"type":"FeatureCollection","features":[]}');
  if (isFeatureCollection(raw)) {
    console.log(raw.features.length); // 类型安全
  }
  ```
