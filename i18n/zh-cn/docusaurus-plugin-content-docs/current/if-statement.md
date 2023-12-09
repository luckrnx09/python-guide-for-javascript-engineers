---
id: if-statement
slug: /if-statement
title: if 语句
sidebar_label: if 语句
---

if 语句用于根据条件控制代码需要执行的逻辑，Python 和 JavaScript 中的 if 语句在作用上完全相等，但语法上存在较大的差异。

### 任务

设计一个程序，判断给定的数字是正数、负数还是零。

#### JavaScript 实现
```javascript
const number = 100

if (number > 0) {
    console.log("正数");
} else if (number < 0) {
    console.log("负数");
} else {
    console.log("零");
}
```

#### Python 实现
```python
number = 100

if number > 0:
    print("正数")
elif number < 0:
    print("负数")
else:
    print("零")
```

### 代码解读
- Python if 语句中的条件周围不需要加圆括号，JavaScript 需要为条件添加圆括号。
- Python 使用冒号（:）表示条件结束，并使用 **缩进** 来表示代码块，JavaScript 直接使用 `{}` 表示代码块。
- Python 使用 `elif` 继续匹配判断条件，而 JavaScript 中使用 `else if`。

:::danger 代码缩进
Python 使用严格的代码缩进表示代码块（一般为四个空格），多加空格或少加空格都会引发语法错误。由于它没有像 JavaScript 一样使用成对的大括号，因此许多 IDE 常常无法自动修复代码缩进引发的语法错误。

当代码块中不需要执行实际的逻辑时，为了让程序能正常运行，可以使用 `pass` 表示什么都不做，如：
```python
if some_condition:
    pass # 什么都不做
else:
    ...
```
:::

### 差异速览

| 特性              | JavaScript        | Python         |
|-------------------|-------------------|----------------|
| if 语句            | `if (条件) {代码}`         | `if 条件: 代码`       |
| else 语句          | `else {代码}`          | `else: 代码`        |
| else if 语句       | `else if (条件) {代码}`     | `elif 条件: 代码`       |
| 嵌套 if 语句        | 相同     |相同
| 逻辑运算符        | `&&`、`\|\|`、`!` | `and`、`or`、`not` |
| 是否包含            | `key in myObj`<br />`myArr.includes(el)`                                | `key in my_dict`<br /> `el in my_list`                                 |
| 等于     | `===`                               | `==`                                 |
| 不等于 | `!==`                               | `!=`                             |
| 大于        | `>`                                 | `>`                                  |
| 小于           | `<`                                 | `<`                                  |
| 大于等于 | `>=`                          | `>=`                                 |
| 小于等于    | `<=`                          | `<=`                                 |
| 条件表达式   | `let estimation = score >= 60 ? '及格' : '不及格'`| `estimation = '及格' if score >= 60 else '不及格'`|

:::tip Python 中的空值判断
Python 中判断一个值是否为空，可以使用 `is None` 、 `is not None` 、`== None` 和 `!= None` 四种方式。
:::

:::tip 注意
Python 中没有 switch-case 语句。
:::

### 相关资源

- https://docs.python.org/3/reference/compound_stmts.html#the-if-statement
- https://docs.python.org/3/library/stdtypes.html#comparisons


