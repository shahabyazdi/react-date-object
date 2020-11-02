# React Date Object

supported calendars: `gregorian` , `persian` , `arabic` , `indian`
default: `gregorian`

supported locals: `en` , `fa` , `ar` , `hi`
default: `en`

NodeJs: [date-object](https://github.com/shahabyazdi/date-object)

# 1- Install

## npm:

```shell
npm install react-date-object --save
```

## yarn:

```shell
yarn add react-date-object
```

# 2- Usage

```javascript
var DateObject = require("date-object");

var dateObject = new DateObject();
```

# 3- static properties

## 3-1- calendars

returns supported calendars

```javascript
{
  GREGORIAN: 'GREGORIAN',
  PERSIAN: 'PERSIAN',
  ARABIC: 'ARABIC',
  INDIAN: 'INDIAN'
}
```

## 3-2- locals

returns supported locals

```javascript
{
  EN: 'EN',
  FA: 'FA', //farsi - persian
  AR: 'AR', //arabic
  HI: 'HI'  //hindi - indian
}
```

# 4- Examples

## 4-1- new instance

### 4-1-1- String (year month day hour minute second millisecond meridiem)

```javascript
var date = new DateObject("2020 8 21 11 55 36 100 am");

date.format("YYYY/MM/DD hh:mm:ss.SSS a"); //2020/08/21 11:55:36.100 am

date = new DateObject("2020/08/01");

date.format("YYYY/MM/DD hh:mm:ss.SSS a"); //2020/08/01 12:00:00.0 am
```

### 4-1-2- Number (unix timestamp)

```javascript
var date = new DateObject(1597994736);

date.format("dddd DD MMMM @ hh:mm:ss.SSS a"); //Friday 21 August @ 11:55:36.0 am
```

### 4-1-3- JavaScript Date

```javascript
var $date = new Date(2019, 8, 20);

var date = new DateObject($date);

date.format(); //2019/09/20
```

### 4-1-4- DateObject

```javascript
var $date = new DateObject("2019/09/20");

var date = new DateObject($date);

date.format(); //2019/09/20
```

### 4-1-5- Object

#### 4-1-5-1-

```javascript
{
  date: String , Number(unix timestamp), JavaScript Date or DateObject, //default new Date()
  calendar: `gregorian`, `persian` or `arabic`, //default `gregorian`
  local: `en`, `fa` or `ar`, //default `en`
  format: `String` //default `YYYY/MM/DD`
}

```

```javascript
var date = new DateObject({
  date: new Date(),
  calendar: "gregorian",
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

#### 4-1-5-2-

```javascript
{
  year: Number,
  month: Number,
  day: Number,
  hour: Number, //default 0
  minute: Number, //default 0
  second: Number, //default 0
  millisecond: Number, //default 0
  calendar: `gregorian`, `persian` or `arabic`, //default `gregorian`
  local: `en`, `fa` or `ar`, //default `en`
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

## 4-2- convert(calendar:String)

if you use the convert method without argument, the date will be converted to Gregorian calendar.

```javascript
var date = new DateObject(); //2020/10/31

date.convert(DateObject.calendars.PERSIAN); //1399/08/10 or date.convert("persian")
date.convert(DateObject.calendars.ARABIC); //1442/03/14 or date.convert("arabic")
date.convert(DateObject.calendars.INDIAN); //1942/08/09 or date.convert("indian")
date.convert(DateObject.calendars.GREGORIAN); //2020/10/31 or date.convert()
```

## 4-3- format(token:String)

default format is YYYY/MM/DD
to see all format types click [here](#-5--format-types)

```javascript
var date = new DateObject();

date.format(); //2020/10/31
date.format("MM/DD/YYYY"); //10/31/2020
date.format("MMM/DD/YYYY HH:mm:ss"); //Oct/31/2020 18:17:28
date.format("dddd DD MMMM YYYY, hh:mm:ss A"); //Saturday 31 October 2020, 06:19:18 PM
date.format("ddd DD MMM YYYY, hh:mm a"); //Sat 31 Oct 2020, 06:20 pm
```

## 4-4- setter methods

```javascript
var date = new DateObject();

date
  .setCalendar("gregorian")
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

date.setDate(new Date(2020, 9, 27)).format(); //Tuesday 27 October 2020 (calendar is set to gregorian)

date
  .setDate(new DateObject({ calendar: "indian", year: 1942, month: 8, day: 5 })) //format is set based on given DateObject (default:YYYY/MM/DD)
  .format(); //1942/08/05
```

## 4-5- get and set

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
date.isValid; //true
date.isUTC; //false
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
date.unix; //1597951800

date.weekDays; // array [{ name: 'Sunday', shortName: 'Sun', ...}]
date.months; //array [{ name: 'January', shortName: 'Jan', ...}]
date.leaps; //array [4,   8,  12,  16,  20,...]
```

## 4-6- parse(date:String)

Remember that parsing date is based on the format you set

```javascript
var date = new DateObject();

date._format = "dddd DD MMMM YYYY";

date.parse("Monday 24 August 2020");
date.format("YYYY/MM/DD"); //2020/08/24

date.parse("Friday 07 August 2020");
date.format("YYYY-MM-DD"); //2020-08-07

date.setCalendar("persian").setFormat("YYYY/MM/DD").parse("1399/06/03");
date.format(); //1399/06/03

date.setFormat("YYYY/MM/DD HH:mm").parse("1399/06/03 12:32");
date.format("dddd DD MMMM @ hh:mm a"); //Doshanbeh 03 Shahrivar @ 12:32 am
```

## 4-7- getProperty

```javascript
let date = new DateObject({
  calendar: "arabic",
  date: "1442/01/01",
  local: "ar",
});

date.getProperty("M"); //1
date.format("M"); //١

typeof date.getProperty("D"); //number
typeof date.format("D"); //string

Number(date.getProperty("YYYY")); //1442
Number(date.format("YYYY")); //NaN
```

## 4-8- add(duration:Number or String,type:String)

<table>
  <tr>
    <th colspan="3">Types</td>
  </tr>
  <tr>
    <td>years</td>
    <td>year</td>
    <td>y</td>
  </tr>
  <tr>
    <td>months</td>
    <td>month</td>
    <td>M</td>
  </tr>
  <tr>
    <td>days</td>
    <td>day</td>
    <td>d</td>
  </tr>
  <tr>
    <td>hours</td>
    <td>hour</td>
    <td>h</td>
  </tr>
  <tr>
    <td>minutes</td>
    <td>minute</td>
    <td>m</td>
  </tr>
  <tr>
    <td>seconds</td>
    <td>second</td>
    <td>s</td>
  </tr>
  <tr>
    <td>milliseconds</td>
    <td>millisecond</td>
    <td>ms</td>
  </tr>
</table>

```javascript
var date = new DateObject("2020/10/07 5:35:24 pm");

date.setFormat("YYYY/MM/DD hh:mm:ss.SSS");

date.add(2, "years").format(); //2022/10/07 05:35:24.000
date.add("1", "month").format(); //2022/11/07 05:35:24.000
date.add(3, "d").format(); //2022/11/10 05:35:24.000
date.add(-4, "hours").format(); //2022/11/10 01:35:24.000
date.add(1, "minute").format(); //2022/11/10 01:36:24.000
date.add("-20", "s").format(); //2022/11/10 01:36:04.000
date.add(100, "milliseconds").format(); //2022/11/10 01:36:04.100
```

## 4-9- set method

### 4-9-1 set(key:String,value:Any)

```javascript
var date = new DateObject(); //2020/10/31

date.set("year", 2021); //2021/10/31
date.set("month", 1); //2021/01/31
date.set("day", 7); //2021/01/07
date.set("format", "MM/DD/YYYY"); //01/07/2021
date.set("calendar", "indian"); //10/17/1942
date.set("local", "hi"); //१०/१७/१९४२
date.set("date", new DateObject({ calendar: "persian", local: "en" })); //1399/08/10
date.set("date", new Date()); //2020/10/31 (calendar is set to gregorian)
```

### 4-9-2 set(object)

```javascript
var date = new DateObject(); //2020/10/31

date.set({ calendar: "persian", format: "dddd DD MMMM YYYY" }); //Shanbeh 10 Aban 1399
date.set({ calendar: "gregorian", year: 2020, month: 11, day: 12 }); //Saturday 12 December 2020
date.set(new DateObject().toObject()); //2020/10/31
```

## 4-10- toUTC()

```javascript
let date = new Date() //Wed Oct 14 2020 11:12:18 GMT+0330

let dateObject = new DateObject({
    date,
    calendar: "arabic",
    format: "ddd, DD MMM YYYY HH:mm:ss"
}) //Arb, 26 Sa 1442 11:12:18

console.log(`
dateUTC      : ${date.toUTCString()}
arabicUTC    : ${dateObject.toUTC().toString()}
gregorianUTC : ${dateObject.convert().toString()}
`);

/**
 * dateUTC      : Wed, 14 Oct 2020 07:42:18 GMT
 * arabicUTC    : Arb, 26 Sa 1442 07:42:18
 * gregorianUTC : Wed, 14 Oct 2020 07:42:18
 *  /

```

## 4-11- custom months & week days

See the example below in case you want to use your personal names instead default names of months and week days

```javascript
var date = new DateObject();

date.format("MMMM MMM"); //November Nov
date.format("dddd ddd"); //Monday Mon

//follow this method to name the months and week days: [["name1","shortName1"],["name2","shortName2"],...]

date.months = [
  ["jan", "j"],
  ["feb", "f"],
  ["mar", "m"],
  ["apr", "a"],
  ["may", "m"],
  ["jun", "j"],
  ["jul", "j"],
  ["aug", "a"],
  ["sep", "s"],
  ["oct", "o"],
  ["nov", "n"],
  ["dec", "d"],
];

date.weekDays = [
  ["su", "s"],
  ["mo", "m"],
  ["tu", "t"],
  ["we", "w"],
  ["th", "t"],
  ["fr", "f"],
  ["sa", "s"],
];

date.format("MMMM MMM"); //nov n
date.format("dddd ddd"); //mo m

console.log(date.month);

/**
 *{
 * length: 30,
 * name: 'nov',
 * shortName: 'n',
 * index: 10,
 * number: 11,
 * toString: [Function (anonymous)]
 *}
 */

console.log(date.weekDay);

/**
 *{
 * index: 1,
 * number: 2,
 * toString: [Function: toString],
 * name: 'mo',
 * shortName: 'm'
 *}
 */
```

## 4-12- other methods

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
date.toUnix(); //1609054714
date.toJulianDay(); //2459210
date.valueOf(); //737786, same as dayOfBeginning()
date.toObject();
/**
 *{
 *    year: 2020,
 *    month: {
 *        length: 31,
 *        name: 'December',
 *        shortName: 'Dec',
 *        index: 11,
 *        number: 12,
 *        toString: [Function (anonymous)]
 *    },
 *    day: 27,
 *    weekDay: {
 *        index: 0,
 *        number: 1,
 *        toString: [Function: toString],
 *        name: 'Sunday',
 *        shortName: 'Sun'
 *    },
 *    hour: 11,
 *    minute: 8,
 *    second: 34,
 *    millisecond: 0,
 *    weekOfYear: 52,
 *    dayOfYear: 362,
 *    daysLeft: 4,
 *    calendar: 'gregorian',
 *    local: 'en'
 *}
 */

date.toJSON(); //same as toObject()

JSON.stringify(dateObject);
//{"year":2020,"month":{"length":31,"name":"December","shortName":"Dec","index":11,"number":12},"day":27,"weekDay":{"index":0,"number":1,"name":"Sunday","shortName":"Sun"},"hour":0,"minute":0,"second":0,"millisecond":0,"weekOfYear":52,"dayOfYear":362,"daysLeft":4,"calendar":"gregorian","local":"en"}

new DateObject(date.toJSON()).format(); //2020/12/27
```

# 4-13- using calendars, format & locals

```javascript
var date = new DateObject({ calendar: "gregorian", format: "dddd DD MMMM" });

date.format(); //Friday 21 August

date.calendar = "persian"; //Jomeh 31 Mordad
date.local = "fa"; //جمعه 31 مرداد
date._format = "YY/MM/DD"; //۹۹/۰۵/۳۱

date.setCalendar("gregorian").setLocal("en"); //20/08/21

date = new DateObject(new Date());

date.convert("persian").format(); //1399/05/31
date.convert("arabic").format(); //1442/01/02
```

# 5- format types

| Type |            Example            |         Description          | Availability (Parse /Format) |
| ---- | :---------------------------: | :--------------------------: | ---------------------------- |
| YYYY |             2020              |          full year           | both                         |
| YY   |              20               |        2 digits year         | both                         |
| MMMM |           December            |          month name          | both                         |
| MMM  |              Dec              |       month short name       | both                         |
| MM   |        03, 09, 10, ...        |    2 digits month number     | both                         |
| M    |         3, 9, 10, ...         |         month number         | both                         |
| DDDD |              09               |         day of year          | format                       |
| DDD  |               9               |         day of year          | format                       |
| DD   |      03, 09, 10, 17, ...      |    2 digits day of month     | both                         |
| D    |         3, 9 ,10, 17          |         day of month         | both                         |
| WW   |      01, 03, 24, 33, ...      |         week of year         | format                       |
| W    |       1, 3, 24. 33, ...       |         week of year         | format                       |
| dddd | Saturday, Sunday, Monday, ... |        week day name         | format                       |
| ddd  |      Sat, Sun, Mon, ...       |     week day short name      | format                       |
| dd   |         01,02,...,07          |   2 digits week day number   | format                       |
| d    |           1,2,...,7           |       week day number        | format                       |
| HH   |      03, 09, 10, 17,...       | 2 digits hour (24 hour mode) | both                         |
| H    |       3, 9, 10, 17,...        |     hour (24 hour mode)      | both                         |
| hh   |      03, 09, 10, 17,...       | 2 digits hour (12 hour mode) | both                         |
| h    |       3, 9, 10, 17,...        |     hour (12 hour mode)      | both                         |
| mm   |      03, 09, 10, 17,...       |       2 digits minute        | both                         |
| m    |       3, 9, 10, 17,...        |            minute            | both                         |
| ss   |      03, 09, 10, 17,...       |       2 digits second        | both                         |
| s    |       3, 9, 10, 17,...        |            second            | both                         |
| SSS  |              100              |     3 digits millisecond     | both                         |
| SS   |              10               |     2 digits millisecond     | both                         |
| S    |               1               |     1 digit millisecond      | both                         |
| A    |              AM               |           meridiem           | both                         |
| a    |              am               |      meridiem lowercase      | both                         |
