---
id: arithmetic-operation
slug: /arithmetic-operation
title: 基本数据类型的算术运算
sidebar_label: 基本数据类型的算术运算
---

Python 中的算术运算符用于执行加、减、乘和除等基础的算术运算。

### 任务

创建一个程序，定义两个数字类型的变量，并对它们执行各种算术运算。该程序应执行以下任务：

1. 将两个数相加并打印和。
2. 从第二个数中减去第一个数并打印差。
3. 将两个数相乘并打印乘积。
4. 将第一个数除以第二个数并打印商。
5. 计算第一个数除以第二个数的余数并打印结果。
6. 将第一个数的第二个数次幂并打印结果。
7. 将第一个数自增 1 并打印更新后的值。
8. 将第二个数自减 1 并打印更新后的值。

#### JavaScript 实现
```javascript
let num1 = 10;
let num2 = 5;

// 1. 相加
let sum = num1 + num2;
console.log("和：", sum);

// 2. 相减
let difference = num1 - num2;
console.log("差：", difference);

// 3. 相乘
let product = num1 * num2;
console.log("积：", product);

// 4. 相除
let quotient = num1 / num2;
console.log("商：", quotient);

// 5. 取余
let remainder = num1 % num2;
console.log("余数：", remainder);

// 6. 指数运算
let power = num1 ** num2;
console.log("幂：", power);

// 7. 自增
num1++;
console.log("自增后的 num1：", num1);

// 8. 自减
num2--;
console.log("自减后的 num2：", num2);
```

#### Python 实现
```python
num1 = 10
num2 = 5

# 1. 相加
sum_val = num1 + num2
print("和：", sum_val)

# 2. 相减
difference = num1 - num2
print("差：", difference)

# 3. 相乘
product = num1 * num2
print("积：", product)

# 4. 相除
quotient = num1 / num2
print("商：", quotient)

# 5. 取余
remainder = num1 % num2
print("余数：", remainder)

# 6. 指数运算
power = num1 ** num2
print("幂：", power)

# 7. 自增
num1 += 1
print("自增后的 num1：", num1)

# 8. 自减
num2 -= 1
print("自减后的 num2：", num2)
```

### 代码解读
- Python 的加、减、乘、除、取余、指数运算语法与 JavaScript 一致。
- `sum` 在 Python 中是 [内置函数](https://docs.python.org/3/library/functions.html?highlight=sum#sum)，在编写代码时应避免将其用作变量名。
- Python 中没有 `++` 和 `--` 运算符，需要使用 `+=` 和 `-=` 对变量进行自增或自减。

### 差异速览

| 特性 | JavaScript | Python |
|---------|------------|--------|
| 相加 | `+` | `+` |
| 相减 | `-` | `-` |
| 相乘 | `*` | `*` |
| 相除 | `/` | `/` |
| 整除 | - | `//` |
| 取余 | `%` | `%` |
| 指数运算 | `**` | `**` |
| 自增 | `++` <br /> `+=1` | `+= 1` |
| 自减 | `--` <br/> `-=1` | `-= 1` |

:::danger
在 Python 中，只有 **兼容的** 数据类型之间才能进行运算，比如浮点数和整数运算的结果为浮点数，而字符串和数字进行运算会抛出异常。如要对数字和字符串进行运算，需先对其中一进行类型转换。
:::

### 相关资源

- https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex

