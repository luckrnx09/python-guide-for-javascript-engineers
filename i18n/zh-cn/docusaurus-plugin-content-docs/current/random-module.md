---
id: random-module
slug: /random-module
title: random 模块
sidebar_label: random 模块
---

Python 中的 random 模块提供了生成随机数的函数。

### 任务
生成一个包含随机大小写字母、数字的 32 位密码。


#### JavaScript 实现
```javascript
function generatePassword() {
  var length = 32;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  
  return password;
}

var password = generatePassword();
console.log(password);
```

#### Python 实现
```python
import random
import string

def generate_password():
    length = 32
    charset = string.ascii_letters + string.digits
    password = ''.join(random.choice(charset) for _ in range(length))
    return password

password = generate_password()
print(password)
```

### 代码解读
- Python 中 `string` 模块的 `ascii_letters` 包含了所有的小写和大写字母，`digits` 包含了所有的数字。
- Python 使用 `random.randint()` 函数生成给定最小值和最大值之间的随机整数，而在 JavaScript 中，我们使用自定义函数 `getRandomInt()` 利用 `Math.random()` 实现相同的功能。

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 生成 0 到 1 之间的随机数 | `Math.random()` | `random.random()` |
| 在范围内生成随机整数 | `Math.floor(Math.random() * (max - min + 1)) + min` | `random.randint(min_val, max_val)` |
| 从列表中随机选择 1 个元素 | - | `random.choice(sequence)` |
| 对列表中的元素进行洗牌 | - | `random.shuffle(sequence)` |
| 在范围内生成随机浮点数 | - | `random.uniform(min_val, max_val)` |
| 设置随机种子 | - | `random.seed(seed_val)` |

### 相关资源

- https://docs.python.org/zh_CN/3/library/random.html
