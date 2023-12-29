---
id: create-and-import-modules
slug: /create-and-import-of-modules
title: 创建和导入模块
sidebar_label: 创建和导入模块
---

一个庞大的应用程序通常由许多模块构成，模块在软件开发中是代码组织的独立单元，每一个 `.py` 文件都是一个 Python 模块，每一个 `.js` 文件都是一个 JavaScript 模块。

### 任务

设计一个程序，定义一个计算器模块，提供加减乘除四则运算功能。在另一个模块中引入该模块，计算并打印 `1234 * 4321` 的结果。

#### JavaScript 实现
```javascript title="calculator.js"
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error("除数不能为0");
  }
  return a / b;
}
```
```javascript title="main.js"
import { multiply } from './calculator.js';
console.log(multiply(1234, 4321));
```

#### Python 实现
```python title="calculator.py"
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为0")
    return a / b
```

```python title="main.py"
import calculator
result = calculator.multiply(1234, 4321)
print(result)
```

### 代码解读
- Python 和 JavaScript 都使用 `import` 关键字导入模块。
- Python 模块成员不需要使用 `export` 关键字进行导出，模块中全部成员都将自动导出。

:::danger Python 模块中的私有成员
在 Python 中，所有在模块内可以访问的变量、函数、类等都是自动导出的，可以被其他模块任意引用，Python 没有提供保护模块私有成员的方法。若模块中的某些成员不希望被其他模块导入，可以按照约定，使用 `_` 或 `__` 开头对成员进行命名。同时，在使用第三方模块时，我们也要遵守这个约定，不要直接导入和使用以下划线开头的成员。
:::

### 差异速览

特性 | JavaScript | Python
--- | --- | ---
导入模块 | `import foo from 'module'` | `import module`
从模块导入特定成员 | `import { foo, bar } from 'module'` | `from module import foo, bar`
将模块导入为别名 | `import { foo as alias } from 'module'` | `from module import foo as alias`
将整个模块导入为别名 | `import * as alias from 'module'` | `import module as alias`
默认导出 | `export default module` | `-`
命名导出 | `export foo` | `-`

:::tip
Python 中的模块名称由文件名决定，文件名称不能包含 `-` ，否则无法被其他模块引用。

Python 在文件名与模块名之间存在一些转换约定如下：

文件名 | 模块名 | 说明
--- | --- | --- |
my_module.py | my_module | 模块名与文件保持一致 |
myModule.py | mymodule | 大写字母自动转换为小写 |

:::

### 相关资源

- https://docs.python.org/3/tutorial/modules.html


