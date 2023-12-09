---
id: naming-rules-for-variables
slug: /naming-rules-for-variables
title: 变量命名规则
sidebar_label: 变量命名规则
---

为了防止写出 “JavaScript 味” 的 Python 代码，我们需要了解 Python 中的变量命名规则和约定。


### 命名约定

以下是JavaScript 和 Python 都需要遵循的命名规则：
 - 变量名必须以字母或下划线(_)开头。
 - 变量名只能包含字母、数字和下划线(_)。
 - 避免使用保留关键字或内置函数名作为变量名。

命名规则只是在语法上让代码能运行起来，而遵循适当的命名约定是衡量代码可读性的重要标准。
在 Python 中，除了 **变量名和函数名单词之间应使用下划线(_)分隔，使用小写字母** 之外，其它的命名约定与 JavaScript 一样。

以下是它们之间的异同：


| 名称                  | JavaScript               | Python                    |
|-----------------------|--------------------------|---------------------------|
| 变量名          | userName               | user_name              |
| 类名            | UserPermission         | UserPermission         |
| 函数名          | getById                 | get_by_id             |
| 常量名          | DEFAULT_LOGO_URL       | DEFAULT_LOGO_URL      |



### 不能使用的变量名

在 JavaScript 中，我们常常使用 `str` 变量名表示一个字符串。

```javascript
const str = '123'
```

而在 Python 中，`str` 是一个内置函数，用于将值转换为字符串类型。在 Python 中，如果使用 `str` 作为变量名将会覆盖该内置函数，在复杂的系统中，这可能导致无法预料的执行结果。

阅读如下 Python 代码：

```python
print(str(123)) # 将整数 123 转换为字符串
str = '123' # 覆盖内置函数 str
print(str(123)) # TypeError: 'str' object is not callable
```

该代码在执行过程中会抛出异常，因为 `str` 现在是字符串类型。

Python 中的内置函数还有很多，下表中列出的是一些常容易让 JavaScript 工程师当做 Python 变量名的内置函数名称，在编写 Python 代码时应避免使用它们。


|   内置函数   |               作用               |
|----------|--------------------------------|
|   str    | 将对象转换为字符串              |
|   dict   | 创建字典对象                    |
|   list   | 创建列表对象                    |
|   set    | 创建集合对象                    |
|  tuple   | 创建元组对象                    |
|   int    | 将对象转换为整数                |
|  float   | 将对象转换为浮点数              |
|   bool   | 将对象转换为布尔值              |
|   len    | 返回对象的长度                  |
|  print   | 将对象打印到控制台              |


你可以 [点击这里](https://docs.python.org/3/library/functions.html) 查看 Python 中的全部内置函数。

:::tip
如果你使用 PyCharm IDE 编写 Python 代码，当使用了内置函数作为变量名时，变量名下方会有下划线警告。
:::

### 相关资源

- https://www.python.org/dev/peps/pep-0008/#naming-conventions


