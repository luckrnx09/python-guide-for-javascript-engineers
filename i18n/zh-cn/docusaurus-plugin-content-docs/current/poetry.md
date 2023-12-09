---
id: poetry
slug: /poetry
title: poetry
sidebar_label: poetry
---

poetry 是 Python 中一个非常强大的工具，可以将项目的依赖管理简化到极致。

### 安装 poetry
开始使用 poetry 之前，你需要根据 [官方文档](https://python-poetry.org/docs/) 的指引将 poetry 安装到操作系统中。

### 创建新项目
安装了 poetry 之后，可以使用以下命令创建一个由 poetry 管理依赖的新项目：
```
poetry new myproject
```
项目创建完成后，会在根目录中创建一个 `pyproject.toml` 文件，它的作用与 JavaScript 项目中的 `package.json` 一样。

它的内容如下：
```
[tool.poetry]
name = "myproject"
version = "0.1.0"
description = ""
authors = ["luckrnx09 <luckrnx09@gmail.com>"]
readme = "README.md"

[tool.poetry.dependencies]
python = "^3.11"


[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
```
其中的 Python 版本会默认使用当前 Python 解释器的版本，如需要使用指定的 Python 版本，可以直接修改 `pyproject.toml` 文件，然后创建并激活该 Python 版本的虚拟环境。

### 管理第三方包
使用 poetry 管理的项目，不需要使用 `pip` 管理第三方包。

安装第三方包的命令如下：
``` 
poetry add package_name
```
卸载包的命令也类似：
```
poetry remove package_name
```
所有的安装/卸载操作的结果，都将自动反映到 `pyproject.toml` 文件中，因此，你无需再使用 `pip freeze` 手动列出依赖项。

在一个包含 `pyproject.toml` 文件的 Python 项目中，只需要通过 `poetry install` 命令即可自动安装项目的所有依赖。

### 运行 Python 脚本
使用了 poetry 的项目，需要通过如下命令运行 Python 脚本以正确解析依赖: 
```shell
poetry run python your_script.py
```
### 相关资源
- https://python-poetry.org