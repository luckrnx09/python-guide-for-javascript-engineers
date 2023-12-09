---
id: anonymous-functions
slug: /anonymous-functions
title: 匿名函数
sidebar_label: 匿名函数
---

当需要一个可以在不定义单独函数的情况下内联执行的小段代码时，可以使用匿名函数，在 Python 中，匿名函数称为 “lambda 表达式” 或 “lambda 函数”。

### 任务

使用匿名函数，将数字列表的每一项映射为它的平方并打印新列表。

#### JavaScript 实现

```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers);
```

#### Python 实现

```python
numbers = [1, 2, 3, 4, 5]

squared_numbers = list(map(lambda number: number ** 2, numbers))
print(squared_numbers)
```

### 代码解读
- Python 使用 `lambda` 关键字创建匿名函数，JavaScript 使用 `function` 或 `=>` 创建匿名函数。
- Python 的 `lambda` 函数不能包含函数体，表达式的值将作为返回值自动返回。而 JavaScript 中的匿名函数可以有函数体和 return 语句。 

### 差异速览

| 特性    | JavaScript                       | Python       |
|---------|---------------------------------|--------------|
| 创建匿名函数    | `(params) => expression`      | `lambda params: expression` |

:::tip
当 Python 的 lambda 函数有多个参数时，使用 `,` 隔开每一个参数。
:::

### 相关资源

- https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions

