---
id: read-and-write-files
slug: /read-and-write-files
title: 文件读写
sidebar_label: 文件读写
---

文件读写是编程中常见的 IO 操作。

### 任务

现有一个 books.txt ，读取并检查是否包含中国四大名著，如有缺失，请补充缺失的名著并写入该文件中。

#### JavaScript 实现
```javascript
import fs from 'fs';

const data = fs.readFileSync('books.txt', 'utf8');
const books = data.split('\n');
const classics = ['红楼梦', '西游记', '水浒传', '三国演义'];
const missingClassics = classics.filter(classic => !books.includes(classic));

if (missingClassics.length === 0) {
    console.log('文件中已包含中国四大名著。');
} else {
    const missingClassicsText = missingClassics.join('\n');
    fs.appendFileSync('books.txt', `\n${missingClassicsText}`, 'utf8');
    console.log(`已补充缺失的名著到文件中: ${missingClassicsText}`);
}
```

#### Python 实现
```python
# 读取books.txt文件内容
with open('books.txt', 'r', encoding='utf-8') as file:
    books = file.read().splitlines()

# 检查是否包含中国四大名著
classics = ['红楼梦', '西游记', '水浒传', '三国演义']
missing_classics = [classic for classic in classics if classic not in books]

if len(missing_classics) == 0:
    print('文件中已包含中国四大名著。')
else:
    # 补充缺失的名著到文件中
    with open('books.txt', 'a', encoding='utf-8') as file:
        file.write('\n' + '\n'.join(missing_classics))
    print(f'已补充缺失的名著到文件中: {", ".join(missing_classics)}')
```

### 代码解读

- Python 使用 `open()` 函数打开文件，使用 `with` 语句确保文件被正确关闭。
- Python 使用 `w`、`r`、`a` 指定文件的写、读、追加访问模式。

### 差异速览

| 特性               | JavaScript                              | Python                                  |
|-----------------------|-----------------------------------------|-----------------------------------------|
| 读取文件             | `fs.readFileSync(file, 'utf-8')`       | `open(file, 'r', encoding='utf-8').read()`     |
| 写入文件         | `fs.writeFileSync(file, data, 'utf-8')` | `open(file, 'w', encoding='utf-8').write()`     |
| 追加文件        | `fs.appendFileSync(file, data, 'utf-8')` | `open(file, 'a', encoding='utf-8').write()`     |

### 相关资源

- https://docs.python.org/3/tutorial/inputoutput.html

