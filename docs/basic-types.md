---
id: basic-types
slug: /basic-types
title: Basic Data Types
sidebar_label: Basic Data Types
---

Python basic data types include:

- Integer: Numbers without decimal points.
- Float: Numbers with decimal points.
- String: A sequence of characters enclosed in single quotes or double quotes.
- Boolean: Represents True or False.
- None: Represents empty value.

### Task

Define 5 variables to represent a person's payslip, including: name, month, salary, whether they have perfect attendance, and project team.

#### JavaScript implementation

```javascript
let name = 'Bob' // string
let month = 12 // number
let salary = 10000.12 // number
let isPerfectAttendance = true // boolean
let team = null // null
console.log(typeof name) // Get the type of the variable
```

#### Python implementation

```python
name = 'Bob' # str
month = 12 # int
salary = 10000.12 # float
is_perfect_attendance = True # bool
team = None # None
print(type(name)) # Get the type of the variable
```

### Code Highlight
 - Python has two types of number types, `int` for integers and `float` for floating-point numbers, while JavaScript uses the `number` type for both integers and floating-point numbers.
 - Python uses `None` to represent empty, while JavaScript uses `null`.
 - Python does not have a type similar to JavaScript's `undefined`.
 - Python uses the built-in function `type()` to get the variable type, while JavaScript uses the `typeof` keyword.

### Difference Quick View
| Type | JavaScript | Python |
|---------|------------|--------|
| Integer | `let myInt = 10;`<br />`let myInt = Number(10);` | `my_int = 10` |
| Float | `let myFloat = 3.14;`<br />`let myFloat = Number(3.14);` | `my_float = 3.14` |
| String | `let myStr = "Hello World";` | `my_str = "Hello World"` |
| Boolean | `let myBool = true;`<br />`let myBool = false;` | `my_bool = True`<br />`bool_val = False` |
| None | `let myNull = null;` | `my_none = None` |

String is one of the most widely used data types in programming languages, mastering them can greatly simplify programming. Here are the common string APIs in JavaScript and Python:

| Method         | JavaScript                     | Python                           |
|--------------|--------------------------------|----------------------------------|
| Get length   | `myStr.length`                   | `len(my_str)`                       |
| Concatenate   | `myStr1 + myStr2`                  | `my_str1 + my_str2`                    |
| Slice   | `myStr.slice(start, end)`        | `my_str[start:end]`                 |
| Find   | `myStr.indexOf(substring)`       | `my_str.index(substring)`           |
| Replace   | `myStr.replace(old, new)`        | `my_str.replace(old, new)`          |
| Split   | `myStr.split(separator)`         | `my_str.split(separator)`           |
| Convert to uppercase and lowercase | `myStr.toUpperCase()`<br />`myStr.toLowerCase()` | `my_str.upper()`<br />`my_str.lower()` |
| Reverse	| `myStr.split('').reverse().join('')`	| `my_str[::-1]` |
| Count occurrences of a substring |	`myStr.split(substring).length - 1`	| `my_str.count(substring)` |
| Check if a string starts with a specified character(s) |	`myStr.startsWith(prefix)`	| `my_str.startswith(prefix)` |
| Check if a string ends with a specified character(s) | `myStr.endsWith(suffix)` | `my_str.endswith(suffix)` |
| Trim whitespace from both ends of a string | `myStr.trim()`	| `my_str.strip()` |
| Center align a string with a specified width |	-	| `my_str.center(width)` |
| Capitalize the first letter of the first word |	-	| `my_str.capitalize()` |
| Capitalize the first letter of each word |	-	| `my_str.title()` |

### Resources
- https://docs.python.org/3/library/stdtypes.html
