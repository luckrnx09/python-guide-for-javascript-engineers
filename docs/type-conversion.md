---
id: type-conversion
slug: /type-conversion
title: Type Conversion
sidebar_label: Type Conversion
---

Type conversion is a common requirement in programming, and both Python and JavaScript provide methods specifically for type conversion.

### Task

Assuming there is a hard disk with a capacity of 8192MB (as a string), please convert the capacity of this hard disk to the GB unit and save the conversion result in an integer variable.

#### JavaScript implementation
```javascript
let mb = '8192MB';
let gb = parseInt(mb) / 1024
let intGb = parseInt(gb)
console.log(`The capacity of this hard disk is: ${intGb}GB`)
```
#### Python implementation
```python
mb = '8192MB'
int_gb = int(mb[:-2]) // 1024
print(f"The capacity of this hard disk is: {int_gb}GB")
```

### Code Highlight
 - Python uses built-in functions with the same name as the type (e.g., `str(some_value)`, `bool(some_value)`, etc.) for data conversion, while JavaScript uses built-in functions with the `parse` prefix.
 - In Python, a string like '8192MB' cannot be directly converted to an integer or float because it is incompatible with these two types, while JavaScript can convert it to an integer using `parseInt`.
 - Python can use string slicing syntax (`[start:end]`) to get a substring of a string.

### Difference Quick View

| Feature | JavaScript | Python |
|---------|------------|--------|
| Convert to integer | `parseInt(myVal)` or `Number(myVal)` | `int(my_val)` |
| Convert to float | `parseFloat(myVal)` or `Number(myVal)` | `float(my_val)` |
| Convert to string | `myVal.toString()` or `String(myVal)` | `str(my_val)` |
| Convert to boolean | `Boolean(myVal)` | `bool(val)` |
| Convert to array | - | `list(my_val)` |
| Convert to object | - | `dict(my_val)` |


### Resources
- https://docs.python.org/3/library/functions.html
