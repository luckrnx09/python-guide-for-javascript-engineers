---
id: json-module
slug: /json-module
title: JSON Module
sidebar_label: JSON Module
---

The json module in Python provides functions for working with JSON data.

### Task
Design a program that reads the value of the `port` attribute in the `database.json` file, changes it to `5432`, and then writes it back to the file.

#### JavaScript implementation
```javascript
import fs from 'fs';

// Read JSON file
fs.readFile('database.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    // Parse JSON data into JavaScript object
    const jsonData = JSON.parse(data);

    // Change the value of the port attribute to 5432
    jsonData.port = 5432;

    // Convert JavaScript object back to JSON string
    const updatedData = JSON.stringify(jsonData, null, 2);

    // Write the updated JSON string back to the file
    fs.writeFile('database.json', updatedData, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('JSON file has been updated');
    });
  } catch (err) {
    console.error('Failed to parse JSON file:', err);
  }
});
```

#### Python implementation
```python
import json

# Read JSON file
with open('database.json', 'r') as file:
    json_data = json.load(file)

# Change the value of the port attribute to 5432
json_data['port'] = 5432

# Write the updated JSON data back to the file
with open('database.json', 'w') as file:
    json.dump(json_data, file, indent=2)

print('JSON file has been updated')
```

### Code Highlight
- In Python, `json.dumps()` is used to convert objects to JSON strings, which is equivalent to `JSON.stringify()` in JavaScript.
- In Python, `json.loads()` is used to convert JSON strings to dictionaries, which is equivalent to `JSON.parse()` in JavaScript.

:::danger Chinese Encoding Issue
When converting Python objects to JSON strings, if you encounter Chinese encoding issues, you can use the `ensure_ascii=False` parameter to ensure that Chinese characters are encoded in their original Unicode form instead of ASCII encoding. For example:
```python
import json

data = {"name": "张三", "age": 25}
json_str = json.dumps(data, ensure_ascii=False)
print(json_str)
```
:::

### Difference Quick View

| Feature | JavaScript | Python |
|----------------------|------------|--------------|
| Parse JSON string        | `JSON.parse(myStr)` | `json.loads(my_str)`   |
| Convert object to JSON string   | `JSON.stringify(myObj)` | `json.dumps(my_obj)` |
| Read JSON file          | -      | `json.load(my_file)`    |
| Write JSON file          | -        | `json.dump(my_file)`    |

:::danger
In Python, `json.loads(my_str)` and `json.load(my_file)` return a **dictionary** or **list** (depending on the structure of the JSON data). For dictionaries and nested dictionaries, note that Python syntax does not support using the dot operator (.) to access values. You need to use `[]` to access values.
```python
import json

my_dict = json.loads('{"name": "luckrnx09", "age": 18}')
print(my_dict.name) # Error: 'dict' object has no attribute 'name'
print(my_dict['name']) # luckrnx09
```
:::

### Resources
- https://docs.python.org/3/library/json.html
