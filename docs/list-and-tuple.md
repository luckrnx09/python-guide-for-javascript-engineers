---
id: lists-and-tuples
slug: /lists-and-tuples
title: Lists and Tuples
sidebar_label: Lists and Tuples
---

In Python, arrays are called lists and are used to store multiple consecutive values.

### Task

Define a list of people that includes Bob, Tom, and Amy.

#### JavaScript implementation
```javascript
let names = [];
names.push('Bob')
names.push('Tom')
names.push('Amy')
console.log(names)
```
#### Python implementation
```python
names = [];
names.append('Bob')
names.append('Tom')
names.append('Amy')
print(names)
```

### Code Highlight
- Python uses `my_list.append(el)` to add elements to a list, while JavaScript uses `myArr.push(el)`.

### Difference Quick View
| Feature | JavaScript | Python |
|---------|------------|--------|
| Creation | `let myArr = new Array();` <br /> `let myArr = [1, 2];` <br /> `let myTuple = [1, 2];` | `my_list = list()` <br />`my_list = [1, 2]` <br /> `my_tuple = (1, 2)` |
| Access | `let el = myArr[index];` | `el = my_list[index]` |
| Addition | `myArr.push(el);` | `my_list.append(el)` |
| Length | `let length = myArr.length;` | `length = len(my_list)` |
| Slicing | `let someEl = myArr.slice(start, end);` | `some_el = my_list[start:end]` |
| Concatenation | `let mergedArr = myArr1.concat(myArr2);` | `merged_list = my_list1 + my_list2` |
| Copying | `let newArr = [...myArr];` | `new_list = my_list1.copy()` |
| Reversing | `myArr.reverse();` | `my_list.reverse()` |
| Deletion | `myArr.splice(index, 1);` | `del my_list[index]` |
| Maximum Value | `let maxVal = Math.max(...myArr);` | `max_val = max(my_list)` |
| Minimum Value | `let minVal = Math.min(...myArr);` | `min_val = min(my_list)` |
| Sum | `let sumVal = myArr.reduce((a,b) => a + b, 0);` | `sum_val = sum(my_list)` |
| Conversion to Tuple | - | `my_tuple = tuple(my_list);` |

:::tip What is a Tuple
A tuple can be understood as a read-only array. It determines the number of elements and their values at the time of creation and cannot be modified once created.
:::

### Resources
- https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences
