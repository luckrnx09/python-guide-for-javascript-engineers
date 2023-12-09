---
id: setup-environment
slug: /setup-environment
title: Python Environment Setup
sidebar_label: Python Environment Setup
---

Python is a versatile and widely used programming language known for its simplicity and readability. Setting up a local development environment for Python is essential for any Python engineer.

Python has two major versions, 2.x and 3.x. Due to the numerous new features and widespread adoption of Python 3.x, this book will be based on the latest version of Python 3.x, which is currently Python 3.12.

### Installing Python
You need to install the Python interpreter (referred to as Python) to start Python development and debugging. The installation process may vary depending on the operating system you are using.

#### Windows

1. Visit the [Python official website](https://www.python.org/downloads/) and download the latest version of the Python installer for Windows.
2. Run the installer and follow the instructions in the installation wizard.
3. During the installation process, make sure to check the "Add Python to PATH" option to have access to the Python executable globally from the command line.

#### macOS

1. macOS usually comes with a version of Python pre-installed. However, it is recommended to use an updated version of Python 3.x to be consistent with the examples in this book.
2. Visit the [Python official website](https://www.python.org/downloads/) and download the latest version of the Python installer for macOS.
3. Run the installer and follow the instructions in the installation wizard.
:::tip 
If you have Homebrew installed on your macOS system, you can directly install Python using the command `brew install python@3`.
:::

### Checking Python Version
After the installation is complete, run `python --version` in the terminal. If it displays the Python version number, it means Python has been successfully installed on your system.
```shell
python --version
```

:::tip Unable to find the python command?
1. Check if the bin directory of Python installation is in the system environment variable `$PATH`.
2. Try using `python3 --version` to get the version number. If you can get the version number using the `python3` command, you can try setting an alias in your shell to resolve the issue.
:::

### Integrated Development Environments

An Integrated Development Environment (IDE) is crucial for efficient Python development. Here are three popular Python development IDEs:

1. **Visual Studio Code (VS Code)**: VS Code is a lightweight, feature-rich, and highly customizable IDE developed by Microsoft. It is open-source, cross-platform, and provides excellent integration with the Python language. You can download it from [here](https://code.visualstudio.com/). Note that you need to install the [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) in VS Code to get code suggestions while coding.

2. **PyCharm Community Edition**: PyCharm is a powerful IDE designed specifically for Python development. The Community Edition is free, open-source, and provides a comprehensive set of features, including code completion, debugging, and version control integration. You can download it from [here](https://www.jetbrains.com/pycharm/download/).

3. **Spyder**: Spyder is another popular open-source IDE designed for scientific Python development. It provides an integrated environment for data analysis, plotting, and debugging. You can download it from [here](https://www.spyder-ide.org/).
