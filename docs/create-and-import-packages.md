---
id: create-and-import-packages
slug: /create-and-import-packages
title: Create and Import Packages
sidebar_label: Create and Import Packages
---

In Python, a package is a directory that contains multiple Python modules. Packages and modules in Python are similar to organizing and structuring code using directories and files in JavaScript, but with some differences.


Let's say there is a folder named "my_package" (referred to as a package in Python) that contains multiple files and folders:

```
my_package/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py
```

It can be visualized as follows:

```
            my_package
           /          \
   module1.py   module2.py   subpackage
                            /           \
                        module3.py   (other modules)
```

Firstly, "my_package" is a folder that contains a special file called "__init__.py". This file is optional and is used to write initialization code for the package.

Within the "my_package" package, there are two modules: "module1.py" and "module2.py". These modules are the places where variables, functions, and class definitions are written.

Additionally, there is a subpackage called "subpackage" within the "my_package" package.

Inside the "subpackage" subpackage, there is a module called "module3.py". This module also contains variable, function, and class definitions but is specific to the context of the "subpackage".

Now, you can import the desired modules from the package in any module of your application.

```python
import my_package.subpackage  # When not specifying a module name, it imports the members from __init__.py, similar to the index.js file in a JavaScript project
from my_package.subpackage.module3 import my_function  # Importing my_function from module3.py
```

The combination of packages and modules allows the code to form a "namespace".

:::tip
When JavaScript engineers first encounter Python package-related knowledge, they may encounter **search path-related errors** when importing packages in the code. These issues can be resolved by following the explanations provided in the [official documentation](https://docs.python.org/3/tutorial/modules.html#the-module-search-path).
:::

### Resources

- https://docs.python.org/3/tutorial/modules.html#packages
