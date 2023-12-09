---
id: try-except-statements
slug: /try-except-statements
title: Try Except Statements
sidebar_label: Try Except Statements
---

The `try-except` statement is used to handle exceptions in Python. It allows you to define a block of code that may raise an exception, and specify how to handle the exception, similar to the `try-catch` syntax in JavaScript.

### Task

Design a program that reads a non-existent file and displays a friendly error message.

#### JavaScript implementation
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

#### Python implementation
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

### Code Highlight
- Python uses `try-except` to handle exceptions, while JavaScript uses `try-catch`.
- Python allows multiple `except` blocks to handle different types of exceptions, while JavaScript only allows one `catch` block and uses conditional statements inside the `catch` block to achieve the same functionality.
- Python converts the exception object to a string to get the exception information, while JavaScript typically uses the `message` property of the exception object to get the error message.
- Both Python and JavaScript can use a `finally` block to write logic that will be executed regardless of whether an exception occurs.

:::tip Handling Specific Types of Exceptions in Python
Python allows multiple `except` blocks to be written in a `try-except` statement to catch different types of exceptions, for example:
```
try:
    # Code that may raise an exception
    a = 10 / 0  # Raises ZeroDivisionError
    b = int('abc')  # Raises ValueError
    raise Exception('This is a exception')
except ZeroDivisionError:
    # Code to handle ZeroDivisionError
    print("Cannot divide by zero!")
except ValueError:
    # Code to handle ValueError
    print("Cannot convert string to integer!")
except Exception as e:
    # Code to handle other types of exceptions
    print("An error occurred:", str(e))
```
It is important to note that although multiple `except` blocks are written, only one `except` block will be executed at a time. When multiple `except` blocks are written, the catching range of the exceptions should be from small to large.

In the above code, the last `Exception` type of exception is the base class for all exceptions, and it will only be executed when none of the previous exception types match. This ensures that the program can always catch any error that occurs.

In Python code, `raise` can be used to throw a caught exception or a custom exception, similar to `throw` in JavaScript.
:::

### Resources

- https://docs.python.org/3/tutorial/errors.html#handling-exceptions
