declare class DateObject {
    constructor()
    constructor(object:{
        year:number,
        month:number,
        day:number,
        hour?:number,
        minute?:number,
        second?:number,
        millisecond?:number,
        calendar?:string,
        local?:string,
        format?:string,
        ignoreList?:string[]
    })
    constructor(object:{
        date?:Date,
        calendar?:string,
        local?:string,
        format?:string,
        ignoreList?:string[]
    })
    constructor(date:Date)
    constructor(date:DateObject)
    constructor(unixTimeInMilliseconds:number)
    constructor(string:string)

    static calendars:object
    static locals:object
    /**
     * Parse string from the given formatting token.
     * Default formatting token: "YYYY MM DD hh mm ss SSS a".
     * 
     * If you do not specify a formatting token, The default token is considered.
     * @param date 
     * @example 
     * var date = new DateObject();
     * 
     * date.setFormat("dddd DD MMMM YYYY");
     * date.parse("Monday 24 August 2020");
     */
    parse(date:string):DateObject
    /**
     * Convert current calendar to given calendar.
     * 
     * Availble calendars:
     *  - gregorian
     *  - persian
     *  - arabic
     *  - indian
     * 
     * @param calendar 
     * @example
     * var date = new DateObject();
     *
     * date.convert("persian");
     */
    convert(calendar:string|undefined): DateObject
    /**
     * Formatting current time from given token.
     * Default token is "YYYY/MM/DD".
     * 
     * If you do not specify a formatting token, The default token is considered.
     * @param format 
     * @param ignoreList 
     * @example
     * var date = new DateObject();
     * 
     * date.format(); //2020/12/02
     * date.format("MM/DD/YYYY"); //12/02/2020
     * 
     * @example
     * Ignoring `Date` & `Time`
     * 
     * var date = new DateObject();
     * 
     * date.format("Date:MM/DD/YYYY Time:HH:mm:ss", ["Date", "Time"]); //Date:12/02/2020 Time:11:03:12
     */
    format(format?:string,ignoreList?:string[]):string
    getProperty(key:string):number|string

    setYear(year:number):DateObject
    /**
     * Use this method if you want to specify the names of the months manually.
     * 
     * @param months 
     * @example
     * 
     * var Date = new DateObject()
     * 
     * date.setMonths([
     *  ["jan", "j"],
     *  ["feb", "f"],
     *  ["mar", "m"],
     *  ["apr", "a"],
     *  ["may", "m"],
     *  ["jun", "j"],
     *  ["jul", "j"],
     *  ["aug", "a"],
     *  ["sep", "s"],
     *  ["oct", "o"],
     *  ["nov", "n"],
     *  ["dec", "d"],
     * ])
     * 
     * date.format("MMMM MMM") //dec d
     */
    setMonths(months:[string[]]):DateObject
    setMonth(month:number):DateObject
    /**
     * Use this method if you want to specify the names of week days manually.
     * 
     * @param weekDays 
     * @example
     * 
     * var Date = new DateObject()
     * 
     * date.setWeekDays([
     *  ["su", "s"],
     *  ["mo", "m"],
     *  ["tu", "t"],
     *  ["we", "w"],
     *  ["th", "t"],
     *  ["fr", "f"],
     *  ["sa", "s"],
     * ])
     * 
     * date.format("dddd ddd") //su s
     */
    setWeekDays(weekDays:[string[]]):DateObject
    /**
     * @param dayOfMonth
     */
    setDay(day:number):DateObject
    setHour(hour:number):DateObject
    setMinute(minute:number):DateObject
    setSecond(second:number):DateObject
    setMillisecond(millisecond:number):DateObject
    /**
     * 
     * @param formattingToken
     * @example
     * var date = new DateObject()
     * 
     * date.setFormat("dddd MMMM YYYY")
     * 
     * date.format() //Sunday December 2020
     */
    setFormat(format:string):DateObject
    /**
     * @param local
     * 
     * Availble locals:
     *  - en `english`
     *  - fa `farsi`
     *  - ar `arabic`
     *  - hi `hindi`
     */
    setLocal(local:string):DateObject
    /**
     * @param calendar
     * 
     * Availble calendars:
     * 
     *  - gregorian
     *  - persian
     *  - arabic
     *  - indian
     */
    setCalendar(calendar:string|undefined):DateObject
    setDate(date:Date):DateObject
    setDate(DateObject):DateObject
    setDate(date:string):DateObject
    setDate(date:number):DateObject
    
    set(key:string,value:any):DateObject
    set(obj:{
        date?:Date|number|string,
        year?:number,
        month?:number,
        day?:number,
        hour?:number,
        minute?:number,
        second?:number,
        millisecond?:number,
        calendar?:string,
        local?:string,
        format?:string,
        ignoreList?:string[]
    }):DateObject
    /**
     * Availbe Types:
     *  - `years` `year` `y`
     *  - `months` `month` `M`
     *  - `days` `day` `d`
     *  - `hours` `hour` `h`
     *  - `minutes` `minute` `m`
     *  - `seconds` `second` `s`
     *  - `milliseconds` `millisecond` `ms`
     * 
     * @param duration 
     * @param type 
     * @example
     * 
     * var tomorrow = new DateObject().add(1, "day")
     * var yesterday = new DateObject().add(-1, "day")
     */
    add(duration:number|string,type:string):DateObject

    toFirstOfYear():DateObject
    toLastOfYear():DateObject
    toFirstOfMonth():DateObject
    toLastOfMonth():DateObject
    toFirstOfWeek():DateObject
    toLastOfWeek():DateObject
    toFirstWeekOfYear():DateObject
    toLastWeekOfYear():DateObject

    toString():string
    /**
     * convert current calendar to JavaScript Date
     */
    toDate():Date
    /**
     * convert current calendar to UTC
     */
    toUTC():DateObject
    /**
     * Unix time in seconds
     */
    toUnix():number
    toJulianDay():number
    toObject():object
    toJSON():object
    /**
     * Unix time in milliseconds
     */
    valueOf():number

    /**
     * Count number of days passed from 1/1/1 (0/1/1 in indian calendar)
     */
    dayOfBeginning:number
    /**
     * Count number of days passed from current year
     */
    dayOfYear:number
    /**
     * Count number of weeks passed from current year
     */
    weekOfYear:number
    /** 
     * Number of days remaining from current year
     */
    daysLeft:number
    /**
     * @get current year
     * @set year
     */
    year:number
    /**
     * @get object (Month of year in current local) 
     * @example { name: "January", shortName: "Jan", index: 0, number: 1 }
     * @set number 1-12
     */
    month:object
    /**
     * Day of month 
     * @get number
     * @set number
     */
    day:number
    /**
     * Day of week in current local
     * @get object 
     * @example { name: "Sunday", shortName: "Sun", index: 0, number: 1  }
     */
    weekDay:object
    /**
     * @get current hour
     * @set hour
     */
    hour:number
    /**
     * @get current minute
     * @set minute
     */
    minute:number
    /**
     * @get current second
     * @set second
     */
    second:number
    /**
     * @get current millisecond
     * @set millisecond
     */
    millisecond:number
    /**
     * @get Array of months in current local 
     * @example [{ name: "January", shortName: "Jan", index: 0, number: 1 }, ...]
     * @set custom months 
     * @example [["name1" , "shortName1"], ["name2" , "shortName2"] ...]
     * @example
     * 
     * var Date = new DateObject()
     * 
     * date.months = [
     *  ["jan", "j"],
     *  ["feb", "f"],
     *  ["mar", "m"],
     *  ["apr", "a"],
     *  ["may", "m"],
     *  ["jun", "j"],
     *  ["jul", "j"],
     *  ["aug", "a"],
     *  ["sep", "s"],
     *  ["oct", "o"],
     *  ["nov", "n"],
     *  ["dec", "d"],
     * ]
     * 
     * date.format("MMMM MMM") //dec d
     */
    months:object[]
    /**
     * @get Array of week days in current local 
     * @example [{ name: "Sunday", shortName: "Sun", index: 0, number: 1 }, ...]
     * @set custom week days 
     * @example [["name1" , "shortName1"], ["name2" , "shortName2"] ...]
     * @example
     * 
     * var Date = new DateObject()
     * 
     * date.setWeekDays([
     *  ["su", "s"],
     *  ["mo", "m"],
     *  ["tu", "t"],
     *  ["we", "w"],
     *  ["th", "t"],
     *  ["fr", "f"],
     *  ["sa", "s"],
     * ])
     * 
     * date.format("dddd ddd") //su s
     */
    weekDays:object[]
    /**
     * Array of leap years until now
     * 
     * @example
     * 
     * var date = new DateObject()
     * 
     * date.leaps //[4, 8, 12, 16, 20, ...]
     */
    leaps:number[]
    /**
     * @get current calendar
     * @set calendar
     * 
     * Availble calendars:
     *  - gregorian
     *  - persian
     *  - arabic
     *  - indian
     * 
     * @default "gregorian"
     * @example
     * var date = new DateObject() //2020/12/06
     * 
     * date.calendar = "indian" //1942/09/15
     */
    calendar:string
    /**
     * @get current local
     * @set local
     * 
     * Availble locals:
     *  - en `english`
     *  - fa `farsi`
     *  - ar `arabic`
     *  - hi `hindi`
     * 
     * @default "en"
     * @example
     * var date = new DateObject() //2020/12/06
     * 
     * date.local = "fa" //۲۰۲۰/۱۲/۰۶
     */
    local:string
    /**
     * @get meridiems in current local
     * @example 
     * 
     * var date = new DateObject()
     * 
     * date.meridiems //[{ name: "AM", shortName: "am" }, { name: "PM", shortName: "pm" }]
     */
    meridiems:object[]
    /**
     * Array of local numbers from 0 to 9
     */
    digits:number[]
    /**
     * @get current formatting token
     * @set formatting token
     * @default "YYYY/MM/DD"
     * 
     * var date = new DateObject()
     * 
     * date._format = "dddd MMMM YYYY"
     * 
     * date.format() //Sunday December 2020
     */
    _format:string
    /**
     * @get true if current year is leap
     */
    isLeap:boolean
    /**
     * @get true if the year, month and day are correct
     */
    isValid:boolean
    isUTC:boolean
    /**
     * @get Unix time in seconds
     */
    unix:number
    /**
     * formatting ignore list
     * 
     * @example
     * var date = new DateObject()
     * 
     * date._format = "Date:MM/DD/YYYY"
     * date.ignoreList = ["Date"]
     * 
     * date.format() //Date:12/04/2020
     * 
     * @example
     * var date = new DateObject({
     *   format: "Date:MM/DD/YYYY",
     *   ignoreList: ["Date"]
     * })
     * 
     * date.format() //Date:12/04/2020
     * date.format("time:hh:mm a", ["time"]) //time:06:50 pm
     */
    ignoreList:string[]
}

export = DateObject