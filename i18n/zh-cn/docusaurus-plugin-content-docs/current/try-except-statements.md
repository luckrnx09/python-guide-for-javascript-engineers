---
id: try-except-statements
slug: /try-except-statements
title: try-except 语句
sidebar_label: try-except 语句
---

`try-except` 语句用于处理 Python 中的异常。它允许你定义可能引发异常的代码块，并指定如何处理异常，类似于 JavaScript 中的 `try-catch` 语法。

### 任务

设计一个程序，读取一个不存在的文件，并显示一个友好的异常信息。

#### JavaScript 实现
```javascript
const fs = require('fs');

try {
  const content = fs.readFileSync('file-not-exist.txt', 'utf-8');
  const lines = content.split('\n');
  
  for (let line of lines) {
    if (line.trim() !== '') {
      console.log(line);
    }
  }
  
  const firstLine = lines[0].trim();
  console.log(`First line: ${firstLine}`);
  
  const numbers = lines.map(Number);
  console.log(`Sum of numbers: ${numbers.reduce((a, b) => a + b, 0)}`);
  
} catch (error) {
  console.error(`An error occurred: ${error.message}`);
}
```

#### Python 实现
```python
try:
    with open('file-not-exist.txt', 'r') as file:
        content = file.read()
        lines = content.split('\n')
        
        for line in lines:
            if line.strip() != '':
                print(line)
        
        first_line = lines[0].strip()
        print(f'First line: {first_line}')
        
        numbers = [int(line) for line in lines]
        print(f'Sum of numbers: {sum(numbers)}')
        
except Exception as error:
    print(f'An error occurred: {str(error)}')
```

### 代码解读
- Python 使用 `try-except` 处理异常，JavaScript 使用 `try-catch` 处理异常。
- Python 可以使用多个 `except` 块根据异常的实例类型来处理不同的异常，JavaScript 只允许一个 `catch` 块，只能在 `catch` 块中对异常对象的类型进行判断以实现相同的功能。
- Python 通过将异常对象转换为字符串以获取异常信息，JavaScript 通常通过异常对象的 `message` 属性获取错误信息。
- Python 和 JavaScript 都可以使用 `finally` 块编写无论是否发生异常都将执行的逻辑。

:::tip Python 处理特定类型异常
Python 允许在 `try-except` 语句中编写多个 `except` 块以捕获不同类型的异常，如：
```
try:
    # 可能会引发异常的代码
    a = 10 / 0  # 除以 0 会引发 ZeroDivisionError
    b = int('abc')  # 'abc' 无法转换为整数会引发 ValueError
    raise Exception('This is a exception')
except ZeroDivisionError:
    # 处理 ZeroDivisionError 异常的代码
    print("除数不能为零！")
except ValueError:
    # 处理 ValueError 异常的代码
    print("无法将字符串转换为整数！")
except Exception as e:
    # 处理其他类型的异常的代码
    print("发生了其他异常:", str(e))
```
需要注意，虽然上面的代码编写了多个 `except` 块，但一次最多只会有一个 `except` 块会被命中，当编写了多个 `except` 块时，捕获异常的范围应从小到大。

上面的代码中，最后一个 `Exception` 类型的异常是所有异常的基类，只有当前面所有的异常类型都不匹配时，它才会执行，这让程序不论发生什么错误都始终能被捕获。

在 Python 代码中，使用 `raise` 可以将捕获到的异常或自定义的异常进行抛出，与 JavaScript 中的 `throw` 功能一样。
:::

### 相关资源

- https://docs.python.org/3/tutorial/errors.html#handling-exceptions

