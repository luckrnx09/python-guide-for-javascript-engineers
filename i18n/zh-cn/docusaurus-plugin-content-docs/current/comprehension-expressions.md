---
id: comprehension-expressions
slug: /comprehension-expressions
title: 列表推导和字典推导
sidebar_label: 列表推导和字典推导
---

在 Python 中，列表推导和字典推导提供了一种简洁的方式来创建列表和字典。

### 任务
1. 生成一个包含 1 到 10 的平方的数的列表，然后过滤列表中的奇数。
2. 生成一个包含 1 到 10 的平方数的字典，以数字作为键，平方数作为值，过滤字典中值大于等于5的键值对。

#### JavaScript 实现
```javascript
// 题目 1：
const numbers = Array.from({ length: 10 }, (_, i) => (i + 1) ** 2);
const filteredNumbers = numbers.filter(num => num % 2 === 0);
console.log(filteredNumbers);

// 题目 2：
const dictionary = {};
for (let i = 1; i <= 10; i++) {
  dictionary[i] = i ** 2;
}
const filteredDictionary = Object.fromEntries(
  Object.entries(dictionary).filter(([key, value]) => value < 5)
);
console.log(filteredDictionary);
```

#### Python 实现
```python
# 题目 1：
squared_numbers = [x**2 for x in range(1, 11)]
filtered_numbers = [num for num in squared_numbers if num % 2 == 0]
print(filtered_numbers)

# 题目 2：
squared_dict = {x: x**2 for x in range(1, 11)}
filtered_dict = {key: value for key, value in squared_dict.items() if value < 5}
print(filtered_dict)
```
:::tip
列表推导和字典推导是 Python 特有的，JavaScript 中没有与之等价的语法和特性。
:::

### 代码解读
- Python 列表推导用方括号括起来，它返回一个新的列表，语法是 `[表达式 for 项 in 列表 if 条件]`。
- Python 字典推导使用 `{}` 括起来，它返回一个新的字典，语法是 `{key表达式: value表达式 for item in 迭代对象 if条件}`。
- Python 的列表推导和字典推导还可以包括更复杂的条件语句，允许对原始列表/字典进行更复杂的过滤和转化。

### 相关资源

- https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions
- https://docs.python.org/3/tutorial/datastructures.html#dictionaries


