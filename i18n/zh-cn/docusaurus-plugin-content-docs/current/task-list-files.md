---
id: task-list-files
slug: /task-list-files

title: 文件浏览器
sidebar_label: 文件浏览器
---

### 任务
`ls` 命令是 linux 中非常强大的文件查看命令。

请使用 Python 实现一个类似的命令行工具。它需要支持以下命令行选项：
- `-a` 或 `--all`：在文件列表中包括隐藏文件。
- `-w` 或 `--human-readable`：以人类可读格式显示文件大小。
- `-h` 或 `--help`：显示帮助信息。

#### Python 实现

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

:::tip \_\_main\_\_ 是什么？
在 Python 中，每个 .py 文件都是一个 Python 模块。除了应用程序入口模块之外，其他的模块通常不能直接运行，但为了方便测试，通常会写如下代码为模块提供测试接口：
```
if __name__ == '__main__':
    main()
```
这表示，当使用 Python 命令直接运行该脚本时，将执行 `main` 函数的代码，而当该脚本作为模块被其他模块引用的时候，不会执行 `main` 函数。
:::

#### 测试
##### 列出文件
```
python ls.py   
```
##### 以人类可读格式显示文件大小
```shell
python ls.py -w
```
##### 显示所有文件
```shell
python ls.py -a
```
##### 组合参数
```shell
python ls.py -aw
```

