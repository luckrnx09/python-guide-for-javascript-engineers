---
id: class-and-instance
slug: /class-and-instance
title: 类和对象
sidebar_label: 类和对象
---

类和对象用于创建和使用可重用的代码。类是创建对象的蓝图，对象是类的特定实例。

### 任务

创建一个 `Circle` 的类，该类可以计算圆的面积和周长。

#### JavaScript 实现
```typescript
class Circle {
  static pi = Math.PI
  constructor(radius) {
    this.radius = radius;
  }

  static createCircle(radius){
    return new Circle(radius)
  }

  getArea() {
    return Circle.pi * this.radius ** 2;
  }

  getCircumference() {
    return 2 * Circle.pi * this.radius;
  }

  toString() {
    return `[Circle]: radius:${this.radius}`
  }
}

const circle = new Circle(5); // 或 Circle.createCircle(5)
console.log(circle.toString()); // [Circle]: radius:5
console.log(circle.getArea()); // 78.53981633974483
console.log(circle.getCircumference()); // 31.41592653589793
```
:::tip
class 中的 `static` 关键字原来是 TypeScript 提供的特性，但从 ES2022 起已经在 JavaScript 中[原生支持](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static)了。 除此之外，TypeScript 还提供了 `public`、`private`、`protected` 访问修饰符。
:::

#### Python 实现
```python
import math

class Circle:
  pi = math.pi
  def __init__(self, radius):
    self.radius = radius

  @classmethod
  def create_circle(cls,radius):
    return Circle(radius)
  
  def get_area(self):
    return Circle.pi * self.radius ** 2

  def get_circumference(self):
    return 2 * Circle.pi * self.radius

  def __str__(self):
    return f"[Circle] radius:{self.radius}"

circle = Circle(5) # 或 Circle.create_circle(5)
print(circle) # [Circle] radius:5
print(circle.get_area()) # 78.53981633974483
print(circle.get_circumference()) # 31.41592653589793
```

### 代码解读

- Python 像调用函数一样创建类实例，JavaScript 必须使用 `new` 关键字。
- Python 中使用 `__init__` 方法作为构造函数，JavaScript 使用 `constructor` 方法。
- Python 类的实例方法的第一个参数必须为 `self` ，它表示类的实例。类方法需要使用 `classmethod` 装饰器进行标记，第一个参数必须为 `cls` ，表示当前类，也可以使用 `staticmethod` 装饰器，它跟普通函数一样，不需要第一个参数为 `cls`。
- Python 使用缩进来定义类中的代码块，JavaScript 使用大括号 `{}` 表示代码块。
- Python 类中以 `_` 开头的成员约定为私有成员，外部不应该直接使用，在 TypeScript 中可以使用 `private`、`protected` 访问修饰符对可访问性进行限制。
- Python 中以 `__` 开头的为一般为系统级的特殊成员，在外部不可访问。

:::tip Python 类中的特殊方法
Python 中有许多常用的特殊方法，开发者可以在类中对它进行重写。

以下为部分常见的特殊方法
- \_\_init__: 类构造函数，用于对象的初始化。当创建类的实例时，方法会被自动调用。
- \_\_str__: 用于返回对象的字符串表示。当使用 `print` 函数打印对象时，会调用该方法。
- \_\_repr__: 用于返回对象的可打印字符串表示。当在交互式环境中直接输入对象名时，会调用该方法。
- \_\_len__: 用于返回对象的长度。当使用 `len` 函数获取对象的长度时，会调用该方法。
- \_\_getitem__: 用于通过索引访问对象的元素。当使用索引运算符（[]）访问对象时，会调用该方法。
- \_\_setitem__: 用于通过索引设置对象的元素。当使用索引运算符（[]）设置对象时，会调用该方法。
- \_\_delitem__: 用于通过索引删除对象的元素。当使用 `del` 关键字删除对象的元素时，会调用该方法。
- \_\_getattr__: 用于在访问不存在的属性时触发。当访问对象不存在的属性时，会调用该方法。
- \_\_setattr__: 用于在设置属性时触发。当设置对象的属性时，会调用该方法。
- \_\_delattr__: 用于在删除属性时触发。当使用 `del` 关键字删除对象的属性时，会调用该方法。
:::

### 差异速览
| 特性                           | JavaScript                                            | Python                                                |
|-----------------------------------------|---------------------------------------------------|---------------------------------------------------|
| 定义类                                         | ```class ClassName {}```                                  | ```class ClassName:```                                    |
| 创建对象                                     | ```let myObj = new ClassName();```                          | ```my_obj = ClassName()```                                 |
| 构造函数                                          | ```constructor() {}```                                  | ```def __init__(self):```                                  |
| 类属性赋值                                             | ```this.propertyName = value;```                     | ```self.propertyName = value```                      |
| 类方法                                              | ```methodName() {}```                                  | ```def methodName(self):```                               |
| 继承                                                   | ```class ChildClass extends ParentClass {}``` | ```class ChildClass(ParentClass):```             |
| 对象销毁                                     | 无内置支持                  | ```def __del__(self):```                                 |

### 相关资源
- https://docs.python.org/3/tutorial/classes.html
- https://docs.python.org/3/tutorial/classes.html#inheritance

