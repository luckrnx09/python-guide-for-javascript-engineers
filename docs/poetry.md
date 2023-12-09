---
id: poetry
slug: /poetry
title: Poetry
sidebar_label: Poetry
---

Poetry is a powerful tool in Python that simplifies dependency management for projects.

### Installing Poetry
Before using Poetry, you need to install it on your operating system following the instructions in the [official documentation](https://python-poetry.org/docs/).

### Creating a New Project
Once Poetry is installed, you can use the following command to create a new project with Poetry managing the dependencies:
```
poetry new myproject
```
After the project is created, a `pyproject.toml` file will be generated in the root directory. It serves the same purpose as the `package.json` file in JavaScript projects.

Its content is as follows:
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
The Python version specified will default to the version of the current Python interpreter. If you need to use a specific Python version, you can modify the `pyproject.toml` file directly and then create and activate a virtual environment for that Python version.

### Managing Third-Party Packages
With Poetry-managed projects, you don't need to use `pip` to manage third-party packages.

The command to install a third-party package is as follows:
``` 
poetry add package_name
```
Uninstalling a package is similar:
```
poetry remove package_name
```
All installation/removal operations will automatically update the `pyproject.toml` file, so you don't need to manually list the dependencies using `pip freeze`.

In a Python project that includes a `pyproject.toml` file, you only need to run the `poetry install` command to automatically install all the project's dependencies.

### Running Python Scripts
For projects that use Poetry, you need to run Python scripts with the following command to correctly resolve the dependencies: 
```shell
poetry run python your_script.py
```
### Resources
- https://python-poetry.org
