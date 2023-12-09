---
id: dictionary
slug: /dictionary
title: Dictionary
sidebar_label: Dictionary
---

Dictionaries are commonly used to store and retrieve data using specific keys. In Python, dictionaries are equivalent to objects in JavaScript.

### Task

Design a program to store and retrieve personal information of students using a dictionary. The personal information includes name, age, and city.

#### JavaScript implementation
```javascript
let personalInfo = {};
 
personalInfo.name = 'luckrnx09';
personalInfo.age = 18;
personalInfo.city = 'Chengdu';

console.log(personalInfo);
```

#### Python implementation
```python
personal_info = {}

personal_info["name"] = 'luckrnx09'
personal_info["age"] = 18
personal_info["city"] = 'Chengdu'

print(personal_info)
```

### Code Highlight

- In both Python and JavaScript, you can use `{}` to create an empty dictionary/object.
- In Python, you can only access values using square brackets (`my_dict[key]`), while in JavaScript, you can also use dot notation (`myObj.key`) to access values.

### Difference Quick View

| Feature | JavaScript | Python |
|---------|------------|--------|
| Define dictionary | `let obj = {};` <br /> `let obj = {key1: value1, key2: value2};` | `dict1 = {}` <br /> `my_dict = {"key1": value1, "key2": value2}` |
| Access value | `obj[key];` | `my_dict[key]` |
| Access value or default value | `obj[key] ?? defaultVal;` | `my_dict.get(key, default_value)` |
| Update value | `obj[key] = newValue;` | `my_dict[key] = newValue` |
| Merge and update | `obj={...obj,...anotherObj}` | `my_dict.update(another_dict)` |
| Delete key-value pair | `delete obj[key];` | `del my_dict[key]` |
| Check if key exists | `key in obj;` | `key in my_dict` |
| Get all keys | `Object.keys(obj);` | `my_dict.keys()` |
| Get all values | `Object.values(obj);` | `my_dict.values()` |
| Get number of key-value pairs | `Object.keys(obj).length;` | `len(my_dict)` |

:::danger
When creating a dictionary using `{}` syntax in Python, the keys of the dictionary must be wrapped in quotes. Additionally, Python allows you to create a dictionary using the `dict()` function and provide initial key-value pairs without the need for quotes around the keys.
```
my_dict = dict(a=1, b=2, ...)
print(my_dict)
```
:::

### Resources

- [Python Documentation: Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
