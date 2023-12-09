---
id: typing-annotation
slug: /typing-annotation
title: Type Annotations
sidebar_label: Type Annotations
---

When writing Python code, there are often cases where variable types need to be specified. Type annotations were introduced in Python 3.5 and have been enhanced and improved in subsequent versions. Type annotations do not affect runtime results and are very similar to TypeScript.

### Using Type Annotations
Type annotations are not required in Python. They are a way to specify variable types in Python, which can improve code readability and maintainability.

#### Variables
```python
age: int = 25
name: str = "John"
```

#### Function Parameters and Return Values
```python
def add(x: int, y: int) -> int:
    return x + y
```

#### Optional Parameters and Default Values
```python
from typing import Union
def greet(name: str, age: Union[int, None] = None) -> str:
    if age is None:
        return f"Hello, {name}!"
    else:
        return f"Hello, {name}! You are {age} years old."
```

#### Classes
```python
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def greet(self) -> str:
        return f"Hello, my name is {self.name} and I am {self.age} years old."
```

#### Type Aliases
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

### Compile-Time Type Checking
In Python, `mypy` is a command-line tool similar to TypeScript's `tsc` that can be used to check the types of code.
```shell
pip install mypy
mypy my_script.py
```

### Resources

- https://docs.python.org/3/library/typing.html
