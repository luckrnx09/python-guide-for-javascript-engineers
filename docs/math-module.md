---
id: math-module
slug: /math-module
title: Math Module
sidebar_label: Math Module
---

The math module in Python provides various mathematical functions and constants.

### Task

Design a program to calculate the area of a circle based on the input radius.

#### JavaScript implementation
```
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);
console.log(area);
```

#### Python implementation
```
import math

radius = 5
area = math.pi * math.pow(radius, 2)
print(area)
```

### Difference Quick View

| Feature | JavaScript | Python |
|---------|------------|--------|
| Absolute Value | `Math.abs(x)` | `abs(x)` |
| Round to Nearest Integer | `Math.round(x)` | `round(x)` |
| Ceiling (Smallest Integer Not Less Than x) | `Math.ceil(x)` | `math.ceil(x)` |
| Floor (Largest Integer Not Greater Than x) | `Math.floor(x)` | `math.floor(x)` |
| Exponential Operation | `Math.pow(x, y)` | `pow(x, y)` |
| Square Root | `Math.sqrt(x)` | `math.sqrt(x)` |
| Trigonometric Functions | `Math.sin(x)`、`Math.cos(x)`、`Math.tan(x)`、`Math.asin(x)`、`Math.acos(x)`、`Math.atan(x)` | `math.sin(x)`、`math.cos(x)`、`math.tan(x)`、`math.asin(x)`、`math.acos(x)`、`math.atan(x)` |
| Convert Degrees to Radians | - | `math.radians(x)` |
| Convert Radians to Degrees | - | `math.degrees(x)` |

### Resources
- https://docs.python.org/3/library/math.html
