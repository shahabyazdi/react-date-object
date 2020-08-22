# Date Object

supported calendars: `georgian` , `persian`
default: `georgian`

supported locals: `en` , `fa`
default: `en`

# example

## 1- new instance

### 1-1- String (year month day hour minute second millisecond meridiem)

```javascript
var date = new DateObject("2020 8 21 11 55 36 100 am");

date.format("YYYY/MM/DD hh:mm:ss.SSS a"); //2020/08/21 11:55:36.100 am

date = new DateObject("2020/08/01");

date.format("YYYY/MM/DD hh:mm:ss.SSS a"); //2020/08/01 00:00:00.0 am
```

### 1-2- JavaScript Date

```javascript
var $date = new Date(2019, 8, 20);

var date = new DateObject($date);

date.format(); //2019/09/20
```

### 1-3- DateObject

```javascript
var $date = new DateObject("2019/09/20");

var date = new DateObject($date);

date.format(); //2019/09/20
```

### 1-4- Object

#### 1-4-1-

```javascript
{
  date: String or JavaScript Date or DateObject, //default new Date()
  calendar: `georgian` or `persian`, //default `georgian`
  local: `en` or `fa`, //default `en`
  format: `String` //default `YYYY/MM/DD`
}

```

```javascript
var date = new DateObject({
  date: new Date(),
  calendar: "georgian",
  local: "en",
});

date.format(); //2020/08/21

date = new DateObject({
  date: new Date(),
  calendar: "persian",
  local: "fa",
});

date.format(); //۱۳۹۹/۰۵/۳۱

date = new DateObject({
  date: "31 Mordad 1399",
  calendar: "persian",
  local: "en",
  format: "DD MMMM YYYY",
});

date.format(); //31 Mordad 1399
```

#### 1-4-2-

```javascript
{
  year: Number,
  month: Number,
  day: Number,
  hour: Number, //default 0
  minute: Number, //default 0
  second: Number, //default 0
  millisecond: Number, //default 0
  calendar: `georgian` or `persian`, //default `georgian`
  local: `en` or `fa`, //default `en`
  format: String //default `YYYY/MM/DD`
}

```

```javascript
var date = new DateObject({
  year: 2020,
  month: 8,
  day: 21,
  hour: 12,
  minute: 20,
  second: 36,
  milisecond: 152,
  format: "dddd DD MMMM YYYY",
});

date.format(); //Friday 21 August 2020

date = new DateObject({
  year: 1399,
  month: 5,
  day: 31,
  calendar: "persian",
  local: "en",
  format: "dddd DD MMMM YYYY",
});

date.format(); //Jomeh 31 Mordad 1399

date = new DateObject({
  year: 1399,
  month: 5,
  day: 31,
  calendar: "persian",
  local: "fa",
  format: "dddd DD MMMM YYYY",
});

date.format(); //جمعه ۳۱ مرداد ۱۳۹۹
```

## 2- setter methods

```javascript
var date = new DateObject();

date
  .setCalendar("georgian")
  .setFormat("YYYY-MM-DD HH:mm:ss.SSS")
  .setLocal("en")
  .setYear(2020)
  .setMonth(8)
  .setDay(21)
  .setHour(12)
  .setMinute(20)
  .setSecond(14)
  .setMillisecond(200);

date.format(); //2020-09-21 12:20:14.200

date
  .setCalendar("persian")
  .setYear(1399)
  .setMonth(8)
  .setDay(21)
  .setFormat("dddd DD MMMM YYYY");

date.format(); //Jomeh 21 Azar 1399
```

## 3- get and set

```javascript
var date = new DateObject();

date.format(); //2020/08/21

date.year += 2;
date.month += 2;
date.day += 2;
date.hour += 2;
date.minute += 2;
date.second += 2;
date.millisecond += 2;

date.format(); //2022/10/23

console.log(date.month);

/**
 *  {
 *    name: 'October',
 *    shortName: 'Oct',
 *    length: 31,
 *    index: 9,
 *    number: 10,
 *    toString: [Function (anonymous)]
 *  }
 */

console.log(date.weekDay);

/**
 * {
 *   name: 'Sunday',
 *   shortName: 'Sun',
 *   index: 0,
 *   number: 1,
 *   toString: [Function (anonymous)]
 * }
 */

console.log(`${date.weekDay.name} ${date.year}/${date.month}/${date.day}`); //Sunday 2022/10/23

date.year = 2020;
date.month = 8;
date.day = 21;

date.isLeap; //true
date.month.name; //August
date.month.length; //31
date.month.index; //7
date.month.number; //8

date.weekDay.name; //Friday
date.weekDay.index; //5
date.weekDay.number; //6

date.dayOfBeginning; //737658
date.dayOfYear; //234
date.daysLeft; //132
date.weekOfYear; //34

date.weeks; // array [{ name: 'Sunday', shortName: 'Sun', ...}]
date.months; //array [{ name: 'January', shortName: 'Jan', ...}]
date.leaps; //array [4,   8,  12,  16,  20,...]
```

## 4- other methods

```javascript
var date = new DateObject();

date.toFirstOfWeek(); //2020/08/16
date.toFirstOfMonth(); //2020/08/01
date.toFirstOfYear(); //2020/01/01
date.toFirstWeekOfYear(); //2020/01/05
date.toLastOfMonth(); //2020/01/31
date.toLastOfWeek(); //2020/02/01
date.toLastOfYear(); //2020/12/31
date.toLastWeekOfYear(); //2020/12/27

date.toString(); //2020/12/27
date.toDate(); //instanceof Date
```

# using calendars, format & locals

```javascript
var date = new DateObject({ calendar: "georgian", format: "dddd DD MMMM" });

date.format(); //Friday 21 August

date.calendar = "persian"; //Jomeh 31 Mordad
date.local = "fa"; //جمعه 31 مرداد
date._format = "YY/MM/DD"; //۹۹/۰۵/۳۱

date.setCalendar("georgian").setLocal("en"); //20/08/21

date = new DateObject(new Date());

date.convert("persian").format(); //1399/05/31
```
