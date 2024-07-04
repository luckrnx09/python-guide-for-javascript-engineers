---
id: for-and-while-statement
slug: /for-and-while-statement
title: for 和 while 语句
sidebar_label: for 和 while 语句
---

循环用于重复执行特定的代码逻辑，在 Python 和 JavaScript 中都使用 `for` 和 `while` 实现循环逻辑。

### 任务

生成一个包含 1 到 20 的所有数字的数组，并打印每一项。
#### JavaScript 实现
```typescript
let numbers = Array.from({ length: 20 }, (_, i) => (i + 1));

for (let el of numbers) {
  console.log(el)
}

```

#### Python 实现
```python
numbers = range(1, 21)

for el in numbers:
  print(el)
```

### 代码解读

- 在 Python 中，`for` 循环的写法是 `for el in sequence:`，而在 JavaScript 中，推荐使用 `for (let el of iterable)`。
- Python 使用缩进来表示循环体，JavaScript 使用花括号（`{}`）表示循环体。

### 差异速览
| 特性              | JavaScript                    | Python                              |
|--------------------|-------------------------------|-------------------------------------|
| for 循环         | `for (el of iterable)` | `for el in sequence:`                 |
| while 循环   | `while (condition)` | `while condition:` |
| range 函数   | -                             | `range(start, stop, step)`           |
| enumerate 函数 | -                           | `enumerate(iterable, start=0)`       |
| break       | `break`      | `break`      |
| continue    | `continue`   | `continue`   |

:::tip 在循环中获取元素索引
Python 中的内置函数 `enumerate()` 用于枚举可迭代对象，它返回一个包含索引和项本身的元组。
```python
for index,el in enumerate(my_list):
    ...
```
:::

### 相关资源

- https://docs.python.org/3/tutorial/controlflow.html#for-statements
- https://docs.python.org/3/library/stdtypes.html#range
- https://docs.python.org/3/library/functions.html#enumerate

