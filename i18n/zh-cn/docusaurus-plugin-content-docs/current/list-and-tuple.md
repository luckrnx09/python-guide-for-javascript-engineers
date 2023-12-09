---
id: lists-and-tuples
slug: /lists-and-tuples
title: 列表和元组
sidebar_label: 列表和元组
---

在 Python 中，数组被称之为列表，用于存储多个连续的值。

### 任务

定义一个人员名单，该名单包含 “张三”、“李四”、“王五”。

#### JavaScript 实现
```javascript
let names = [];
names.push('张三')
names.push('李四')
names.push('王五')
console.log(names)
```
#### Python 实现
```python
names = [];
names.append('张三')
names.append('李四')
names.append('王五')
print(names)
```

### 代码解读
- Python 使用`my_list.append(el)` 向列表中添加元素，JavaScript 使用 `myArr.push(el)` 向数组中添加元素。

### 差异速览
| 特性 | JavaScript | Python |
|---------|------------|--------|
| 创建 | `let myArr = new Array();` <br /> `let myArr = [1, 2];` <br /> `let myTuple = [1, 2];` | `my_list = list()` <br />`my_list = [1, 2]` <br /> `my_tuple = (1, 2)` |
| 访问 | `let el = myArr[index];` | `el = my_list[index]` |
| 添加 | `myArr.push(el);` | `my_list.append(el)` |
| 长度 | `let length = myArr.length;` | `length = len(my_list)` |
| 切片 | `let someEl = myArr.slice(start, end);` | `some_el = my_list[start:end]` |
| 连接 | `let mergedArr = myArr1.concat(myArr2);` | `merged_list = my_list1 + my_list2` |
| 复制 | `let newArr = [...myArr];` | `new_list = my_list1.copy()` |
| 反转 | `myArr.reverse();` | `my_list.reverse()` |
| 删除 | `myArr.splice(index, 1);` | `del my_list[index]` |
| 求最大值 | `let maxVal = Math.max(...myArr);` | `max_val = max(my_list)` |
| 求最小值 | `let minVal = Math.min(...myArr);` | `min_val = min(my_list)` |
| 求和 | `let sumVal = myArr.reduce((a,b) => a + b, 0);` | `sum_val = sum(my_list)` |
| 转换为元组 | - | `my_tuple = tuple(my_list);` |

:::tip 元组是什么
元组可以理解为只读的数组，它在创建时确定元素个数和元素的值，一旦创建就不能被修改。
:::

### 相关资源
- https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences


