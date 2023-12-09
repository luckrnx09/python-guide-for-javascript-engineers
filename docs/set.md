---
id: set
slug: /set
title: Set
sidebar_label: Set
---

A set is an unordered collection of unique elements, similar to the `Set` in JavaScript. It is commonly used for removing duplicates.

### Task

Split the text into words by spaces, remove duplicate words, and sort them.

#### JavaScript implementation
```javascript
const text = "apple banana cherry apple banana";
const words = text.split(" ");
const uniqueWords = [...new Set(words)];
uniqueWords.sort();
console.log(uniqueWords);
```

#### Python implementation
```python
text = "apple banana cherry apple banana"
words = text.split(" ")
unique_words = set(words)
sorted_words = sorted(unique_words)
print(sorted_words)
```

### Code Highlight
- Python uses `set()` to create a set, while JavaScript uses `new Set()` to create a set.

### Difference Quick View

| Feature                    | JavaScript                    | Python                        |
|----------------------------|-------------------------------|-------------------------------|
| Create a set               | `let mySet = new Set()`       | `my_set = set()`              |
| Add an element             | `mySet.add(el)`               | `my_set.add(el)`              |
| Check size                 | `mySet.size`                  | `len(my_set)`                 |
| Check if empty             | `mySet.size === 0`            | `len(my_set) == 0`            |
| Delete an element          | `mySet.delete(el)`            | `my_set.remove(el)`           |
| Clear the set              | `mySet.clear()`               | `my_set.clear()`              |
| Check if a member exists   | `let exist = mySet.has(el)`    | `exist = el in my_set`        |
| Convert set to array       | `let myArr = [...mySet]`      | `my_list = list(my_set)`      |
| Union of sets              | -                             | `my_set.union(another_set)`   |
| Intersection of sets       | -                             | `my_set.intersection(another_set)` |

### Resources

- https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset
