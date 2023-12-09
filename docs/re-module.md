---
id: re-module
slug: /re-module
title: Re Module
sidebar_label: Re Module
---

Regular expressions are powerful tools in programming languages for searching, matching, and manipulating text. The `re` module in Python provides support for regular expressions.

### Task

Write a program that accepts a list of email addresses and uses regular expressions to extract the username and domain of each address.

#### JavaScript implementation
```javascript
const emailAddresses = [
  "john.doe@example1.com",
  "jane.smith@example2.com",
  "foo@bar.com",
];

const regex = /([^@]+)@(.+)/;

emailAddresses.forEach((email) => {
  const [_, username, domain] = email.match(regex);
  console.log(`Username: ${username}, Domain: ${domain}`);
});
```

Python implementation:
```python
import re

email_addresses = [
  "john.doe@example1.com",
  "jane.smith@example2.com",
  "foo@bar.com",
]

regex = re.compile(r"([^@]+)@(.+)")

for email in email_addresses:
  match = regex.match(email)
  if match:
    username, domain = match.groups()
    print(f"Username: {username}, Domain: {domain}")
```

:::tip
In Python, prefixing a string with `r` indicates a raw string literal, which treats backslashes as literal characters. 
:::

### Code Highlight

- In JavaScript, regular expressions can be defined using `/.../` or `new Regex(...)`, while in Python, you can create a regular expression using the `re.compile()` function.

### Difference Quick View

| Feature | JavaScript | Python |
| --- | --- | --- |
| Creating a regular expression | `const myReg = /pattern/;` or `new Regex(pattern)` | `my_regex = re.compile(r'pattern')` |
| Matching a regular expression | `myReg.test(myStr)` | `my_regex.match(my_str)` |
| Finding the first match | `myReg.exec(myStr)` | `my_regex.search(my_str)` |
| Finding all matches | `myStr.match(myReg)` | `my_regex.findall(my_str)` |
| Replacing matches | `myStr.replace(myReg, replacement)` | `my_regex.sub(replacement, my_str)` |
| Splitting a string using a regular expression | `myStr.split(myReg)` | `my_regex.split(my_str)` |

:::tip
In addition to using `re.compile()` to create a regular expression, you can also directly use methods like `re.search()` and `re.split()` from the `re` module to achieve the same functionality, such as:
```
import re

re.search(r'pattern', my_str)
re.split(r'pattern', my_str)
```
:::

### Resources
- https://docs.python.org/3/library/re.html
