---
id: set
slug: /set
title: 集合
sidebar_label: 集合
---

集合是一个无序的唯一元素的集合，与 JavaScript 中的 `Set` 相同，常用语去重操作。

### 任务

将文本中的水果按照空格拆分，去除重复项并对其进行排序。

#### JavaScript 实现
```javascript
const text = "apple banana cherry apple banana";
const words = text.split(" ");
const uniqueWords = [...new Set(words)];
uniqueWords.sort();
console.log(uniqueWords);
```

#### Python 实现
```python
text = "apple banana cherry apple banana"
words = text.split(" ")
unique_words = set(words)
sorted_words = sorted(unique_words)
print(sorted_words)
```

### 代码解读
- Python 使用 `set()` 创建集合，JavaScript 使用 `new Set()` 创建集合。 

### 差异速览

| 特性                 | JavaScript            | Python                |
|----------------------|-----------------------|-----------------------|
| 创建集合             | `let mySet = new Set()` | `my_set = set()`       |
| 添加元素             | `mySet.add(el)`   | `my_set.add(el)`  |
| 检查大小             | `mySet.size`           | `len(my_set)`          |
| 检查是否为空         | `mySet.size === 0`     | `len(my_set) == 0`     |
| 删除元素             | `mySet.delete(el)`| `my_set.remove(el)`|
| 清空集合             | `mySet.clear()`        | `my_set.clear()`       |
| 检查成员是否存在       | `let exist = mySet.has(el)`   | `exist = el in my_set`    |
| 将集合转换为数组       | `let myArr = [...mySet]`       | `my_list = list(my_set)`     |
| 集合的并集            | -                      | `my_set.union(another_set)`|
| 集合的交集            | -                      | `my_set.intersection(another_set)` |

### 相关资源

- https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset


