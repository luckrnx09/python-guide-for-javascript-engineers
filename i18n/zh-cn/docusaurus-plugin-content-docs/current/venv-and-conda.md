---
id: venv-and-conda
slug: /venv-and-conda-and-condaip
title: venv 和 conda
sidebar_label: venv 和 conda
---

在 Python 中，虚拟环境是一种工具，它可以为每个项目创建单独的 Python 环境，实现项目依赖的隔离。虚拟环境允许开发人员为不同的项目安装不同版本的包，而不会相互干扰。这在同时处理具有不同要求的多个项目时尤其有用，与 JavaScript 工程师常使用的 nvm 工具类似。

### 虚拟环境的工作原理
虚拟环境的三个重要组成部分是：创建虚拟环境、激活虚拟环境和安装依赖包。

虚拟环境是一个文件目录，目录中包含了特定版本的 Python 可执行文件以及相关依赖。通过激活命令，将终端中的 Python 以及相关的命令指向该虚拟环境目录，从而实现项目之间依赖的隔离。

### venv 管理虚拟环境
venv 是 Python 默认的虚拟环境管理工具。

#### 创建虚拟环境
在项目根目录中，使用 `python -m venv myvenv` 创建一个虚拟环境，此时会自动新建一个 `myvenv` 的目录，该目录即为虚拟环境目录，里面包含了 Python 可执行文件，虚拟环境所创建的 Python 版本与当前使用的 Python 解释器版本一致。

#### 激活虚拟环境
使用命令 `source ./myvenv/bin/activate` 激活虚拟环境。

#### 退出虚拟环境
虚拟环境只在当前终端内有效，关闭终端之后虚拟环境自动取消激活

:::tip
你可以随时通过 shell 命令 `where python` 查看当前终端中正在使用的 Python 可执行文件的路径以确定是否位于正确的虚拟环境中。
:::


### conda 管理虚拟环境
conda 是一个虚拟环境管理工具，使用 conda 之前，需要按照 [官方文档](https://conda.io/projects/conda/en/latest/user-guide/install/index.html) 步骤安装 conda 。
#### 创建虚拟环境
```shell
conda create --prefix ./myvenv python=3.8
```
上面的命令指定了虚拟环境需要使用的特定 Python 版本，当一些项目需要工作在指定 Python 版本下时，这会非常有用。
#### 激活虚拟环境
```shell
conda activate ./myvenv 
```
#### 退出虚拟环境
```shell
conda deactivate
```


:::tip 安装第三方包
当虚拟环境激活时，使用 `pip install package_name` 安装第三方包，这些包文件将存储到 `虚拟环境名称/lib/python版本/site-packages` 文件夹中，如此，项目之间的依赖便通过虚拟环境进行了隔离。
:::

### 相关资源
- https://docs.python.org/3/library/venv.html
- https://conda.io
