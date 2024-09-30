# 数学函数（MathUtils）

## .clamp

+ `.clamp ( value : Float, min : Float, max : Float ) : Float` 限制数值value处于最小值min和最大值max之间

  + 参数

    + value — 需要clamp处理的值
    + min — 最小值
    + max — 最大值

## .degToRad 将度转化为弧度

+ `.degToRad ( degrees : Float ) : Float`

## .radToDeg 弧度转换为角度

+ `.radToDeg ( radians : Float ) : Float` 将弧度转换为角度

## 求模

+ `.euclideanModulo ( n : Integer, m : Integer ) : Integer`

+ 计算 m % n 的欧几里得模

  ```js
  ( ( n % m ) + m ) % m
  ```

## .generateUUID ( ) : UUID

+ 创建一个全局唯一标识符 UUID

## isPowerOfTwo

+ `.isPowerOfTwo ( n : Number ) : Boolean` 如果 n 是2的幂，返回true

## inverseLerp

+ `.inverseLerp ( x : Float, y : Float, value : Float ) : Float`

## randFloat 随机获取浮点数

+ `.randFloat ( low : Float, high : Float ) : Float` 在区间 `[low, high]` 内随机一个浮点数

## randFloatSpread

+ `.randFloatSpread ( range : Float ) : Float`
+ 在区间 `[- range / 2, range / 2]` 内随机一个浮点数

## randInt 随机获取整数

+ `.randInt ( low : Integer, high : Integer ) : Integer`
+ 在区间 `[low, high]` 内随机一个整数

## seededRandom

+ `.seededRandom ( seed : Integer ) : Float`
+ 在区间 `[0, 1]` 中生成确定性的伪随机浮点数
+ 整数种子是可选的

## smoothstep

+ `.smoothstep ( x : Float, min : Float, max : Float ) : Float`

  + 参数

    + x - 根据其在最小值和最大值之间的位置来计算的值
    + min - 任何x比最小值还小会返回0
    + max - 任何x比最大值还大会返回1

  + 返回值

    + 返回0-1之间的值，该值表示x在最小值和最大值之间移动的百分比，但是当x接近最小值和最大值时，变化程度会平滑或减慢

## smootherstep

+ `.smootherstep ( x : Float, min : Float, max : Float ) : Float`

  + 参数

    + x - 根据其在最小值和最大值之间的位置来计算的值。
    + min - 任何x比最小值还小会返回0.
    + max - 任何x比最大值还大会返回1.

  + 返回值

    + 返回一个0-1之间的值。它和smoothstep相同，但变动更平缓。variation on smoothstep 在x=0和x=1处有0阶和二阶导数





