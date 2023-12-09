---
id: definition-and-assignment-of-variables
slug: /definition-and-assignment-of-variables
title: Definition and Assignment of Variables
sidebar_label: Definition and Assignment of Variables
---

Python, like JavaScript, is a dynamically typed language and does not require variable type declaration before assignment.

### Task

Define three variables: `name` (string), `age` (integer), and `is_student` (boolean), assign appropriate values to these variables, and print them to the console.

#### JavaScript implementation

```javascript
let name = "John";
let age = 25;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);
```

#### Python implementation

```python
name = "John"
age = 25
is_student = True

print(name)
print(age)
print(is_student)
```

### Code Highlight
- Both Python and JavaScript use a single equals sign `=` for assignment.
- Python does not require a semicolon at the end of statements, while JavaScript does.

:::tip Do you need to use semicolons in JavaScript code?
Semicolons are necessary for JavaScript, but not required for developers because the interpreter automatically inserts semicolons.
:::

### Difference Quick View

| Feature | JavaScript | Python |
|---------|------------|--------|
| Variable declaration keywords | `var` `let` | - |
| Variable declaration without assignment | `var variableName;` | - |
| Variable assignment | `variableName = value;` | `variableName = value` |
| Constant declaration | `const constantName = value;` | `CONSTANT_NAME = value` |

:::tip
Python does not have the concept of constants. In Python, it is convention to use all uppercase letters and underscores for naming variables that should not be modified. Developers should follow this convention and avoid modifying their values.
:::

### Resources

- https://docs.python.org/3/reference/simple_stmts.html#assignment-statements

