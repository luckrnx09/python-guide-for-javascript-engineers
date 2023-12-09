---
id: create-and-import-modules
slug: /create-and-import-of-modules
title: Create and Import Modules
sidebar_label: Create and Import Modules
---

A large application is usually composed of many modules, which are independent units of code organization in software development. Each `.py` file is a Python module, and each `.js` file is a JavaScript module.

### Task

Design a program that defines a calculator module, which provides basic arithmetic operations such as addition, subtraction, multiplication, and division. Import this module in another module, calculate and print the result of `1234 * 4321`.

#### JavaScript implementation
```javascript title="calculator.js"
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```
```javascript title="main.js"
import { multiply } from './calculator.js';
console.log(multiply(1234, 4321));
```

#### Python implementation
```python title="calculator.py"
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```

```python title="main.py"
import calculator
result = calculator.multiply(1234, 4321)
print(result)
```

### Code Highlight
- Both Python and JavaScript use the `import` keyword to import modules.
- Python module members do not need to be explicitly exported using the `export` keyword, as all members in a module are automatically exported.

:::danger Private members in Python modules
In Python, all variables, functions, classes, and other members that can be accessed within the module are automatically exported and can be freely imported by other modules. Python does not provide a way to protect module private members. To indicate that certain members in a module should not be imported by other modules, it is common convention to prefix the member names with `_` or `__`. Additionally, when using third-party modules, it is important to follow this convention and avoid directly importing and using members that start with an underscore.
:::

### Difference Quick View

Feature | JavaScript | Python
--- | --- | ---
Import module | `import foo from 'module'` | `import foo`
Import specific members from module | `import { foo, bar } from 'module'` | `from module import foo, bar`
Import module with alias | `import { foo as alias } from 'module'` | `from module import foo as alias`
Import entire module with alias | `import * as alias from 'module'` | `import module as alias`
Default export | `export default module` | `-`
Named export | `export foo` | `-`

:::tip
In Python, the module name is determined by the file name. The file name cannot contain `-` or it will not be able to be imported by other modules.

Python follows certain conventions when converting between file names and module names:

File Name | Module Name | Explanation
--- | --- | --- |
my_module.py | my_module | Module name is the same as the file name |
myModule.py | mymodule | Uppercase letters are automatically converted to lowercase |

:::

### Resources

- https://docs.python.org/3/tutorial/modules.html

