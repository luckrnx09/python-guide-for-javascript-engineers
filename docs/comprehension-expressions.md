---
id: comprehension-expressions
slug: /comprehension-expressions
title: List Comprehensions and Dictionary Comprehensions
sidebar_label: List Comprehensions and Dictionary Comprehensions
---

In Python, list comprehensions and dictionary comprehensions provide a concise way to create lists and dictionaries.

### Task
1. Generate a list of squares of numbers from 1 to 10, then filter out the odd numbers from the list.
2. Generate a dictionary of squares of numbers from 1 to 10, with the numbers as keys and the squares as values, then filter out the key-value pairs where the value is greater than or equal to 5.

#### JavaScript implementation
```javascript
// Task 1:
const numbers = Array.from({ length: 10 }, (_, i) => (i + 1) ** 2);
const filteredNumbers = numbers.filter(num => num % 2 === 0);
console.log(filteredNumbers);

// Task 2:
const dictionary = {};
for (let i = 1; i <= 10; i++) {
  dictionary[i] = i ** 2;
}
const filteredDictionary = Object.fromEntries(
  Object.entries(dictionary).filter(([key, value]) => value < 5)
);
console.log(filteredDictionary);
```

#### Python implementation
```python
# Task 1:
squared_numbers = [x**2 for x in range(1, 11)]
filtered_numbers = [num for num in squared_numbers if num % 2 == 0]
print(filtered_numbers)

# Task 2:
squared_dict = {x: x**2 for x in range(1, 11)}
filtered_dict = {key: value for key, value in squared_dict.items() if value < 5}
print(filtered_dict)
```
:::tip
List comprehensions and dictionary comprehensions are specific to Python and do not have equivalent syntax and features in JavaScript.
:::

### Code Highlight
- Python list comprehensions are enclosed in square brackets and return a new list. The syntax is `[expression for item in list if condition]`.
- Python dictionary comprehensions are enclosed in curly braces and return a new dictionary. The syntax is `{key_expression: value_expression for item in iterable if condition}`.
- Python list comprehensions and dictionary comprehensions can also include more complex conditional statements, allowing for more advanced filtering and transformation of the original list/dictionary.

### Resources

- [Python List Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)
- [Python Dictionary Comprehensions](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
