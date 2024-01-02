---
id: pip
slug: /pip
title: Pip
sidebar_label: Pip
---

In Python, `pip` is the default package manager for managing third-party packages, similar to `npm` in JavaScript projects.

### Package Installation
When installing the Python environment, the `pip` tool is automatically installed in the operating system. You can use the `pip install` command to install the required third-party packages.

```shell
pip install package_name1 package_name2
```
It is similar to `npm install package1 package2` in JavaScript projects.

If you want to install a specific version of a third-party package, you can specify it using `==`, for example:

```shell
pip install requests==2.20.0
```
It is similar to `npm install axios@0.21.1` in JavaScript projects.

:::tip Software Repository
The official software repository for Python is https://pypi.org.
:::

### Package Uninstallation
```shell
pip uninstall package_name
```
It is similar to `npm uninstall package1 package2` in JavaScript projects.

:::tip
Python adopts a centralized dependency management strategy by default, which means that the installed third-party packages are stored in the Python interpreter directory instead of the current project directory. Therefore, installing and uninstalling packages does not leave any traces in the project directory.

Third-party packages installed through `pip install` are essentially installed globally, which is quite different from JavaScript projects that store third-party packages in the `node_modules` directory by default.
:::

### Listing Project Dependencies
In JavaScript, the `dependencies` and `devDependencies` in `package.json` list the names and version numbers of third-party packages used in the project. In Python, this process does not happen automatically. We need to use the `pip freeze > requirements.txt` command to persist project dependencies to a file called `requirements.txt`, and others can automatically install all project dependencies by running `pip install -r requirements.txt`.

:::tip Too many contents in requirements.txt?
We often find many third-party packages listed in `requirements.txt` that are not directly used in the project. This is because it lists all the third-party packages installed under the current Python interpreter. This happens because there is only one Python environment in the system. If we want to see a clearer list of project dependencies, we need to use a virtual environment for isolation.
:::

### Resources
- https://pip.pypa.io/en/stable/
