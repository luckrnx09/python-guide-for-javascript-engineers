---
id: os-module
slug: /os-module
title: os 模块
sidebar_label: os 模块
---

Python 中的 `os` 模块提供了用于操作文件和目录以及访问与系统相关的信息的函数。

### 任务

编写一个程序，列出给定目录中的所有文件和目录。该程序应打印每个项的名称，并指示它是文件还是目录。

#### JavaScript 实现
```javascript
import fs from 'fs';
import path from 'path';

function listItems(directory) {
  const items = fs.readdirSync(directory);
 
 items.forEach((item) => {
    const itemPath = path.join(directory, item);
    const stats = fs.statSync(itemPath);
    console.log(`${item}：${stats.isDirectory() ? '目录' : '文件'}`);
  });
}

listItems('../');
```

#### Python 实现
```python
import os

def list_items(directory):
    items = os.listdir(directory)

    for item in items:
        item_path = os.path.join(directory, item)
        if os.path.isdir(item_path):
            print(f"{item}：目录")
        else:
            print(f"{item}：文件")

list_items('../')
```

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 文件或目录是否存在 | `fs.existsSync(path)` | `os.path.exists(path)` |
| 创建目录 | `fs.mkdirSync(path)` | `os.mkdir(path)` |
| 列出目录 | `fs.readdirSync(path)` | `os.listdir(path)` |

### 相关资源

- https://docs.python.org/3/library/os.html

