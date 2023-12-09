---
id: if-statement
slug: /if-statement
title: If Statement
sidebar_label: If Statement
---

The if statement is used to control the execution of code based on a condition. The if statement in Python and JavaScript has the same functionality, but there are significant syntax differences.

### Task

Design a program to determine whether a given number is positive, negative, or zero.

#### JavaScript implementation
```javascript
const number = 100

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
```

#### Python implementation
```python
number = 100

if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")
```

### Code Highlight
- In Python, the if statement does not require parentheses around the condition, while in JavaScript, parentheses are needed.
- In Python, a colon (:) is used to indicate the end of a condition, and **indentation** is used to denote a code block. In JavaScript, curly braces ({}) are used to denote a code block.
- In Python, `elif` is used to continue matching conditions, while in JavaScript, `else if` is used.

:::danger Code Indentation
Python uses strict code indentation (usually four spaces) to represent a code block. Adding or removing spaces can cause syntax errors. Unlike JavaScript, which uses paired curly braces, many IDEs often cannot automatically fix syntax errors caused by code indentation.

When there is no actual logic to be executed in a code block, you can use `pass` to indicate that nothing should be done, for example:
```python
if some_condition:
    pass # Do nothing
else:
    ...
```
:::

### Difference Quick View

| Feature           | JavaScript        | Python         |
|-------------------|-------------------|----------------|
| if statement      | `if (condition) {code}`         | `if condition: code`       |
| else statement    | `else {code}`          | `else: code`        |
| else if statement | `else if (condition) {code}`     | `elif condition: code`       |
| Nested if statement   | Same     | Same
| Logical operators | `&&`, `||`, `!` | `and`, `or`, `not` |
| Includes            | `key in myObj`<br />`myArr.includes(el)`                                | `key in my_dict`<br /> `el in my_list`                                 |
| Equality     | `===`                               | `==`                                 |
| Inequality | `!==`                               | `!=`                             |
| Greater than        | `>`                                 | `>`                                  |
| Less than           | `<`                                 | `<`                                  |
| Greater than or equal to | `>=`                          | `>=`                                 |
| Less than or equal to    | `<=`                          | `<=`                                 |
| Conditional expression   | `let estimation = score >= 60 ? 'Pass' : 'Fail'`| `estimation = 'Pass' if score >= 60 else 'Fail'`|

:::tip Null Checking in Python
In Python, there are four ways to check if a value is null: `is None`, `is not None`, `== None`, and `!= None`.
:::

:::tip Note
Python does not have a switch-case statement.
:::

### Resources

- [Python if Statement](https://docs.python.org/3/reference/compound_stmts.html#the-if-statement)
- [Python Comparisons](https://docs.python.org/3/library/stdtypes.html#comparisons)
