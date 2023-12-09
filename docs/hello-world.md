---
id: hello-world
slug: /hello-world
title: Hello World
sidebar_label: Hello World
---

The "Hello World" program is typically the first program that beginners write when learning a new programming language. It is a simple program that prints the phrase "Hello, World!" to the console.

### Task

Create a program that prompts the user to enter their name, and then prints a greeting message "Hello, xx!" using that name.

#### JavaScript implementation

```javascript title="hello.js"
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});
```
Run the above example code by executing the command `node hello.js` in the terminal.


#### Python implementation

```python title="hello.py"
name = input("Enter your name: ")
print(f"Hello, {name}!")
```

Run the above example code by executing the command `python hello.py` in the terminal.

### Code Highlight

- In Python, use the `input()` function to get user input, whereas in JavaScript, use the `readline` series of APIs.
- In Python, use `f"..."` for string interpolation, whereas in JavaScript, use backticks (`).
- In Python, use the `print()` function to display output to the console, whereas in JavaScript, use `console.log()` function.

### Difference Quick View

| Feature | JavaScript | Python |
|---------|------------|--------|
| File extension | `.js` | `.py` |
| Execution command | `node filename.js` | `python filename.py` |
| Printing | `console.log()` | `print()` |
| Comments | `// comment` or `/** comment */` | `# comment` or `""" comment """` |

### Resources

- https://docs.python.org/3/library/functions.html#print
