---
id: custom-exception-classes
slug: /custom-exception-classes
title: Custom Exceptions
sidebar_label: Custom Exceptions
---

In Python, you can create custom exceptions to handle specific error scenarios. This allows you to create more meaningful and descriptive error messages for your programs.

### Task

Build a program that calculates the area of various shapes. Use custom exceptions to handle different types of shape calculation errors.

#### JavaScript implementation
```javascript
class InvalidShapeException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidShapeException";
  }
}

class NegativeDimensionException extends Error {
  constructor(message) {
    super(message);
    this.name = "NegativeDimensionException";
  }
}

function calculateRectangleArea(length, width) {
  if (typeof length !== "number" || typeof width !== "number") {
    throw new InvalidShapeException("Invalid dimensions. Length and width must be numbers.");
  }
  if (length <= 0 || width <= 0) {
    throw new NegativeDimensionException("Invalid dimensions. Length and width must be positive numbers.");
  }
  return length * width;
}

console.log(calculateRectangleArea(5, 4)); // Output: 20
console.log(calculateRectangleArea("5", 4)); // Throws InvalidShapeException
console.log(calculateRectangleArea(-5, 4)); // Throws NegativeDimensionException
```

#### Python implementation
```python
# Define custom exceptions
class InvalidShapeException(Exception):
    def __init__(self, message):
        super().__init__(message)

class NegativeDimensionException(Exception):
    def __init__(self, message):
        super().__init__(message)

def calculate_rectangle_area(length, width):
    if not isinstance(length, (int, float)) or not isinstance(width, (int, float)):
        raise InvalidShapeException("Invalid dimensions. Length and width must be numbers.")
    if length <= 0 or width <= 0:
        raise NegativeDimensionException("Invalid dimensions. Length and width must be positive numbers.")
    return length * width

print(calculate_rectangle_area(5, 4)) # Output: 20
print(calculate_rectangle_area("5", 4)) # Raises InvalidShapeException
print(calculate_rectangle_area(-5, 4)) # Raises NegativeDimensionException
```

### Code Highlight

- The base class for exceptions in Python is `Exception`, while in JavaScript it is `Error`. Both languages use `class` to inherit from the base class and create custom exceptions.
- Python uses the `isinstance()` function to check the type of a variable, while JavaScript uses `typeof` and `instanceof`.

### Common API

| Feature                  | JavaScript                       | Python                            |
|---------------------------|----------------------------------|-----------------------------------|
| Creating custom exception | `class CustomException extends Error {}`    | `class CustomException(Exception):`   |
| Throwing custom exception | `throw new CustomException(message)`        | `raise CustomException(message)`          |

### Resources

- [Python Documentation on Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)
