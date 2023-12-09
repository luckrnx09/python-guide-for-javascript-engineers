---
id: hello-world
slug: /hello-world
title: Python 第一个 Python 程序
sidebar_label: 第一个 Python 程序
---

“Hello World” 程序通常是初学者学习新编程语言时编写的第一个程序。它是一个简单的程序，将短语 “Hello, World!” 打印到控制台上。

### 任务

创建一个程序，提示用户输入他们的名字，然后使用该名字打印一个 “你好，xx！” 的问候消息。

#### JavaScript 实现

```javascript title="hello.js"
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('请输入你的名字：', (answer) => {
  console.log(`你好，${answer}！`);
  rl.close();
});
```
在终端中运行 `node hello.js` 命令以运行以上示例代码。


#### Python 实现

```python title="hello.py"
name = input("请输入你的名字：")
print(f"你好，{name}！")
```

在终端中运行 `python hello.py` 命令以运行以上示例代码

### 代码解读

- 在 Python 中，使用 `input()` 函数获取输入提示，而 JavaScript 中，使用 `readline` 系列 API。
- 在 Python 中，使用 `f"..."` 实现字符串插值。在 JavaScript 中，使用反引号（`）。
- 在 Python 中，使用 `print()` 函数将输出显示到控制台，而 JavaScript 使用 `console.log()` 函数。

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 文件后缀 | `.js` | `.py` |
| 运行命令 | `node filename.js` | `python filename.py` |
| 打印 | `console.log()` | `print()` |
| 注释 | `// 注释内容` 或 `/** 注释内容 */` | `# 注释内容` 或 `""" 注释内容 """` |

### 相关资源

- https://docs.python.org/3/library/functions.html#print

