---
id: typing-annotation
slug: /typing-annotation
title: 类型注解
sidebar_label: 类型注解
---

编写 Python 代码时，通常会遇到需要明确变量类型的情况。Python 3.5 引入了类型注解，并在后续版本中得到了增强和改进。类型注解不会影响运行时结果，与 TypeScript 十分相似。

### 使用类型注解
类型注解在 Python 中不是必须的，类型注解是一种在 Python 中指定变量类型的方法，它可以提供更好的代码可读性、可维护性。

#### 变量
```python
age: int = 25
name: str = "John"
```

#### 函数参数和返回值
```python
def add(x: int, y: int) -> int:
    return x + y
```
#### 可选参数和默认值
```python
from typing import Union
def greet(name: str, age: Union[int, None] = None) -> str:
    if age is None:
        return f"Hello, {name}!"
    else:
        return f"Hello, {name}! You are {age} years old."
```
#### 类
```python
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def greet(self) -> str:
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```
#### 类型别名
```python
from typing import List, Tuple

Coordinates = Tuple[float, float]
PointList = List[Coordinates]

def get_distance(point1: Coordinates, point2: Coordinates) -> float:
    x1, y1 = point1
    x2, y2 = point2
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

def process_points(points: PointList) -> List[float]:
    distances = []
    for i in range(len(points) - 1):
        distance = get_distance(points[i], points[i+1])
        distances.append(distance)
    return distances
```

### 编译时类型检查
在 Python 中的 `mypy` 一个类似于 TypeScript 的 `tsc`命令行工具，使用它可以对代码的类型进行检查。
```shell
pip install mypy
mypy my_script.py
```

### 相关资源

- https://docs.python.org/3/library/typing.html


