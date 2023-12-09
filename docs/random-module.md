---
id: random-module
slug: /random-module
title: Random Module
sidebar_label: Random Module
---

The random module in Python provides functions for generating random numbers.

### Task
Generate a 32-character password that contains random lowercase and uppercase letters, as well as numbers.

#### JavaScript implementation
```javascript
function generatePassword() {
  var length = 32;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var password = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  
  return password;
}

var password = generatePassword();
console.log(password);
```

#### Python implementation
```python
import random
import string

def generate_password():
    length = 32
    charset = string.ascii_letters + string.digits
    password = ''.join(random.choice(charset) for _ in range(length))
    return password

password = generate_password()
print(password)
```

### Code Highlight
- The `string` module in Python contains `ascii_letters` which includes all lowercase and uppercase letters, and `digits` which includes all digits.
- In Python, `random.randint()` function is used to generate a random integer between the given minimum and maximum values. In JavaScript, we use a custom function `getRandomInt()` with `Math.random()` to achieve the same functionality.

### Difference Quick View

| Feature | JavaScript | Python |
|---------|------------|--------|
| Generate a random number between 0 and 1 | `Math.random()` | `random.random()` |
| Generate a random integer within a range | `Math.floor(Math.random() * (max - min + 1)) + min` | `random.randint(min_val, max_val)` |
| Choose a random element from a list | - | `random.choice(sequence)` |
| Shuffle the elements in a list | - | `random.shuffle(sequence)` |
| Generate a random float within a range | - | `random.uniform(min_val, max_val)` |
| Set a random seed | - | `random.seed(seed_val)` |

### Resources

- [Python Random Module Documentation](https://docs.python.org/zh_CN/3/library/random.html)
