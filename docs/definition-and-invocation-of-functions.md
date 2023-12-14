---
id: definition-and-invocation-of-functions
slug: /definition-and-invocation-of-functions
title: Definition and Invocation of Functions
sidebar_label: Definition and Invocation of Functions
---

Functions are used to encapsulate and isolate code logic. In Python and JavaScript, functions are considered first-class citizens.

### Task

Write a function that greets a person by formatting their personal information (name, age, gender) and printing it.

#### JavaScript implementation
```javascript
function greet(name, age, gender='Secret') {
  console.log(`Hello, I am ${name}, ${age} years old, ${gender}`)
}

console.log(greet('Bob', 18));
console.log(greet('Tom', 18, 'male'));
console.log(greet(...['Amy', 18, 'female']));
```

#### Python implementation
```python
def greet(name, age, gender='Secret'):
    print(f"Hello, I am {name}, {age} years old, {gender}")

print(greet('Bob', 18)) # Positional arguments
print(greet(age=18,name='Bob')) # Keyword arguments
print(greet('Tom', 18, 'male')) 
print(greet(*['Amy', 18, 'female'])) 
```

### Code Highlight

- In Python, functions are defined using the `def` keyword, while in JavaScript, the `function` keyword is used.
- In Python, the function body is indicated by a colon `:` and indentation, while in JavaScript, it is enclosed in curly braces.
- In Python, every parameter of a function, except for those with default values (like the `gender` parameter above), is required. If a required parameter is not provided, a syntax error will occur. In JavaScript, parameters that are not passed are assigned the value `undefined` by default.
- In Python, parameters passed in the order they are defined are called **positional arguments**, and they must be passed in the exact order as defined in the function signature. Additionally, keyword arguments can be passed using the `key=value` syntax. The order of keyword arguments does not need to match the order of the parameters. Positional and keyword arguments can be used together, but **all necessary arguments must be provided when calling the function**.
- In Python, positional arguments can be passed using the syntax `my_fn(*[p1, p2, ...])`, similar to `myFn(...[p1, p2, ...])` in JavaScript.

### Difference Quick View

| Feature | JavaScript | Python |
|---------|------------|--------|
| Function Definition | `function myFn(params) { ... }` | `def my_fn(params):` |
| Function Invocation | `myFn(params)` | `my_fn(params)` |

:::tip How to get function arguments?
Use `*args` to get all positional arguments passed to the function. The arguments will be stored in a tuple. Use `**kwargs` to get all keyword arguments passed to the function. The arguments will be stored in a dictionary.
```
def some_fn(position_arg, *args, **kwargs):
    print(position_arg)
    print(args)
    print(kwargs)

some_fn('position_arg_value','add_to_args1','add_to_args2',a=1,b=2,c=3)
# Output
# position_arg_value
# ('add_to_args1', 'add_to_args2')
# {'a': 1, 'b': 2, 'c': 3}
```
Similarly, Python can expand a dictionary using `**`.

```
def some_fn(a, b, c):
    print(a, b, c) # 1 2 3

my_dict = {"c": 3, "b": 2, "a": 1} # Python has no requirement for the order of keys in a dictionary
some_fn(**my_dict)

```

While `*args` and `**kwargs` are convenient, if a function only has these parameters, IDE code suggestions will be lost, and the logic of the function may become harder to understand. Therefore, use them with caution.
:::

### Resources

- https://docs.python.org/3/tutorial/controlflow.html#defining-functions
