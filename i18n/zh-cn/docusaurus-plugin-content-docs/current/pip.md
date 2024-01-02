---
id: pip
slug: /pip
title: pip
sidebar_label: pip
---

在 Python 中，默认使用 `pip` 管理第三方包，与 JavaScript 项目中的 `npm` 类似。

### 软件包安装
在安装 Python 环境时，`pip` 工具也会自动安装到操作系统中。你可以使用 `pip install` 命令安装需要的第三方包。

```shell
pip install package_name1 package_name2
```
它与 JavaScript 项目中的 `npm install package1 package2` 相似。

如果想要安装特定版本的第三方包，可以使用 `==` 来指定，如：
```shell
pip install requests==2.20.0
```
它与 JavaScript 项目中的 `npm install axios@0.21.1` 相似。

:::tip 软件仓库
Python 的官方软件仓库为 https://pypi.org
:::

### 软件包卸载
```shell
pip uninstall package_name
```
与 JavaScript 项目中的 `npm uninstall package1 package2` 相似。

:::tip
Python 默认采用集中式依赖管理策略，会将安装的第三方包统一存放在 Python 解释器目录而不是当前项目的目录中，因此包的安装与卸载并不会在项目目录中留下任何蛛丝马迹。

通过 `pip install` 安装的第三方包，相当于直接安装到了全局，与 JavaScript 项目默认将第三方包存储到 `node_modules` 目录中有很大不同。 
:::

### 列出项目依赖
JavaScript 使用 `package.json` 中的  `dependencies` 和 `devDependencies` 列出项目中依赖的第三方包名称以及版本号。在 Python 中，这一过程不会自动发生，我们需要使用 `pip freeze > requirements.txt` 命令将项目依赖项持久化到一个叫做 `requirements.txt` 的文件中，其他人通过 `pip install -r requirements.txt` 即可自动安装项目全部依赖。

:::tip requirements.txt 内容太多了？
我们常常发现 `requirements.txt` 中会出现许多项目中没有直接用到的第三方包，这是因为它列出了当前 Python 解释器下所有已安装的第三方包，这是因为系统中只有一个 Python 环境，如果我们想要看到更清晰的项目依赖列表，就需要通过虚拟环境来进行隔离。
:::

### 相关资源
- https://pip.pypa.io/en/stable/
