---
id: create-and-import-packages
slug: /create-and-import-packages
title: 创建和导入包
sidebar_label: 创建和导入包
---

在 Python 中，包是一个包含多个 Python 模块的目录。Python 中的包和模块的概念类似于使用目录和文件在 JavaScript 中组织和结构化代码，但略有不同。


假设有一个名为 “my_package” 的文件夹（在 Python 中称之为包），它包含了许多文件和文件夹：

```
my_package/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
```

横过来是这样：

```
            my_package
           /          \
   module1.py   module2.py   subpackage
                            /           \
                        module3.py   (其他模块)
```

首先，“my_package” 是一个文件夹，它里面有一个名为 “\_\_init\_\_.py” 的文件，它是一个特殊的文件，用户编写一些初始化包的代码，该文件是可选的。

在 “my_package” 包中，还有 “module1.py” 和 “module2.py” 两个模块，它们是编写变量、函数、类的定义的地方。

此外，还有一个名为 “subpackage” 的文件夹，它是一个子包。和 “my_package” 一样。

在 ”subpackage“ 子包中，有一个名为 ”module3.py“ 的模块。这个模块同样包含了一些变量、函数、类的定义，但它是在 “subpackage” 这个特定的上下文中使用的。

现在，可以在应用程序的任一模块中，从包中导入想要的模块

```python
import my_package.subpackage # 当不指定模块名称时，默认导入 __init__.py 中的成员，与 JavaScript 项目中的 index.js 文件作用类似
from my_package.subpackage.module3 import my_function # 从 module3.py 中的导入 my_function
```
如上，由包和模块的搭配，让代码形成了 “命名空间” 。

:::tip
许多 JavaScript 工程师刚接触 Python 包相关的知识时，可能还会遇到代码中的包导入时报 **搜索路径相关错误** 的问题，可通过 [官方文档](https://docs.python.org/3/tutorial/modules.html#the-module-search-path) 中的说明解决。
:::

### 相关资源

- https://docs.python.org/3/tutorial/modules.html#packages

