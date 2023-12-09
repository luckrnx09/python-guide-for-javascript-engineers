---
id: custom-exception-classes
slug: /custom-exception-classes
title: 自定义异常
sidebar_label: 自定义异常
---

在 Python 中，可以自定义异常来处理特定的错误场景，这样可以为程序创建更有意义和描述性的错误消息。

### 任务

构建一个计算各种形状的面积的程序。使用自定义异常来处理不同类型的形状计算错误。

#### JavaScript 实现
```javascript
class InvalidShapeException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidShapeException";
  }
}

class NegativeDimensionException extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeDimensionException";
  }
}

function calculateRectangleArea(length, width) {
  if (typeof length !== "number" || typeof width !== "number") {
    throw new InvalidShapeException("无效的尺寸。长度和宽度必须是数字。");
  }
  if (length <= 0 || width <= 0) {
    throw new NegativeDimensionException("无效的尺寸。长度和宽度必须是正数。");
  }
  return length * width;
}

console.log(calculateRectangleArea(5, 4)); // 输出: 20
console.log(calculateRectangleArea("5", 4)); // 抛出InvalidShapeException
console.log(calculateRectangleArea(-5, 4)); // 抛出NegativeDimensionException
```

#### Python 实现
```python
# 定义自定义异常
class InvalidShapeException(Exception):
    def __init__(self, message):
        super().__init__(message)

class NegativeDimensionException(Exception):
    def __init__(self, message):
        super().__init__(message)

def calculate_rectangle_area(length, width):
    if not isinstance(length, (int, float)) or not isinstance(width, (int, float)):
        raise InvalidShapeException("无效的尺寸。长度和宽度必须是数字。")
    if length <= 0 or width <= 0:
        raise NegativeDimensionException("无效的尺寸。长度和宽度必须是正数。")
    return length * width

print(calculate_rectangle_area(5, 4)) # 输出: 20
print(calculate_rectangle_area("5", 4)) # 引发InvalidShapeException
print(calculate_rectangle_area(-5, 4)) # 引发NegativeDimensionException
```

### 代码解读

- Python 异常基类是 `Exception`，而 JavaScript 异常基类是 `Error`，它们都使用 `class` 继承基类实现自定义异常。
- Python 使用 `isinstance()` 函数来检查变量的类型，而 JavaScript 使用 `typeof` 和 `instance of`。

### 通用 API

| 特性                      | JavaScript                       | Python                            |
|---------------------------|----------------------------------|-----------------------------------|
| 创建自定义异常            | `class CustomException extends Error {}`    | `class CustomException(Exception):`   |
| 引发自定义异常            | `throw new CustomException(message)`        | `raise CustomException(message)`          |

### 相关资源

- https://docs.python.org/3/tutorial/errors.html

