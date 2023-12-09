---
id: anonymous-functions
slug: /anonymous-functions
title: Anonymous Functions
sidebar_label: Anonymous Functions
---

When you need to inline execute a small piece of code without defining a separate function, you can use anonymous functions. In Python, anonymous functions are called "lambda expressions" or "lambda functions".

### Task

Using anonymous functions, map each item in a list of numbers to its square and print the new list.

#### JavaScript implementation

```javascript
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers);
```

#### Python implementation

```python
numbers = [1, 2, 3, 4, 5]

squared_numbers = list(map(lambda number: number ** 2, numbers))
print(squared_numbers)
```

### Code Highlight
- Python uses the `lambda` keyword to create anonymous functions, while JavaScript uses `function` or `=>` to create anonymous functions.
- Python's `lambda` functions cannot contain a function body, and the value of the expression is automatically returned as the return value. In contrast, anonymous functions in JavaScript can have function bodies and `return` statements.

### Difference Quick View

| Feature    | JavaScript                       | Python       |
|---------|---------------------------------|--------------|
| Creating Anonymous Functions    | `(params) => expression`      | `lambda params: expression` |

:::tip
When a lambda function in Python has multiple parameters, separate each parameter with a `,`.
:::

### Resources

- https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions
