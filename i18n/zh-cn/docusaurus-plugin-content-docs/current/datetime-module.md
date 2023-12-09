---
id: datetime-module
slug: /datetime-module
title: datetime 模块
sidebar_label: datetime 模块
---

Python 中的 datetime 模块提供了处理日期、时间和时间间隔的类和函数。

### 任务

小明的生日是 1992 年 1月 15 日，设计一个程序，计算他的年龄和距离下次生日的天数。

#### JavaScript 实现
```javascript
// 获取当前日期
const currentDate = new Date();

// 设置小明的生日
const birthday = new Date(1992, 0, 15);

// 计算年龄
let age = currentDate.getFullYear() - birthday.getFullYear();

// 检查是否已经过了生日
if (currentDate.getMonth() < birthday.getMonth() || (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() < birthday.getDate())) {
  age--;
}

// 计算距离下次生日的天数
const nextBirthday = new Date(currentDate.getFullYear(), birthday.getMonth(), birthday.getDate());
if (currentDate > nextBirthday) {
  nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
}

const daysUntilNextBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));

// 输出结果
console.log("年龄: " + age);
console.log("距离下次生日的天数: " + daysUntilNextBirthday);
```

#### Python 实现
```python
import datetime

# 获取当前日期
current_date = datetime.date.today()

# 设置小明的生日
birthday = datetime.date(1992, 1, 15)

# 计算年龄
age = current_date.year - birthday.year
if current_date.month < birthday.month or (current_date.month == birthday.month and current_date.day < birthday.day):
    age -= 1

# 计算距离下次生日的天数
next_birthday = datetime.date(current_date.year, birthday.month, birthday.day)
if current_date > next_birthday:
    next_birthday = datetime.date(current_date.year + 1, birthday.month, birthday.day)

days_until_next_birthday = (next_birthday - current_date).days

# 输出结果
print("年龄:", age)
print("距离下次生日的天数:", days_until_next_birthday)
```

### 代码解读

- 在 Python 中，从 `datetime` 模块中导入 `date` 用于操作日期，而 JavaScript 使用 `Date`。 
- 在 Python 中，可以直接使用 `+` 和 `-` 算术运算符对日期进行运算。


### 差异速览

| 特性                | JavaScript                     | Python                                  |
|---------------------|--------------------------------|-----------------------------------------|
| 创建日期时间对象    | `new Date(1992, 0, 15)`                     | `datetime.datetime(1992, 1, 15)`                     |
| 当前本地日期时间   | `new Date()`                      | `datetime.datetime.now()`                 |
| 当前 UTC 日期时间    | ` new Date().toUTCString()`         | `datetime.datetime.utcnow()`              |
| 日期格式化          | `moment(myDateTime).format(format)`     | `my_datetime.strftime(format)`               |
| 获取年、月、日      | `myDateTime.getFullYear()` <br />`myDateTime.getMonth() + 1`  <br/> `myDateTime.getDate()`              | ` my_datetime.year` <br /> `my_datetime.month` <br /> `my_datetime.day`      |
| 获取时、分、秒      | `myDateTime.getHours()` <br />`myDateTime.getMinutes()` <br />`myDateTime.getSeconds()`               | `my_datetime.hour`<br />`my_datetime.minute`<br />`my_datetime.second` |
| 添加时间间隔        | `myDateTime.setSeconds(date.getSeconds() + secondsToAdd)` | `new_datetime = my_datetime + timedelta(seconds=secondsToAdd)` |
| 减去时间间隔        | `myDateTime.setSeconds(date.getSeconds() - secondsToSubtract)` | `new_datetime = my_datetime - timedelta(seconds=secondsToSubtract)` |
| 比较日期            | `dateTime1.getTime() - dateTime2.getTime()` | `datetime1 - datetime2` |

:::tip timedelta
如基本的日期时间运算无法满足需求，可以借助 `timedelta`，它是一个用于表示时间间隔的类。它可以用来执行日期和时间的加减操作，以及计算时间差。

```python
from datetime import timedelta,datetime
current_datetime = datetime.now()

# 获取 2 天 3 小时 30 分钟 后的日期时间
new_datetime = current_datetime + timedelta(days=2, hours=3, minutes=30)
print(new_datetime)
```
:::

### 相关资源

- https://docs.python.org/3/library/datetime.html#module-datetime

