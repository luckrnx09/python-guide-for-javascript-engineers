---
id: setup-environment
slug: /setup-environment
title: Python 环境安装
sidebar_label: Python 环境安装
---

Python 是一种多功能且广泛使用的编程语言，以其简单和易读性而闻名。为 Python 设置本地开发环境对于任何 Python 工程师来说都是必不可少的。

Python 有 2.x 和 3.x 两个主要版本，由于 Python 3.x 提供了许多新特性且应用广泛，本书将基于 Python 3.x 的最新版本进行讲解，截止本书完成时，最新的 Python 为 3.12。

### 安装 Python
你需要安装 Python 解释器（简称 Python）才能进行 Python 开发和调试，安装过程可能因使用的操作系统而有所不同。

#### Windows

1. 访问 [Python 官方网站](https://www.python.org/downloads/) 并下载最新的 Windows 版本的 Python 安装程序。
2. 运行安装程序并按照安装向导的说明进行操作。
3. 在安装过程中，请确保勾选“将 Python 添加到 PATH”选项，以便从命令行全局访问 Python 可执行文件。

#### macOS

1. macOS 通常会预装一个版本的 Python。然而，建议使用更新的 Python 3.x 版本以与本书案例保持一致。
2. 访问 [Python 官方网站](https://www.python.org/downloads/) 并下载最新的 macOS 版本的 Python 安装程序。
3. 运行安装程序并按照安装向导的说明进行操作。
:::tip 
如果你的 macOS 系统中安装了 Homebrew，可以直接通过 `brew install python@3` 命令安装 Python。
:::

### 检查 Python 版本
完成安装后，在终端中运行 `python --version`，显示 Python 版本号表示 Python 已成功安装到你的系统中。
```shell
python --version
```

:::tip 无法找到 python 命令？
1. 检查 Python 安装的 bin 目录是否在系统环境变量 `$PATH` 中。
2. 尝试使用 `python3 --version` 获取版本号，如使用 `python3` 命令可以正常获取版本号，可尝试将在 shell 中设置变量别名解决
:::

### 集成开发环境

集成开发环境（IDE）对于高效的 Python 开发至关重要。以下是三个流行的 Python 开发 IDE：

1. **Visual Studio Code (VS Code)**：VS Code 是由 Microsoft 开发的轻量级、功能丰富且高度可定制的 IDE。它是开源的、跨平台的，并提供出色的 Python 语言集成。你可以从 [这里](https://code.visualstudio.com/) 下载它。请注意，你需要在 VS Code 中安装 [Python 扩展](https://marketplace.visualstudio.com/items?itemName=ms-python.python) 以在编码时获得代码提示。

2. **PyCharm 社区版**：PyCharm 是专为 Python 开发而设计的强大 IDE。社区版是免费的、开源的，并提供了全面的功能集，包括代码补全、调试和版本控制集成。你可以从 [这里](https://www.jetbrains.com/pycharm/download/) 下载它。

3. **Spyder**：Spyder 是另一个流行的开源 IDE，专为科学 Python 开发而设计。它提供了一个集成环境，用于数据分析、绘图和调试。你可以从 [这里](https://www.spyder-ide.org/) 下载它。
