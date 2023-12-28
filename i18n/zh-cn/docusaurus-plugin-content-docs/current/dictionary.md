---
id: dictionary
slug: /dictionary
title: 字典
sidebar_label: 字典
---

字典通常用于使用特定键存储和检索数据。Python 中的字典与 JavaScript 中的对象基本等价。

### 任务

设计一个程序，使用字典存储和检索学生的个人信息。个人信息包括姓名、年龄和城市

#### JavaScript 实现
```javascript
let personalInfo = {};
 
personalInfo.name = 'luckrnx09',
personalInfo.age = 18,
personalInfo.city = '成都'

console.log(personalInfo);
```

#### Python 实现
```python
personal_info = {}

personal_info["name"] = 'luckrnx09'
personal_info["age"] = 18
personal_info["city"] = '成都'

print(personal_info)
```

### 代码解读

- 在 Python 和 JavaScript 中，都可以使用 `{}` 创建一个空字典/对象。
- 在 Python 中，只能使用方括号（`my_dict[key]`）访问值，而 JavaScript 中，除了方括号外，还可以使用点运算符（`myObj.key`）访问值。

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 定义字典 | `let obj = {};` <br /> `let obj = {key1: value1, key2: value2};` | `dict1 = {}` <br /> `my_dict = {"key1": value1, "key2": value2}` |
| 访问值 | `obj[key];` key | `my_dict[key]` |
| 访问值或默认值 | `obj[key] ?? defaultVal;` | `my_dict.get(key, default_value)` |
| 更新值 | `obj[key] = newValue;` | `my_dict[key] = newValue` |
| 合并和更新 | `obj={...obj,...anotherObj}` | `my_dict.update(another_dict)` |
| 删除键值对 | `delete obj[key];` | `del my_dict[key]` |
| 检查键是否存在 | `key in obj;` | `key in my_dict` |
| 获取所有键 | `Object.keys(obj);` | `my_dict.keys()` |
| 获取所有值 | `Object.values(obj);` | `my_dict.values()` |
| 获取键值对数目 | `Object.keys(obj).length;` | `len(my_dict)` |

:::danger
Python 中使用 `{}` 语法创建字典时，字典的 key 必须使用引号包裹。此外，Python 还可以通过 `dict()` 来创建字典，并给字典设置初始键值对，这种方式不需要使用引号将 key 进行包裹。
```
my_dict = dict(a=1, b=2, ...)
print(my_dict)
```
:::

### 相关资源

- https://docs.python.org/3/tutorial/datastructures.html#dictionaries
