---
id: basic-types
slug: /basic-types
title: 基本数据类型
sidebar_label: 基本数据类型
---

Python 基本数据类型包括：

- 整数：没有小数点的数字。
- 浮点数：带有小数点的数字。
- 字符串：用单引号或双引号括起来的字符序列。
- 布尔值：表示 True 或 False。
- 空值：None。

### 任务

定义 5 个变量表示某人的工资条，需要包含：姓名、月份、薪资、是否全勤、所属项目组

#### JavaScript 实现

```javascript
let name = '张三' // string
let month = 12 // number
let salary = 10000.12 // number
let isPerfectAttendance = true // boolean
let team = null // null
console.log(typeof name) // 获取变量的类型
```

#### Python 实现

```python
name = '张三' # str
month = 12 # int
salary = 10000.12 # float
is_perfect_attendance = True # bool
team = None # None
print(type(name)) # 获取变量的类型
```

### 代码解读
 - Python 中的数字类型有两种，分别是 `int` 整数类型和 `float` 浮点数类型，而 JavaScript 中整数和浮点数都使用 `number` 类型存储。
 - Python 使用 `None` 表示空，JavaScript 使用 `null` 表示空。
 - Python 中没有与 JavaScript 的 `undefined` 类似的类型。 
 - Python 中使用 `type()` 内置函数获取变量类型，JavaScript 中使用 `typeof` 关键字获取变量类型。

### 差异速览
| 类型 | JavaScript | Python |
|---------|------------|--------|
| 整数 | `let myInt = 10;`<br />`let myInt = Number(10);` | `my_int = 10` |
| 浮点数 | `let myFloat = 3.14;`<br />`let myFloat = Number(3.14);` | `my_float = 3.14` |
| 字符串 | `let myStr = "Hello World";` | `my_str = "Hello World"` |
| 布尔值 | `let myBool = true;`<br />`let myBool = false;` | `my_bool = True`<br />`bool_val = False` |
| 空值 | `let myNull = null;` | `my_none = None` |

字符串通常为编程语言中使用最广泛的数据类型之一，掌握它们可以让编程事半功倍。以下为 JavaScript 和 Python 中的字符串常见 API：

| 方法         | JavaScript                     | Python                           |
|--------------|--------------------------------|----------------------------------|
| 获取长度   | `myStr.length`                   | `len(my_str)`                       |
| 拼接   | `myStr1 + myStr2`                  | `my_str1 + my_str2`                    |
| 截取   | `myStr.slice(start, end)`        | `my_str[start:end]`                 |
| 查找   | `myStr.indexOf(substring)`       | `my_str.index(substring)`           |
| 替换   | `myStr.replace(old, new)`        | `my_str.replace(old, new)`          |
| 分割   | `myStr.split(separator)`         | `my_str.split(separator)`           |
| 大小写转换 | `myStr.toUpperCase()`<br />`myStr.toLowerCase()` | `my_str.upper()`<br />`my_str.lower()` |
| 反转	| `myStr.split('').reverse().join('')`	| `my_str[::-1]` |
| 统计子串出现次数 |	`myStr.split(substring).length - 1`	| `my_str.count(substring)` |
| 是否以指定字符开头 |	`myStr.startsWith(prefix)`	| `my_str.startswith(prefix)` |
| 是否以指定字符结尾 | `myStr.endsWith(suffix)` | `my_str.endswith(suffix)` |
| 删除两端的空白字符	| `myStr.trim()`	| `my_str.strip()` |
| 按指定宽度居中对齐 |	-	| `my_str.center(width)` |
| 第一个单词首字母大写 | `myStr.replace(myStr[0], myStr[0].toUpperCase())`	| `my_str.capitalize()` |
| 每个单词首字母大写 |	`myStr.replace(/(^\w{1})\|(\s+\w{1})/g, s => s.toUpperCase())`	| `my_str.title()` |

### 相关资源
- https://docs.python.org/3/library/stdtypes.html

