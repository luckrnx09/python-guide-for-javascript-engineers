---
id: definition-and-assignment-of-variables
slug: /definition-and-assignment-of-variables
title: 变量的定义和赋值
sidebar_label: 变量的定义和赋值
---

Python 与 JavaScript 一样，是动态类型语言，在赋值之前不需要声明变量的类型。

### 任务

定义三个变量：`name`（字符串）、`age`（整数）和`is_student`（布尔值），为这些变量分配适当的值并将它们打印到控制台。

#### JavaScript 实现

```javascript
let name = "John";
let age = 25;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);
```

#### Python 实现

```python
name = "John"
age = 25
is_student = True

print(name)
print(age)
print(is_student)
```

### 代码解读
- Python 和 JavaScript 都使用单等号 `=` 进行赋值。
- Python 不需要在语句的末尾使用分号，而 JavaScript 需要。

:::tip JavaScript 代码到底加不加分号？
分号对 JavaScript 来说是必要的，而对开发者来说却并不是必须的，因为解释器会自动补全分号
:::

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 声明变量关键字 | `var` `let` | - |
| 声明变量不赋值 | `var variableName;` | - |
| 变量赋值 | `variableName = value;` | `variableName = value` |
| 常量声明 | `const constantName = value;` | `CONSTANT_NAME = value` |

:::tip
Python 中没有常量的概念，Python 默认约定使用全部大写字母和下划线组合进行命名的变量为不可变的变量，开发者应该遵守这种约定，不要对它们的值进行修改
:::

### 相关资源

- https://docs.python.org/3/reference/simple_stmts.html#assignment-statements


