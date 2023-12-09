---
id: type-conversion
slug: /type-conversion
title: 类型转换
sidebar_label: 类型转换
---

类型转换是编程中常见的需求，Python 和 JavaScript 都提供了专门用于类型转换为方法。

### 任务

假设有一块硬盘的容量为 8192MB（字符串），请将这块硬盘的容量换算为 TB 单位，将换算结果保存到一个整数类型变量中。

#### JavaScript 实现
```javascript
let gb = '8192MB';
let tb = parseInt(gb) / 1024
let intTb = parseInt(tb)
console.log(`该硬盘容量为: ${intTb}TB`)
```
#### Python 实现
```python
gb = '8192MB'
int_tb = int(gb[:-2]) // 1024
print(f"该硬盘容量为: {int_tb}TB")
```

### 代码解读
 - Python 使用与类型同名的内置函数（如：`str(some_value)`, `bool(some_value)`等）进行数据转换，JavaScript 使用以 `parse` 为前缀的内置函数。
 - 在 Python 中，'8192MB' 这样的字符串无法直接转换为整数或浮点数，因为它值与这两种类型不兼容，而 JavaScript 可以通过 `parseInt` 转换为整数。
 - Python 中可以使用字符串切片语法（`[start:end]`）获取字符串的子串。

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 转换为整数 | `parseInt(myVal)` 或 `Number(myVal)` | `int(my_val)` |
| 转换为浮点数 | `parseFloat(myVal)` 或 `Number(myVal)` | `float(my_val)` |
| 转换为字符串 | `myVal.toString()` 或 `String(myVal)` | `str(my_val)` |
| 转换为布尔值 | `Boolean(myVal)` | `bool(val)` |
| 转换为数组 | - | `list(my_val)` |
| 转换为对象 | - | `dict(my_val)` |


### 相关资源
- https://docs.python.org/3/library/functions.html


