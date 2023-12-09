---
id: venv-and-conda
slug: /venv-and-conda-and-condaip
title: Virtual Environments and Conda
sidebar_label: Virtual Environments and Conda
---

In Python, virtual environments are tools that allow for the creation of separate Python environments for each project, achieving isolation of project dependencies. Virtual environments enable developers to install different versions of packages for different projects without interfering with each other. This is especially useful when working with multiple projects that have different requirements, similar to the nvm tool commonly used by JavaScript engineers.

### How Virtual Environments Work
The three important components of a virtual environment are creating the environment, activating the environment, and installing dependencies.

A virtual environment is a directory that contains a specific version of the Python executable and related dependencies. By activating the environment, the Python and related commands in the terminal are directed to the virtual environment directory, thus achieving isolation of dependencies between projects.

### Managing Virtual Environments with venv
venv is the default virtual environment management tool in Python.

#### Creating a Virtual Environment
In the project's root directory, use `python -m venv myvenv` to create a virtual environment. This automatically creates a directory named `myvenv`, which is the virtual environment directory. It contains the Python executable and the version of Python created for the virtual environment, which matches the version of the current Python interpreter being used.

#### Activating a Virtual Environment
Use the command `source ./myvenv/bin/activate` to activate the virtual environment.

#### Deactivating a Virtual Environment
A virtual environment is only active within the current terminal. It is automatically deactivated when the terminal is closed.

:::tip
You can use the shell command `where python` at any time to check the path of the Python executable being used in the current terminal, to ensure that you are in the correct virtual environment.
:::

### Managing Virtual Environments with Conda
conda is a virtual environment management tool. Before using conda, follow the steps in the [official documentation](https://conda.io/projects/conda/en/latest/user-guide/install/index.html) to install conda.

#### Creating a Virtual Environment
```shell
conda create --prefix ./myvenv python=3.8
```
The above command specifies the specific Python version to be used in the virtual environment. This is useful when some projects need to work with a specific Python version.

#### Activating a Virtual Environment
```shell
conda activate ./myvenv 
```

#### Deactivating a Virtual Environment
```shell
conda deactivate
```

:::tip Installing Third-Party Packages
When a virtual environment is activated, use `pip install package_name` to install third-party packages. These package files will be stored in the `virtual_environment_name/lib/python_version/site-packages` folder. This way, project dependencies are isolated through the virtual environment.
:::

### Resources
- https://docs.python.org/3/library/venv.html
- https://conda.io
