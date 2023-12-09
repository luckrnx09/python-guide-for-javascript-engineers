---
id: arithmetic-operation
slug: /arithmetic-operation
title: Arithmetic Operations with Basic Data Types
sidebar_label: Arithmetic Operations
---

Arithmetic operators in Python are used to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

### Task

Create a program that defines two variables of number data types and performs various arithmetic operations on them. The program should perform the following tasks:

1. Add the two numbers and print the sum.
2. Subtract the first number from the second number and print the difference.
3. Multiply the two numbers and print the product.
4. Divide the first number by the second number and print the quotient.
5. Calculate the remainder when the first number is divided by the second number and print the result.
6. Raise the first number to the power of the second number and print the result.
7. Increment the value of the first number by 1 and print the updated value.
8. Decrement the value of the second number by 1 and print the updated value.

#### JavaScript implementation
```javascript
let num1 = 10;
let num2 = 5;

// 1. Addition
let sum = num1 + num2;
console.log("Sum:", sum);

// 2. Subtraction
let difference = num1 - num2;
console.log("Difference:", difference);

// 3. Multiplication
let product = num1 * num2;
console.log("Product:", product);

// 4. Division
let quotient = num1 / num2;
console.log("Quotient:", quotient);

// 5. Remainder
let remainder = num1 % num2;
console.log("Remainder:", remainder);

// 6. Exponentiation
let power = num1 ** num2;
console.log("Power:", power);

// 7. Increment
num1++;
console.log("Updated num1 after increment:", num1);

// 8. Decrement
num2--;
console.log("Updated num2 after decrement:", num2);
```

#### Python implementation
```python
num1 = 10
num2 = 5

# 1. Addition
sum = num1 + num2
print("Sum:", sum)

# 2. Subtraction
difference = num1 - num2
print("Difference:", difference)

# 3. Multiplication
product = num1 * num2
print("Product:", product)

# 4. Division
quotient = num1 / num2
print("Quotient:", quotient)

# 5. Remainder
remainder = num1 % num2
print("Remainder:", remainder)

# 6. Exponentiation
power = num1 ** num2
print("Power:", power)

# 7. Increment
num1 += 1
print("Updated num1 after increment:", num1)

# 8. Decrement
num2 -= 1
print("Updated num2 after decrement:", num2)
```

### Code Highlight
- The syntax for addition, subtraction, multiplication, division, remainder, and exponentiation in Python is the same as in JavaScript.
- Python does not have the `++` and `--` operators. Instead, `+=` and `-=` are used to increment or decrement variables.

### Difference Quick View

| Feature | JavaScript | Python |
|---------|------------|--------|
| Addition | `+` | `+` |
| Subtraction | `-` | `-` |
| Multiplication | `*` | `*` |
| Division | `/` | `/` |
| Integer Division | - | `//` |
| Remainder | `%` | `%` |
| Exponentiation | `**` | `**` |
| Increment | `++` <br /> `+=1` | `+= 1` |
| Decrement | `--` <br/> `+=1` | `-= 1` |

:::danger
In Python, arithmetic operations can only be performed between **compatible** data types. For example, the result of a calculation between a floating-point number and an integer will be a floating-point number. However, performing arithmetic operations between a string and a number will result in an error. To perform arithmetic operations between a number and a string, one of them must be converted to the appropriate data type.
:::

### Resources

- https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex
