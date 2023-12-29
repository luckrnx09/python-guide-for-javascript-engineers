---
id: for-and-while-statement
slug: /for-and-while-statement
title: For and While Statements
sidebar_label: For and While Statements
---

Loops are used to repeat a specific code logic, and both Python and JavaScript use `for` and `while` to implement loop logic.

### Task

Generate an array containing all numbers from 1 to 20, and print each item.
#### JavaScript implementation
```typescript
let numbers = Array.from({ length: 20 }, (_, i) => (i + 1));

for (let el of numbers) {
  console.log(el)
}

```

#### Python implementation
```python
numbers = range(1, 21)

for el in numbers:
  print(el)
```

### Code Highlight

- In Python, the syntax for `for` loop is `for el in sequence:`, while in JavaScript, it is recommended to use `for (let el of iterable)`.
- Python uses indentation to indicate the body of the loop, while JavaScript uses curly braces (`{}`) to indicate the body of the loop.

### Difference Quick View
| Feature              | JavaScript                    | Python                              |
|--------------------|-------------------------------|-------------------------------------|
| for loop         | `for (el of iterable)` | `for el in sequence:`                 |
| while loop   | `while (condition)` | `while condition:` |
| range function   | -                             | `range(start, stop, step)`           |
| enumerate function | -                           | `enumerate(iterable, start=0)`       |
| break       | `break`      | `break`      |
| continue    | `continue`   | `continue`   |

:::tip Getting the index in a loop
The built-in function `enumerate()` in Python is used to enumerate over iterable objects, and it returns a tuple containing the index and the item itself.
```python
for index, el in enumerate(my_list):
    ...
```
:::

### Resources

- https://docs.python.org/3/tutorial/controlflow.html#for-statements
- https://docs.python.org/3/library/stdtypes.html#range
- https://docs.python.org/3/library/functions.html#enumerate
