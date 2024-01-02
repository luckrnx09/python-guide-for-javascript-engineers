---
id: class-and-instance
slug: /class-and-instance
title: Class and Object
sidebar_label: Class and Object
---

Classes and objects are used to create and use reusable code. A class is a blueprint for creating objects, and an object is a specific instance of a class.

### Task

Create a class called `Circle` that can calculate the area and circumference of a circle.

#### JavaScript implementation
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

const circle = new Circle(5); // or Circle.createCircle(5)
console.log(circle.toString()); // [Circle]: radius:5
console.log(circle.getArea()); // 78.53981633974483
console.log(circle.getCircumference()); // 31.41592653589793
```
:::tip
The `static` keyword in classes is a feature provided by TypeScript, but starting from ES2022, it has been [natively supported](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) in JavaScript. In addition, TypeScript also provides access modifiers such as `public`, `private`, and `protected`.
:::

#### Python implementation
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

circle = Circle(5) # or Circle.create_circle(5)
print(circle) # [Circle] radius:5
print(circle.get_area()) # 78.53981633974483
print(circle.get_circumference()) # 31.41592653589793
```

### Code Highlight

- In Python, classes are created by calling the class name like a function, while in JavaScript, the `new` keyword must be used.
- In Python, the `__init__` method is used as the constructor, while in JavaScript, the `constructor` method is used.
- In Python, the first parameter of instance methods must be `self`, which represents the instance of the class. Class methods need to be marked with the `classmethod` decorator, and the first parameter must be `cls`, which represents the current class. Alternatively, the `staticmethod` decorator can be used, which behaves like a regular function and does not require the first parameter to be `cls`.
- In Python, indentation is used to define code blocks within a class, while JavaScript uses curly braces `{}` to denote code blocks.
- In Python, members starting with `_` are conventionally considered private and should not be accessed directly from outside the class. In TypeScript, the accessibility can be restricted using access modifiers such as `private` and `protected`.
- In Python, members starting with `__` are generally system-level special members and are not accessible from outside.

:::tip Special Methods in Python Classes
Python has many commonly used special methods that can be overridden in a class.

Here are some of the commonly used special methods:
- `__init__`: The class constructor used for object initialization. This method is automatically called when creating an instance of the class.
- `__str__`: Returns a string representation of an object. This method is called when using the `print` function to print an object.
- `__repr__`: Returns a printable string representation of an object. This method is called when directly inputting the object name in an interactive environment.
- `__len__`: Returns the length of an object. This method is called when using the `len` function to get the length of an object.
- `__getitem__`: Allows accessing elements of an object using indexing. This method is called when using the indexing operator (`[]`) to access elements of an object.
- `__setitem__`: Allows setting elements of an object using indexing. This method is called when using the indexing operator (`[]`) to set elements of an object.
- `__delitem__`: Allows deleting elements of an object using indexing. This method is called when using the `del` keyword to delete elements of an object.
- `__getattr__`: Triggered when accessing a non-existent attribute. This method is called when accessing an attribute that does not exist in an object.
- `__setattr__`: Triggered when setting an attribute. This method is called when setting an attribute of an object.
- `__delattr__`: Triggered when deleting an attribute. This method is called when using the `del` keyword to delete an attribute of an object.
:::

### Difference Quick View
| Feature                           | JavaScript                                            | Python                                                |
|-----------------------------------------|---------------------------------------------------|---------------------------------------------------|
| Defining a class                                         | ```class ClassName {}```                                  | ```class ClassName:```                                    |
| Creating objects                                     | ```let myObj = new ClassName();```                          | ```my_obj = ClassName()```                                 |
| Constructor                                          | ```constructor() {}```                                  | ```def __init__(self):```                                  |
| Assigning class properties                                             | ```this.propertyName = value;```                     | ```self.propertyName = value```                      |
| Class methods                                              | ```methodName() {}```                                  | ```def methodName(self):```                               |
| Inheritance                                                   | ```class ChildClass extends ParentClass {}``` | ```class ChildClass(ParentClass):```             |
| Object destruction                                     | No built-in support                  | ```def __del__(self):```                                 |

### Resources
- https://docs.python.org/3/tutorial/classes.html
- https://docs.python.org/3/tutorial/classes.html#inheritance
