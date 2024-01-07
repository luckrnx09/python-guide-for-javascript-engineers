---
id: definition-and-invocation-of-functions
slug: /definition-and-invocation-of-functions
title: 函数的定义和调用
sidebar_label: 函数的定义和调用
---

函数用于对代码逻辑的封装和隔离，在 Python 和 JavaScript 中，函数都被视作一等公民。

### 任务

编写一个打招呼的函数，将传入的个人信息（姓名、年龄、性别）格式化后打印。

#### JavaScript 实现
```javascript
function greet(name, age, gender='保密') {
  console.log(`你好，我是${name}，今年${age}岁，性别${gender}`)
}

greet('张三', 18);
greet('李四', 18, '男');
greet(...['王五', 18, '女']);
```

#### Python 实现
```python
def greet(name, age, gender='保密'):
    print(f"你好，我是{name}，今年{age}岁，性别{gender}")


greet('张三', 18)  # 传入位置参数
greet(age=18, name='张三')  # 传入关键字参数
greet('李四', 18, '男')
greet(*['王五', 18, '女'])

```

### 代码解读

- Python 使用 `def` 关键字定义函数，JavaScript 使用 `function` 关键字定义函数。
- Python 使用冒号 `:` 和缩进表示函数体，JavaScript 使用花括号表示函数体。
- Python 中，除默认值参数之外（如上面的 `gender` 参数），函数的每个参数都是必传的，否则会出现语法错误。而在 JavaScript 中未传递的参数默认值为 `undefined`。
- 在 Python 中，按照顺序传入的参数叫做 **位置参数** ，必须严格按照形参定义顺序传入。此外，还可以使用 `key=value` 的形式向函数传入关键字参数，关键字参数的顺序不必与形参顺序保持一致，位置参数和关键字参数可以一起使用，但 **必须保证调用函数时提供了所有必要参数** 。
- Python 中，可以使用 `my_fn(*[p1, p2, ...])` 的形式传入位置参数，与 JavaScript 中的 `myFn(...[p1, p2, ...])` 类似。

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 函数定义 | `function myFn(params) { ... }` | `def my_fn(params):` |
| 函数调用 | `myFn(params)` | `my_fn(params)` |

:::tip 如何获取函数入参？
使用 `*args` 获取传入的全部位置参数，类型为元组。使用 `**kwargs` 获取传入的全部关键字参数，类型为字典。
```
def some_fn(position_arg, *args, **kwargs):
    print(position_arg)
    print(args)
    print(kwargs)

some_fn('position_arg_value','add_to_args1','add_to_args2',a=1,b=2,c=3)
# 运行结果
# position_arg_value
# ('add_to_args1', 'add_to_args2')
# {'a': 1, 'b': 2, 'c': 3}
```
类似地，Python 也可以使用 `**` 展开一个字典

```
def some_fn(a, b, c):
    print(a, b, c) # 1 2 3

my_dict = {"c": 3, "b": 2, "a": 1} # Python 对字典中键的顺序没有要求
some_fn(**my_dict)

```


`*args` 和 `**kwargs` 虽然方便，但如果函数只定义了这两个形参，IDE 将失去代码提示，同时函数的逻辑也将变得难以理解，需要谨慎使用。
:::

### 相关资源

- https://docs.python.org/3/tutorial/controlflow.html#defining-functions
