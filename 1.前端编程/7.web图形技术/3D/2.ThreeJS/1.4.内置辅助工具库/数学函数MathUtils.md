# 数学函数（MathUtils）

## 随机数

+ `random()`: 生成一个介于 0 到 1 之间的随机数

  ```js
  const randomValue = THREE.MathUtils.random(); // 生成 0 到 1 之间的随机数
  ```

+ `randomInteger(min, max)`: 生成一个介于 min 和 max 之间的随机整数

  ```js
  const randomInt = THREE.MathUtils.randomInteger(1, 10); // 生成 1 到 10 之间的随机整数
  ```

+ `.randInt ( low : Integer, high : Integer ) : Integer`

  + 在区间 `[low, high]` 内随机一个整数

+ `.seededRandom ( seed : Integer ) : Float`

  + 在区间 `[0, 1]` 中生成确定性的伪随机浮点数
  + 整数种子是可选的

+ `.randFloat ( low : Float, high : Float ) : Float` 在区间 `[low, high]` 内随机一个浮点数

+ `.randFloatSpread ( range : Float ) : Float`

  + 在区间 `[- range / 2, range / 2]` 内随机一个浮点数

## 插值

+ `.clamp ( value : Float, min : Float, max : Float ) : Float` 限制数值value处于最小值min和最大值max之间

  + 参数

    + value — 需要clamp处理的值
    + min — 最小值
    + max — 最大值

+ lerp(x, y, t): 对两个值 x 和 y 进行线性插值，t 是插值系数，范围在 `[0, 1]` 之间

  ```js
  const interpolatedValue = THREE.MathUtils.lerp(10, 20, 0.5); // 插值结果为 15
  ```

+ mapLinear(x, a1, a2, b1, b2): 将值 x 从 `[a1, a2]` 区间映射到 `[b1, b2]` 区间

+ `.smoothstep ( x : Float, min : Float, max : Float ) : Float`

  + 参数

    + x - 根据其在最小值和最大值之间的位置来计算的值
    + min - 任何x比最小值还小会返回0
    + max - 任何x比最大值还大会返回1

  + 返回值

    + 返回0-1之间的值，该值表示x在最小值和最大值之间移动的百分比，但是当x接近最小值和最大值时，变化程度会平滑或减慢

+ `.smootherstep ( x : Float, min : Float, max : Float ) : Float`

  + 参数

    + x - 根据其在最小值和最大值之间的位置来计算的值
    + min - 任何x比最小值还小会返回0.
    + max - 任何x比最大值还大会返回1.

  + 返回值

    + 返回一个0-1之间的值。它和smoothstep相同，但变动更平缓。variation on smoothstep 在x=0和x=1处有0阶和二阶导数

## 夹角计算

+ `.degToRad ( degrees : Float ) : Float` 将度转化为弧度

+ `.radToDeg ( radians : Float ) : Float` 将弧度转换为角度

  ```js
  const degrees = 90;
  const radians = THREE.MathUtils.degToRad(degrees); // 转换为弧度值
  const convertedDegrees = THREE.MathUtils.radToDeg(radians); // 转换回角度值
  ```

## 数学运算

+ `.euclideanModulo ( n : Integer, m : Integer ) : Integer` 求模

  ```js
  // 计算 m % n 的欧几里得模
  ( ( n % m ) + m ) % m
  ```

+ `.isPowerOfTwo ( n : Number ) : Boolean` 如果 n 是2的幂，返回true

+ sign(x): 返回 x 的符号

+ floorPowerOfTwo(value): 返回不大于 value 的最大2的幂
+ isPowerOfTwo(value): 检查 value 是否为2的幂
+ nextPowerOfTwo(value): 返回大于等于 value 的最小2的幂

## 其它

+ `.generateUUID ( ) : UUID` 创建一个全局唯一标识符 UUID

+ `.inverseLerp ( x : Float, y : Float, value : Float ) : Float` 计算值 value 在 `[x, y]` 区间中的归一化位置







