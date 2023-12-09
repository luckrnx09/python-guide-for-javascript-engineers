---
id: read-and-write-files
slug: /read-and-write-files
title: File Read and Write
sidebar_label: File Read and Write
---

File read and write is a common IO operation in programming.

### Task

There is a file called books.txt. Read the file and check if it contains the four great classical novels of China. If any novels are missing, add them to the file.

#### JavaScript implementation
```javascript
import fs from 'fs';

const data = fs.readFileSync('books.txt', 'utf8');
const books = data.split('\n');
const classics = ['红楼梦', '西游记', '水浒传', '三国演义'];
const missingClassics = classics.filter(classic => !books.includes(classic));

if (missingClassics.length === 0) {
    console.log('The file already contains the four great classical novels of China.');
    return;
}

const missingClassicsText = missingClassics.join('\n');
fs.appendFileSync('books.txt', `\n${missingClassicsText}`, 'utf8');
console.log(`The missing novels have been added to the file: ${missingClassicsText}`);
```

#### Python implementation
```python
# Read the contents of the file books.txt
with open('books.txt', 'r', encoding='utf-8') as file:
    books = file.read().splitlines()

# Check if the file contains the four great classical novels of China
classics = ['红楼梦', '西游记', '水浒传', '三国演义']
missing_classics = [classic for classic in classics if classic not in books]

if len(missing_classics) == 0:
    print('The file already contains the four great classical novels of China.')
else:
    # Add the missing novels to the file
    with open('books.txt', 'a', encoding='utf-8') as file:
        file.write('\n' + '\n'.join(missing_classics))
    print(f'The missing novels have been added to the file: {", ".join(missing_classics)}')
```

### Code Highlight

- In Python, use the `open()` function to open a file and use the `with` statement to ensure the file is properly closed.
- In Python, use `'w'`, `'r'`, `'a'` to specify the write, read, and append access modes of a file.

### Difference Quick View

| Feature               | JavaScript                              | Python                                  |
|-----------------------|-----------------------------------------|-----------------------------------------|
| Read file             | `fs.readFileSync(file, 'utf-8')`       | `open(file, 'r', encoding='utf-8').read()`     |
| Write to file         | `fs.writeFileSync(file, data, 'utf-8')` | `open(file, 'w', encoding='utf-8').write()`     |
| Append to file        | `fs.appendFileSync(file, data, 'utf-8')` | `open(file, 'a', encoding='utf-8').write()`     |

### Resources

- https://docs.python.org/3/tutorial/inputoutput.html
