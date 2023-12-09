---
id: re-module
slug: /re-module
title: re 模块
sidebar_label: re 模块
---

正则表达式是编程语言中用于搜索、匹配和操作文本的强大工具，Python 中的 `re` 模块提供了对正则表达式的支持。


### 任务

编写一个程序，接受一个电子邮件地址列表，并使用正则表达式提取每个地址的用户名和域名。

#### JavaScript 实现
```javascript
const emailAddresses = [
  "john.doe@example1.com",
  "jane.smith@example2.com",
  "foo@bar.com",
];

const regex = /([^@]+)@(.+)/;

emailAddresses.forEach((email) => {
  const [_, username, domain] = email.match(regex);
  console.log(`Username: ${username}, Domain: ${domain}`);
});
```

Python实现：
```python
import re

email_addresses = [
  "john.doe@example1.com",
  "jane.smith@example2.com",
  "foo@bar.com",
]

regex = re.compile(r"([^@]+)@(.+)")

for email in email_addresses:
  match = regex.match(email)
  if match:
    username, domain = match.groups()
    print(f"Username: {username}, Domain: {domain}")
```

:::tip
Python 中的字符串前面添加 `r`，表示不对字符串字面量进行转义。 
:::

### 代码解读

- 在 JavaScript 中，使用 `/.../` 或 `new Regex(...)`定义正则表达式，而在 Python 中，使用 `re.compile()` 函数创建正则表达式。

### 差异速览

| 特性 | JavaScript | Python |
| --- | --- | --- |
| 创建正则表达式 | `const myReg = /pattern/;` 或 `new Regex(pattern)` | `my_regex = re.compile(r'pattern')` |
| 匹配正则表达式 | `myReg.test(myStr)` | `my_regex.match(my_str)` |
| 查找第一个匹配项 | `myReg.exec(myStr)` | `my_regex.search(my_str)` |
| 查找所有匹配项 | `myStr.match(myReg)` | `my_regex.findall(my_str)` |
| 替换匹配项 | `myStr.replace(myReg, replacement)` | `my_regex.sub(replacement, my_str)` |
| 使用正则表达式拆分字符串 | `myStr.split(myReg)` | `my_regex.split(my_str)` |

:::tip
除了使用 `re.compile()` 预先创建正则表达式外，你还可以直接使用 `re` 模块的 `sub`、'search' 等方法实现相同的功能，如：
```
import re

re.search(r'pattern', my_str)
re.split(r'pattern', my_str)
```
:::

### 相关资源
- https://docs.python.org/3/library/re.html
