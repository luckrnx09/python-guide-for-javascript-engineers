---
id: json-module
slug: /json-module
title: json 模块
sidebar_label: json 模块
---

Python 中的 json 模块提供了处理 JSON 数据的函数。

### 任务
设计一个程序，读取 `database.json` 中的 `port`属性的值，并将其修改为 `5432`，然后写回到该文件中。 

#### JavaScript 实现
```javascript
import fs from 'fs';

// 读取JSON文件
fs.readFile('database.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  try {
    // 将JSON数据解析为JavaScript对象
    const jsonData = JSON.parse(data);

    // 修改port属性的值为5432
    jsonData.port = 5432;

    // 将JavaScript对象转换回JSON字符串
    const updatedData = JSON.stringify(jsonData, null, 2);

    // 将更新后的JSON字符串写回文件
    fs.writeFile('database.json', updatedData, 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log('JSON文件已更新');
    });
  } catch (err) {
    console.error('无法解析JSON文件:', err);
  }
});
```

#### Python 实现
```python
import json

# 读取JSON文件
with open('database.json', 'r') as file:
    json_data = json.load(file)

# 修改port属性的值为5432
json_data['port'] = 5432

# 将更新后的JSON数据写回文件
with open('database.json', 'w') as file:
    json.dump(json_data, file, indent=2)

print('JSON文件已更新')
```

### 代码解读
- Python 使用 `json.dumps()` 将对象转换为 JSON 字符串，JavaScript 中的 `JSON.stringify()` 与之等效。
- Python 使用 `json.loads()` 将 JSON 字符串转换为字典，JavaScript 中的 `JSON.parse()` 与之等效。 

:::danger 中文编码问题
将 Python 对象转换为 JSON 字符串时，如果遇到中文乱码问题，可以使用 `ensure_ascii=False` 参数确保中文字符以原始的 Unicode 形式进行编码，而不是 ASCII 编码。例如：
```python
import json

data = {"name": "张三", "age": 25}
json_str = json.dumps(data, ensure_ascii=False)
print(json_str)
```
:::

### 差异速览

| 特性 | JavaScript | Python |
|----------------------|------------|--------------|
| 解析 JSON 字符串        | `JSON.parse(myStr)` | `json.loads(my_str)`   |
| 将对象转为 JSON 字符串   | `JSON.stringify(myObj)` | `json.dumps(my_obj)` |
| 读取 JSON 文件          | -      | `json.load(my_file)`    |
| 写入 JSON 文件          | -        | `json.dump(my_file)`    |

:::danger
Python 中使用 `json.loads(my_str)` 和 `json.load(my_file)` 会将得到一个 **字典** 或 **列表**（取决于 JSON 数据的结构）。对于字典以及嵌套字典而言，需要特别注意 Python 语法不支持使用点运算符（.）获取值，你需要需要使用 `[]` 获取值。
```python
import json

my_dict = json.loads('{"name": "luckrnx09", "age": 18}')
print(my_dict.name) # Error: 'dict' object has no attribute 'name'
print(my_dict['name']) # luckrnx09
```
:::

### 相关资源
- https://docs.python.org/3/library/json.html
