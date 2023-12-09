---
id: naming-rules-for-variables
slug: /naming-rules-for-variables
title: Naming Rules for Variables
sidebar_label: Naming Rules for Variables
---

To prevent writing Python code with a "JavaScript flavor," we need to understand the naming rules and conventions for variables in Python.

### Naming Conventions

The following are the naming rules that both JavaScript and Python must follow:
- Variable names must start with a letter or an underscore (_).
- Variable names can only contain letters, numbers, and underscores (_).
- Avoid using reserved keywords or built-in function names as variable names.

Naming rules are necessary for code to run, while following appropriate naming conventions is an important measure of code readability. In Python, except for **using underscore (_) to separate words in variable and function names and using lowercase letters**, other naming conventions are the same as in JavaScript.

Here are the similarities and differences between them:

| Name                  | JavaScript               | Python                    |
|-----------------------|--------------------------|---------------------------|
| Variable Name          | userName               | user_name              |
| Class Name            | UserPermission         | UserPermission         |
| Function Name          | getById                 | get_by_id             |
| Constant Name          | DEFAULT_LOGO_URL       | DEFAULT_LOGO_URL      |


### Forbidden Variable Names

In JavaScript, we often use the variable name `str` to represent a string.

```javascript
const str = '123'
```

In Python, `str` is a built-in function used to convert a value to a string type. In Python, using `str` as a variable name will override this built-in function, which can lead to unexpected results in complex systems.

Consider the following Python code:

```python
print(str(123)) # Convert the integer 123 to a string
str = '123' # Override the built-in function str
print(str(123)) # TypeError: 'str' object is not callable
```

This code will throw an exception during execution because `str` is now a string type.

There are many other built-in functions in Python. The table below lists some of the commonly used built-in function names in Python that JavaScript engineers often use as variable names. It is important to avoid using them when writing Python code.


|   Built-in Function   |               Purpose               |
|----------|--------------------------------|
|   str    | Convert an object to a string              |
|   dict   | Create a dictionary object                    |
|   list   | Create a list object                    |
|   set    | Create a set object                    |
|  tuple   | Create a tuple object                    |
|   int    | Convert an object to an integer                |
|  float   | Convert an object to a float              |
|   bool   | Convert an object to a boolean value              |
|   len    | Return the length of an object                  |
|  print   | Print an object to the console              |


You can [click here](https://docs.python.org/3/library/functions.html) to view all the built-in functions in Python.

:::tip
If you use the PyCharm IDE to write Python code, when you use a built-in function as a variable name, there will be a warning underline below the variable name.
:::

### Resources

- https://www.python.org/dev/peps/pep-0008/#naming-conventions
