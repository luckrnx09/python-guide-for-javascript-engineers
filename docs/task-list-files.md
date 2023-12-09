---
id: task-list-files
slug: /task-list-files

title: File Browser
sidebar_label: File Browser
---

### Task
The `ls` command is a powerful file viewing command in Linux.

Please implement a similar command-line tool in Python. It should support the following command-line options:
- `-a` or `--all`: Include hidden files in the file list.
- `-w` or `--human-readable`: Display file sizes in a human-readable format.
- `-h` or `--help`: Display help information.

#### Python implementation

```python title="ls.py"
import os
import argparse
import sys

def ls(directory='.', show_hidden=False, human_readable=False):
    file_list = os.listdir(directory)
    file_list.sort()

    if not show_hidden:
        file_list = [f for f in file_list if not f.startswith('.')]

    if human_readable:
        file_list = [(f, get_human_readable_size(os.path.join(directory, f))) for f in file_list]
        for file, size in file_list:
            print(f"{file}\t{size}")
    else:
        for file in file_list:
            print(file)

def get_human_readable_size(file_path):
    size = os.path.getsize(file_path)
    units = ['B', 'KB', 'MB', 'GB', 'TB']
    index = 0
    while size >= 1024 and index < len(units) - 1:
        size /= 1024
        index += 1
    return f"{size:.2f} {units[index]}"

def main():
    parser = argparse.ArgumentParser(description='List files in a directory.')
    parser.add_argument('-a', '--all', action='store_true', help='Include hidden files')
    parser.add_argument('-w', '--human-readable', action='store_true', help='Display file sizes in human-readable format')
    args = parser.parse_args()

    ls(directory='.', show_hidden=args.all, human_readable=args.human_readable)

if __name__ == '__main__':
    main()
```

:::tip What is \_\_main\_\_?
In Python, each .py file is a Python module. Except for the application entry module, other modules usually cannot be run directly. However, for convenience of testing, the following code is often written to provide a testing interface for the module:
```
if __name__ == '__main__':
    main()
```
This means that when running the script directly using the Python command, the code in the `main` function will be executed. When the script is imported as a module by other modules, the `main` function will not be executed.
:::

#### Testing
##### List files
```
python ls.py   
```
##### Display file sizes in a human-readable format
```shell
python ls.py -w
```
##### Display all files
```shell
python ls.py -a
```
##### Combine options
```shell
python ls.py -aw
```
