---
id: datetime-module
slug: /datetime-module
title: Datetime Module
sidebar_label: Datetime Module
---

The datetime module in Python provides classes and functions for handling dates, times, and time intervals.

### Task

Design a program to calculate Xiao Ming's age and the number of days until his next birthday. Xiao Ming's birthday is on January 15, 1992.

#### JavaScript implementation
```javascript
// Get the current date
const currentDate = new Date();

// Set Xiao Ming's birthday
const birthday = new Date(1992, 0, 15);

// Calculate age
let age = currentDate.getFullYear() - birthday.getFullYear();

// Check if the birthday has passed this year
if (currentDate.getMonth() < birthday.getMonth() || (currentDate.getMonth() === birthday.getMonth() && currentDate.getDate() < birthday.getDate())) {
  age--;
}

// Calculate the number of days until the next birthday
const nextBirthday = new Date(currentDate.getFullYear(), birthday.getMonth(), birthday.getDate());
if (currentDate > nextBirthday) {
  nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
}

const daysUntilNextBirthday = Math.ceil((nextBirthday - currentDate) / (1000 * 60 * 60 * 24));

// Output the results
console.log("Age: " + age);
console.log("Days until next birthday: " + daysUntilNextBirthday);
```

#### Python implementation
```python
import datetime

# Get the current date
current_date = datetime.date.today()

# Set Xiao Ming's birthday
birthday = datetime.date(1992, 1, 15)

# Calculate age
age = current_date.year - birthday.year
if current_date.month < birthday.month or (current_date.month == birthday.month and current_date.day < birthday.day):
    age -= 1

# Calculate the number of days until the next birthday
next_birthday = datetime.date(current_date.year, birthday.month, birthday.day)
if current_date > next_birthday:
    next_birthday = datetime.date(current_date.year + 1, birthday.month, birthday.day)

days_until_next_birthday = (next_birthday - current_date).days

# Output the results
print("Age:", age)
print("Days until next birthday:", days_until_next_birthday)
```

### Code Highlight

- In Python, use `date` from the `datetime` module to manipulate dates, while JavaScript uses `Date`.
- In Python, you can directly use the `+` and `-` arithmetic operators to perform calculations with dates.


### Difference Quick View

| Feature               | JavaScript                     | Python                                  |
|-----------------------|--------------------------------|-----------------------------------------|
| Create DateTime object | `new Date(1992, 0, 15)`                     | `datetime.datetime(1992, 1, 15)`                     |
| Current local DateTime | `new Date()`                      | `datetime.datetime.now()`                 |
| Current UTC DateTime  | `new Date().toUTCString()`         | `datetime.datetime.utcnow()`              |
| Date formatting       | `moment(myDateTime).format(format)`     | `my_datetime.strftime(format)`               |
| Get year, month, day  | `myDateTime.getFullYear()` <br />`myDateTime.getMonth() + 1`  <br/> `myDateTime.getDate()`              | ` my_datetime.year` <br /> `my_datetime.month` <br /> `my_datetime.day`      |
| Get hour, minute, second | `myDateTime.getHours()` <br />`myDateTime.getMinutes()` <br />`myDateTime.getSeconds()`               | `my_datetime.hour`<br />`my_datetime.minute`<br />`my_datetime.second` |
| Add time interval     | `myDateTime.setSeconds(date.getSeconds() + secondsToAdd)` | `new_datetime = my_datetime + timedelta(seconds=secondsToAdd)` |
| Subtract time interval | `myDateTime.setSeconds(date.getSeconds() - secondsToSubtract)` | `new_datetime = my_datetime - timedelta(seconds=secondsToSubtract)` |
| Compare dates         | `dateTime1.getTime() - dateTime2.getTime()` | `datetime1 - datetime2` |

:::tip timedelta
If basic date and time operations are not sufficient for your needs, you can use `timedelta`, a class that represents a duration or difference between two dates or times. It can be used to perform arithmetic with dates and times, as well as calculate time differences.

```python
from datetime import timedelta, datetime
current_datetime = datetime.now()

# Get the datetime 2 days, 3 hours, and 30 minutes from now
new_datetime = current_datetime + timedelta(days=2, hours=3, minutes=30)
print(new_datetime)
```
:::

### Resources

- [Python datetime module documentation](https://docs.python.org/3/library/datetime.html#module-datetime)
