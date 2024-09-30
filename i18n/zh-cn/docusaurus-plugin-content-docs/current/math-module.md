---
id: math-module
slug: /math-module
title: math 模块
sidebar_label: math 模块
---

Python 中的 math 模块提供了各种数学函数和常量。

### 任务

设计一个程序，通过输入半径来计算圆的面积。

#### JavaScript 实现

```typescript
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);
console.log(area);
```

#### Python 实现

```python
import math

radius = 5
area = math.pi * math.pow(radius, 2)
print(area)
```

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 绝对值 | `Math.abs(x)` | `abs(x)` |
| 四舍五入到最近的整数 | `Math.round(x)` | `round(x)` |
| 向上取整（不小于x的最小整数） | `Math.ceil(x)` | `math.ceil(x)` |
| 向下取整（不大于x的最大整数） | `Math.floor(x)` | `math.floor(x)` |
| 指数运算 | `Math.pow(x, y)` | `math.pow(x, y)` |
| 平方根 | `Math.sqrt(x)` | `math.sqrt(x)` |
| 三角函数 | `Math.sin(x)`、`Math.cos(x)`、`Math.tan(x)`、`Math.asin(x)`、`Math.acos(x)`、`Math.atan(x)` | `math.sin(x)`、`math.cos(x)`、`math.tan(x)`、`math.asin(x)`、`math.acos(x)`、`math.atan(x)` |
| 将角度转换为弧度 | - | `math.radians(x)` |
| 将弧度转换为角度 | - | `math.degrees(x)` |

### 相关资源
- https://docs.python.org/3/library/math.html

