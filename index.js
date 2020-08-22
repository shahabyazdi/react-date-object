function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

var _year = new WeakMap();

var _month = new WeakMap();

var _day = new WeakMap();

var _hour = new WeakMap();

var _minute = new WeakMap();

var _second = new WeakMap();

var _millisecond = new WeakMap();

var _format = new WeakMap();

var _local = new WeakMap();

var _calendar = new WeakMap();

var _leaps = new WeakMap();

var _types = new WeakMap();

var _reverse = new WeakMap();

var _months = new WeakMap();

var _weeks = new WeakMap();

var _digits = new WeakMap();

var _meridiems = new WeakMap();

var _fix = new WeakMap();

var _getLeaps = new WeakMap();

export default class DateObject {
    constructor(object = {
        date: new Date()
    }) {
        _year.set(this, {
            writable: true,
            value: void 0
        });

        _month.set(this, {
            writable: true,
            value: void 0
        });

        _day.set(this, {
            writable: true,
            value: void 0
        });

        _hour.set(this, {
            writable: true,
            value: void 0
        });

        _minute.set(this, {
            writable: true,
            value: void 0
        });

        _second.set(this, {
            writable: true,
            value: void 0
        });

        _millisecond.set(this, {
            writable: true,
            value: void 0
        });

        _format.set(this, {
            writable: true,
            value: void 0
        });

        _local.set(this, {
            writable: true,
            value: DateObject.locals.EN
        });

        _calendar.set(this, {
            writable: true,
            value: DateObject.calendars.GEORGIAN
        });

        _leaps.set(this, {
            writable: true,
            value: []
        });

        _types.set(this, {
            writable: true,
            value: {
                YYYY: /\d{4}/,
                YY: /\d\d/,
                MMMM: /[A-z]{2,9}/,
                MMM: /[A-z]{2,9}/,
                MM: /\d\d/,
                M: /\d/,
                DDDD: /\d{1,3}/,
                DDD: /\d{1,3}/,
                DD: /\d\d/,
                D: /\d/,
                dddd: /[A-z]{2,9}/,
                ddd: /[A-z]{2,9}/,
                HH: /\d\d/,
                H: /\d/,
                hh: /\d\d/,
                h: /\d/,
                mm: /\d\d/,
                m: /\d/,
                ss: /\d\d/,
                s: /\d/,
                SSS: /\d{3}/,
                SS: /\d\d/,
                S: /\d/,
                a: /[a-z]{2,9}/,
                A: /[a-z]{2,9}/
            }
        });

        _reverse.set(this, {
            writable: true,
            value: {
                "YYYY": string => _classPrivateFieldSet(this, _year, Number(string)),
                "YY": string => _classPrivateFieldSet(this, _year, Number(string)),
                "MMMM": string => _classPrivateFieldSet(this, _month, this.months.findIndex(month => string.toLowerCase() === month.name.toLowerCase())),
                "MMM": string => _classPrivateFieldSet(this, _month, this.months.findIndex(month => string.toLowerCase() === month.shortName.toLowerCase())),
                "MM": string => _classPrivateFieldSet(this, _month, Number(string) - 1),
                "M": string => _classPrivateFieldSet(this, _month, Number(string) - 1),
                "DD": string => _classPrivateFieldSet(this, _day, Number(string)),
                "D": string => _classPrivateFieldSet(this, _day, Number(string)),
                "HH": string => _classPrivateFieldSet(this, _hour, Number(string)),
                "H": string => _classPrivateFieldSet(this, _hour, Number(string)),
                "hh": string => {
                    let hour = Number(string);

                    _classPrivateFieldSet(this, _hour, hour > 12 ? hour - 12 : hour);
                },
                "h": string => {
                    let hour = Number(string);

                    _classPrivateFieldSet(this, _hour, hour > 12 ? hour - 12 : hour);
                },
                "mm": string => _classPrivateFieldSet(this, _minute, Number(string)),
                "m": string => _classPrivateFieldSet(this, _minute, Number(string)),
                "ss": string => _classPrivateFieldSet(this, _second, Number(string)),
                "s": string => _classPrivateFieldSet(this, _second, Number(string)),
                "SSS": string => this.millisecond = Number(string),
                "SS": string => this.millisecond = Number(string),
                "S": string => this.millisecond = Number(string)
            }
        });

        _months.set(this, {
            writable: true,
            value: {
                [DateObject.calendars.GEORGIAN]: {
                    [DateObject.locals.EN]: [{
                        name: "January",
                        shortName: "Jan",
                        length: 31
                    }, {
                        name: "February",
                        shortName: "Feb",
                        length: undefined
                    }, {
                        name: "March",
                        shortName: "Mar",
                        length: 31
                    }, {
                        name: "April",
                        shortName: "Apr",
                        length: 30
                    }, {
                        name: "May",
                        shortName: "May",
                        length: 31
                    }, {
                        name: "June",
                        shortName: "June",
                        length: 30
                    }, {
                        name: "July",
                        shortName: "July",
                        length: 31
                    }, {
                        name: "August",
                        shortName: "Aug",
                        length: 31
                    }, {
                        name: "September",
                        shortName: "Sept",
                        length: 30
                    }, {
                        name: "October",
                        shortName: "Oct",
                        length: 31
                    }, {
                        name: "November",
                        shortName: "Nov",
                        length: 30
                    }, {
                        name: "December",
                        shortName: "Dec",
                        length: 31
                    }],
                    [DateObject.locals.FA]: [{
                        name: "ژانویه",
                        shortName: "Jan",
                        length: 31
                    }, {
                        name: "فوریه",
                        shortName: "Feb",
                        length: undefined
                    }, {
                        name: "مارس",
                        shortName: "Mar",
                        length: 31
                    }, {
                        name: "آوریل",
                        shortName: "Apr",
                        length: 30
                    }, {
                        name: "مه",
                        shortName: "May",
                        length: 31
                    }, {
                        name: "ژوئن",
                        shortName: "June",
                        length: 30
                    }, {
                        name: "ژوئیه",
                        shortName: "July",
                        length: 31
                    }, {
                        name: "اوت",
                        shortName: "Aug",
                        length: 31
                    }, {
                        name: "سپتامبر",
                        shortName: "Sept",
                        length: 30
                    }, {
                        name: "اکتبر",
                        shortName: "Oct",
                        length: 31
                    }, {
                        name: "نوامبر",
                        shortName: "Nov",
                        length: 30
                    }, {
                        name: "دسامبر",
                        shortName: "Dec",
                        length: 31
                    }]
                },
                [DateObject.calendars.PERSIAN]: {
                    [DateObject.locals.EN]: [{
                        name: "Farvardin",
                        shortName: "Far",
                        length: 31
                    }, {
                        name: "Ordibehesht",
                        shortName: "Ord",
                        length: 31
                    }, {
                        name: "Khordad",
                        shortName: "Khor",
                        length: 31
                    }, {
                        name: "Tir",
                        shortName: "Tir",
                        length: 31
                    }, {
                        name: "Mordad",
                        shortName: "Mor",
                        length: 31
                    }, {
                        name: "Shahrivar",
                        shortName: "Sha",
                        length: 31
                    }, {
                        name: "Mehr",
                        shortName: "Mehr",
                        length: 30
                    }, {
                        name: "Aban",
                        shortName: "Aban",
                        length: 30
                    }, {
                        name: "Azar",
                        shortName: "Azar",
                        length: 30
                    }, {
                        name: "Dey",
                        shortName: "Dey",
                        length: 30
                    }, {
                        name: "Bahman",
                        shortName: "Bah",
                        length: 30
                    }, {
                        name: "Esfand",
                        shortName: "Esf",
                        length: undefined
                    }],
                    [DateObject.locals.FA]: [{
                        name: "فروردین",
                        shortName: "فر",
                        length: 31
                    }, {
                        name: "اردیبهشت",
                        shortName: "ارد",
                        length: 31
                    }, {
                        name: "خرداد",
                        shortName: "خرد",
                        length: 31
                    }, {
                        name: "تیر",
                        shortName: "تیر",
                        length: 31
                    }, {
                        name: "مرداد",
                        shortName: "مر",
                        length: 31
                    }, {
                        name: "شهریور",
                        shortName: "شه",
                        length: 31
                    }, {
                        name: "مهر",
                        shortName: "مهر",
                        length: 30
                    }, {
                        name: "آبان",
                        shortName: "آبا",
                        length: 30
                    }, {
                        name: "آذر",
                        shortName: "آذر",
                        length: 30
                    }, {
                        name: "دی",
                        shortName: "دی",
                        length: 30
                    }, {
                        name: "بهمن",
                        shortName: "بهم",
                        length: 30
                    }, {
                        name: "اسفند",
                        shortName: "اسف",
                        length: undefined
                    }]
                }
            }
        });

        _weeks.set(this, {
            writable: true,
            value: {
                [DateObject.calendars.GEORGIAN]: {
                    [DateObject.locals.EN]: [{
                        name: "Sunday",
                        shortName: "Sun",
                        index: 0
                    }, {
                        name: "Monday",
                        shortName: "Mon",
                        index: 1
                    }, {
                        name: "Tuesday",
                        shortName: "Tue",
                        index: 2
                    }, {
                        name: "Wednesday",
                        shortName: "Wed",
                        index: 3
                    }, {
                        name: "Thursday",
                        shortName: "Thu",
                        index: 4
                    }, {
                        name: "Friday",
                        shortName: "Fri",
                        index: 5
                    }, {
                        name: "Saturday",
                        shortName: "Sat",
                        index: 6
                    }],
                    [DateObject.locals.FA]: [{
                        name: "یکشنبه",
                        shortName: "یک",
                        index: 0
                    }, {
                        name: "دوشنبه",
                        shortName: "دو",
                        index: 1
                    }, {
                        name: "سه شنبه",
                        shortName: "سه",
                        index: 2
                    }, {
                        name: "چهارشنبه",
                        shortName: "چهار",
                        index: 3
                    }, {
                        name: "پنجشنبه",
                        shortName: "پنج",
                        index: 4
                    }, {
                        name: "جمعه",
                        shortName: "جم",
                        index: 5
                    }, {
                        name: "شنبه",
                        shortName: "شن",
                        index: 6
                    }]
                },
                [DateObject.calendars.PERSIAN]: {
                    [DateObject.locals.EN]: [{
                        name: "Panjshanbeh",
                        shortName: "Panj",
                        index: 5
                    }, {
                        name: "Jomeh",
                        shortName: "Jom",
                        index: 6
                    }, {
                        name: "Shanbeh",
                        shortName: "Shan",
                        index: 0
                    }, {
                        name: "YekShanbeh",
                        shortName: "Yek",
                        index: 1
                    }, {
                        name: "Doshanbeh",
                        shortName: "do",
                        index: 2
                    }, {
                        name: "Seshanbeh",
                        shortName: "Se",
                        index: 3
                    }, {
                        name: "Chaharshanbeh",
                        shortName: "Char",
                        index: 4
                    }],
                    [DateObject.locals.FA]: [{
                        name: "پنجشنبه",
                        shortName: "پنج",
                        index: 5
                    }, {
                        name: "جمعه",
                        shortName: "جم",
                        index: 6
                    }, {
                        name: "شنبه",
                        shortName: "شن",
                        index: 0
                    }, {
                        name: "یکشنبه",
                        shortName: "یک",
                        index: 1
                    }, {
                        name: "دوشنبه",
                        shortName: "دو",
                        index: 2
                    }, {
                        name: "سه شنبه",
                        shortName: "سه",
                        index: 3
                    }, {
                        name: "چهارشنبه",
                        shortName: "چهار",
                        index: 4
                    }]
                }
            }
        });

        _digits.set(this, {
            writable: true,
            value: {
                [DateObject.locals.EN]: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                [DateObject.locals.FA]: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
            }
        });

        _meridiems.set(this, {
            writable: true,
            value: {
                [DateObject.locals.EN]: [{
                    lowerCase: "am",
                    upperCase: "AM"
                }, {
                    lowerCase: "pm",
                    upperCase: "PM"
                }],
                [DateObject.locals.FA]: [{
                    lowerCase: "ق.ظ",
                    upperCase: "قبل از ظهر"
                }, {
                    lowerCase: "ب.ظ",
                    upperCase: "بعد از ظهر"
                }]
            }
        });

        _fix.set(this, {
            writable: true,
            value: () => {
                const setMonth = () => {
                    let mustGetLeaps = false;

                    while (_classPrivateFieldGet(this, _month) < 1) {
                        _classPrivateFieldSet(this, _month, _classPrivateFieldGet(this, _month) + 12);

                        _classPrivateFieldSet(this, _year, _classPrivateFieldGet(this, _year) - 1);

                        if (_classPrivateFieldGet(this, _year) === 0) _classPrivateFieldSet(this, _year, -1);
                        mustGetLeaps = true;
                    }

                    while (_classPrivateFieldGet(this, _month) > 11) {
                        _classPrivateFieldSet(this, _month, _classPrivateFieldGet(this, _month) - 12);

                        _classPrivateFieldSet(this, _year, _classPrivateFieldGet(this, _year) + 1);

                        if (_classPrivateFieldGet(this, _year) === 0) _classPrivateFieldSet(this, _year, 1);
                        mustGetLeaps = true;
                    }

                    if (mustGetLeaps) _classPrivateFieldGet(this, _getLeaps).call(this);
                };

                while (_classPrivateFieldGet(this, _millisecond) >= 1000) {
                    _classPrivateFieldSet(this, _millisecond, _classPrivateFieldGet(this, _millisecond) - 1000);

                    _classPrivateFieldSet(this, _second, _classPrivateFieldGet(this, _second) + 1);
                }

                while (_classPrivateFieldGet(this, _millisecond) < 0) {
                    _classPrivateFieldSet(this, _millisecond, _classPrivateFieldGet(this, _millisecond) + 1000);

                    _classPrivateFieldSet(this, _second, _classPrivateFieldGet(this, _second) - 1);
                }

                while (_classPrivateFieldGet(this, _second) >= 60) {
                    _classPrivateFieldSet(this, _second, _classPrivateFieldGet(this, _second) - 60);

                    _classPrivateFieldSet(this, _minute, _classPrivateFieldGet(this, _minute) + 1);
                }

                while (_classPrivateFieldGet(this, _second) < 0) {
                    _classPrivateFieldSet(this, _second, _classPrivateFieldGet(this, _second) + 60);

                    _classPrivateFieldSet(this, _minute, _classPrivateFieldGet(this, _minute) - 1);
                }

                while (_classPrivateFieldGet(this, _minute) >= 60) {
                    _classPrivateFieldSet(this, _minute, _classPrivateFieldGet(this, _minute) - 60);

                    _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 1);
                }

                while (_classPrivateFieldGet(this, _minute) < 0) {
                    _classPrivateFieldSet(this, _minute, _classPrivateFieldGet(this, _minute) + 60);

                    _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) - 1);
                }

                while (_classPrivateFieldGet(this, _hour) >= 24) {
                    _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) - 24);

                    _classPrivateFieldSet(this, _day, _classPrivateFieldGet(this, _day) + 1);
                }

                while (_classPrivateFieldGet(this, _hour) < 0) {
                    _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 24);

                    _classPrivateFieldSet(this, _day, _classPrivateFieldGet(this, _day) - 1);
                }

                while (true) {
                    var _this$month;

                    if (_classPrivateFieldGet(this, _month) < 1 || _classPrivateFieldGet(this, _month) > 11) setMonth();

                    while (_classPrivateFieldGet(this, _day) < 1) {
                        _classPrivateFieldSet(this, _month, _classPrivateFieldGet(this, _month) - 1);

                        setMonth();

                        _classPrivateFieldSet(this, _day, this.month.length + _classPrivateFieldGet(this, _day));
                    }

                    if (_classPrivateFieldGet(this, _day) <= this.month.length) break;

                    _classPrivateFieldSet(this, _day, _classPrivateFieldGet(this, _day) - this.month.length);

                    _classPrivateFieldSet(this, _month, (_this$month = +_classPrivateFieldGet(this, _month)) + 1), _this$month;
                }
            }
        });

        _getLeaps.set(this, {
            writable: true,
            value: () => {
                if (_classPrivateFieldGet(this, _year) === 0) return;
                let year = _classPrivateFieldGet(this, _year) > 0 ? 1 : -1;

                let condition = () => _classPrivateFieldGet(this, _year) > 0 ? year <= _classPrivateFieldGet(this, _year) : _classPrivateFieldGet(this, _year) <= year;

                let increase = () => _classPrivateFieldGet(this, _year) > 0 ? year++ : year--;

                _classPrivateFieldSet(this, _leaps, []);

                switch (_classPrivateFieldGet(this, _calendar)) {
                    case DateObject.calendars.PERSIAN:
                        let delta = 0.242362;
                        let offset = 0.2684;
                        let correct = {
                            5: 4,
                            38: 37,
                            199: 198,
                            232: 231,
                            265: 264,
                            298: 297,
                            557: 558,
                            590: 591,
                            623: 624,
                            982: 983,
                            1015: 1016,
                            1048: 1049,
                            1081: 1082,
                            1114: 1115,
                            1242: 1243,
                            1374: 1375,
                            1407: 1408,
                            1440: 1441,
                            1506: 1507,
                            1539: 1540,
                            1572: 1573,
                            1605: 1606,
                            1931: 1932,
                            1964: 1965,
                            2063: 2064,
                            2096: 2097,
                            2687: 2686,
                            2720: 2719,
                            2753: 2752,
                            2819: 2818,
                            2852: 2851,
                            2885: 2884,
                            3017: 3016,
                            3112: 3111,
                            3145: 3144,
                            3178: 3177,
                            3211: 3210,
                            3244: 3243,
                            3277: 3276,
                            3310: 3309,
                            3343: 3342,
                            3376: 3375,
                            3409: 3408,
                            3442: 3441,
                            3508: 3507,
                            3541: 3540,
                            3574: 3573,
                            3603: 3602,
                            3607: 3606,
                            3636: 3635,
                            3669: 3668,
                            3702: 3701,
                            3706: 3705,
                            3735: 3734,
                            3768: 3767,
                            3801: 3800,
                            3834: 3833,
                            3867: 3866,
                            3900: 3899,
                            3933: 3932,
                            3966: 3965,
                            3999: 3998,
                            4065: 4064,
                            4094: 4093,
                            4098: 4097,
                            4127: 4126,
                            4131: 4130,
                            4160: 4159,
                            4193: 4192,
                            4226: 4225,
                            4259: 4258,
                            4292: 4291,
                            4325: 4324,
                            4358: 4357,
                            4391: 4390,
                            4585: 4584,
                            4618: 4617,
                            4651: 4650,
                            4750: 4749,
                            4943: 4944,
                            4976: 4977,
                            5009: 5010,
                            5170: 5171,
                            5203: 5204,
                            5236: 5237,
                            5265: 5266,
                            5269: 5270,
                            5298: 5299,
                            5302: 5303,
                            5331: 5332,
                            5335: 5336,
                            5364: 5365,
                            5368: 5369,
                            5393: 5394,
                            5397: 5398,
                            5401: 5402,
                            5426: 5427,
                            5430: 5431,
                            5434: 5435,
                            5459: 5460,
                            5463: 5464,
                            5467: 5468,
                            5492: 5493,
                            5496: 5497,
                            5500: 5501,
                            5521: 5522,
                            5525: 5526,
                            5529: 5530,
                            5554: 5555,
                            5558: 5559,
                            5562: 5563,
                            5587: 5588,
                            5591: 5592,
                            5595: 5596,
                            5616: 5617,
                            5620: 5621,
                            5624: 5625,
                            5628: 5629,
                            5649: 5650,
                            5653: 5654,
                            5657: 5658,
                            5661: 5662,
                            5682: 5683,
                            5686: 5687,
                            5690: 5691,
                            5694: 5695,
                            5715: 5716,
                            5719: 5720,
                            5723: 5724,
                            5727: 5728,
                            5744: 5745,
                            5748: 5749,
                            5752: 5753,
                            5756: 5757,
                            5760: 5761,
                            5777: 5778,
                            5781: 5782,
                            5785: 5786,
                            5789: 5790,
                            5793: 5794,
                            5810: 5811,
                            5814: 5815,
                            5818: 5819,
                            5822: 5823,
                            5826: 5827,
                            5839: 5840,
                            5843: 5844,
                            5847: 5848,
                            5851: 5852,
                            5855: 5856,
                            5859: 5860,
                            5872: 5873,
                            5876: 5877,
                            5880: 5881,
                            5884: 5885,
                            5888: 5889,
                            5892: 5893,
                            5901: 5902,
                            5905: 5906,
                            5909: 5910,
                            5913: 5914,
                            5917: 5918,
                            5921: 5922,
                            5925: 5926,
                            5934: 5935,
                            5938: 5939,
                            5942: 5943,
                            5946: 5947,
                            5950: 5951,
                            5954: 5955,
                            5958: 5959,
                            5967: 5968,
                            5971: 5972,
                            5975: 5976,
                            5979: 5980,
                            5983: 5984,
                            5987: 5988,
                            5991: 5992,
                            5996: 5997,
                            6000: 6001,
                            6004: 6005,
                            6008: 6009,
                            6012: 6013,
                            6016: 6017,
                            6020: 6021,
                            6029: 6030,
                            6033: 6034,
                            6037: 6038,
                            6041: 6042,
                            6045: 6046,
                            6049: 6050,
                            6053: 6054,
                            6058: 6059,
                            6062: 6063,
                            6066: 6067,
                            6070: 6071,
                            6074: 6075,
                            6078: 6079,
                            6082: 6083,
                            6086: 6087,
                            6091: 6092,
                            6095: 6096,
                            6099: 6100,
                            6103: 6104,
                            6107: 6108,
                            6111: 6112,
                            6115: 6116,
                            6119: 6120,
                            6124: 6125,
                            6128: 6129,
                            6132: 6133,
                            6136: 6137,
                            6140: 6141,
                            6144: 6145,
                            6148: 6149,
                            6152: 6154,
                            6157: 6158,
                            6161: 6162,
                            6165: 6166,
                            6169: 6170,
                            6173: 6174,
                            6177: 6178,
                            6181: 6182,
                            6185: 6187,
                            6190: 6191,
                            6194: 6195,
                            6198: 6199,
                            6202: 6203,
                            6206: 6207,
                            6210: 6211,
                            6214: 6215,
                            6218: 6220,
                            6223: 6224,
                            6227: 6228,
                            6231: 6232,
                            6235: 6236,
                            6239: 6240,
                            6243: 6244,
                            6247: 6249,
                            6251: 6253,
                            6256: 6257,
                            6260: 6261,
                            6264: 6265,
                            6268: 6269,
                            6272: 6273,
                            6276: 6277,
                            6280: 6282,
                            6284: 6286,
                            6289: 6290,
                            6293: 6294,
                            6297: 6298,
                            6301: 6302,
                            6305: 6306,
                            6309: 6310,
                            6313: 6315,
                            6317: 6319,
                            6322: 6323,
                            6326: 6327,
                            6330: 6331,
                            6334: 6335,
                            6338: 6339,
                            6342: 6344,
                            6346: 6348,
                            6350: 6352,
                            6355: 6356,
                            6359: 6360,
                            6363: 6364,
                            6367: 6368,
                            6371: 6372,
                            6375: 6377,
                            6379: 6381,
                            6383: 6385,
                            6388: 6389,
                            6392: 6393,
                            6396: 6397,
                            6400: 6401,
                            6404: 6406,
                            6408: 6410,
                            6412: 6414,
                            6416: 6418,
                            6421: 6422,
                            6425: 6426,
                            6429: 6430,
                            6433: 6434,
                            6437: 6439,
                            6441: 6443,
                            6445: 6447,
                            6449: 6451,
                            6454: 6455,
                            6458: 6459,
                            6462: 6463,
                            6466: 6468,
                            6470: 6472,
                            6474: 6476,
                            6478: 6480,
                            6482: 6484,
                            6487: 6488,
                            6491: 6492,
                            6495: 6496
                        };

                        while (condition()) {
                            offset = offset + (_classPrivateFieldGet(this, _year) > 0 ? delta : -1 * delta);
                            if (offset > 1) offset -= 1;
                            if (offset < 0) offset += 1;

                            if (offset >= 0.257800926 && offset <= 0.5) {
                                let $correct = correct[year] || year;
                                if (_classPrivateFieldGet(this, _year) > 0 && $correct <= _classPrivateFieldGet(this, _year)) _classPrivateFieldGet(this, _leaps).push($correct);
                                if (_classPrivateFieldGet(this, _year) < 0) _classPrivateFieldGet(this, _leaps).push($correct);
                            }

                            increase();
                        }

                        break;

                    default:
                        while (condition()) {
                            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) _classPrivateFieldGet(this, _leaps).push(year);
                            increase();
                        }

                }
            }
        });

        if (object instanceof Date || object instanceof DateObject || typeof object === "string") object = {
            date: object
        };
        let {
            calendar,
            local,
            format,
            date,
            year: _year2,
            month: _month2,
            day,
            hour: _hour2,
            minute,
            second,
            millisecond
        } = object;
        let _mustGetLeaps = true;
        if (calendar) _classPrivateFieldSet(this, _calendar, DateObject.calendars[calendar.toUpperCase()]);
        if (!_classPrivateFieldGet(this, _calendar)) throw new Error("calendar not found");
        if (local) _classPrivateFieldSet(this, _local, DateObject.locals[local.toUpperCase()] || DateObject.locals.EN);
        if (calendar && !date && !_year2 && !_month2 && !day && !_hour2 && !minute && !second && !millisecond) date = new Date();

        _classPrivateFieldSet(this, _format, format);

        if (typeof date === "string") this.parse(date);

        const setDate = () => {
            if (_month2 === 0) _month2 = 1;

            _classPrivateFieldSet(this, _year, _year2);

            _classPrivateFieldSet(this, _month, _month2 - 1);

            _classPrivateFieldSet(this, _day, day);

            _classPrivateFieldSet(this, _hour, _hour2);

            _classPrivateFieldSet(this, _minute, minute);

            _classPrivateFieldSet(this, _second, second);

            _classPrivateFieldSet(this, _millisecond, millisecond);
        };

        if (date instanceof DateObject) {
            _classPrivateFieldSet(this, _year, date.year);

            _classPrivateFieldSet(this, _month, date.month.index);

            _classPrivateFieldSet(this, _day, date.day);

            _classPrivateFieldSet(this, _hour, date.hour);

            _classPrivateFieldSet(this, _minute, date.minute);

            _classPrivateFieldSet(this, _second, date.second);

            _classPrivateFieldSet(this, _millisecond, date.millisecond);

            _classPrivateFieldSet(this, _calendar, date.calendar.toUpperCase());

            _classPrivateFieldSet(this, _local, date.local.toUpperCase());

            _classPrivateFieldSet(this, _format, date._format);

            _classPrivateFieldSet(this, _leaps, date.leaps);

            _mustGetLeaps = false;
        }

        if (date instanceof Date) {
            _year2 = date.getFullYear();
            _month2 = date.getMonth() + 1;
            day = date.getDate();
            _hour2 = date.getHours();
            minute = date.getMinutes();
            second = date.getSeconds();
            millisecond = date.getMilliseconds();

            if (_classPrivateFieldGet(this, _calendar) !== DateObject.calendars.GEORGIAN) {
                let dateObject = new DateObject({
                    year: _year2,
                    month: _month2,
                    day,
                    hour: _hour2,
                    minute,
                    second
                }).convert(_classPrivateFieldGet(this, _calendar));
                _year2 = dateObject.year;
                _month2 = dateObject.month.number;
                day = dateObject.day;
                _hour2 = dateObject.hour;
                minute = dateObject.minute;
                second = dateObject.second;
                millisecond = dateObject.millisecond;
            }

            setDate();
        }

        if (!date) setDate();

        if (_mustGetLeaps) {
            _classPrivateFieldGet(this, _getLeaps).call(this);

            _classPrivateFieldGet(this, _fix).call(this);
        }
    }

    parse(string) {
        if (!string) return;

        let format = _classPrivateFieldGet(this, _format);

        if (_classPrivateFieldGet(this, _local) !== DateObject.locals.en) {
            let digits = _classPrivateFieldGet(this, _digits)[_classPrivateFieldGet(this, _local)];

            for (let digit of digits) {
                string = string.replace(new RegExp(digit, "g"), digits.indexOf(digit));
            }
        }

        if (!format) {
            const regex = /(-?\d{2,4})?\W?([A-z]{3,9}|\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,2})?\W?(\d{1,3})?\W?(am|pm)?/;
            let [, year, month, day, hour, minute, second, millisecond, a] = string.match(regex);

            if (month) {
                if (/\d+/.test(month)) {
                    month = Number(month) - 1;
                } else {
                    month = this.months.findIndex($month => new RegExp(month, "i").test($month.name));
                }
            }

            _classPrivateFieldSet(this, _year, year ? Number(year) : 0);

            _classPrivateFieldSet(this, _month, month || 0);

            _classPrivateFieldSet(this, _day, Number(day || 1));

            _classPrivateFieldSet(this, _hour, Number(hour || 0));

            _classPrivateFieldSet(this, _minute, Number(minute || 0));

            _classPrivateFieldSet(this, _second, Number(second || 0));

            _classPrivateFieldSet(this, _millisecond, Number(millisecond || 0));

            if (a && a === "pm" && _classPrivateFieldGet(this, _hour) < 12) {
                _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 12);
            }
        } else {
            for (let key in _classPrivateFieldGet(this, _types)) {
                const match = format.match(new RegExp(key));
                if (!match) continue;
                const str = string.substring(match.index, string.length).match(_classPrivateFieldGet(this, _types)[key])[0];

                _classPrivateFieldGet(this, _reverse)[key](str);

                format = format.replace(key, "?".repeat(key.length));
            }

            if (!_classPrivateFieldGet(this, _hour)) _classPrivateFieldSet(this, _hour, 0);
            if (!_classPrivateFieldGet(this, _minute)) _classPrivateFieldSet(this, _minute, 0);
            if (!_classPrivateFieldGet(this, _second)) _classPrivateFieldSet(this, _second, 0);
            if (!_classPrivateFieldGet(this, _millisecond)) _classPrivateFieldSet(this, _millisecond, 0);
        }

        if (string.includes(_classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _local)][1].lowerCase) && _classPrivateFieldGet(this, _hour) < 12) {
            _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 12);
        }

        if (string.includes(_classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _local)][1].upperCase) && _classPrivateFieldGet(this, _hour) < 12) {
            _classPrivateFieldSet(this, _hour, _classPrivateFieldGet(this, _hour) + 12);
        }
    }

    convert(calendar = DateObject.calendars.GEORGIAN) {
        calendar = DateObject.calendars[calendar.toUpperCase()];
        if (!calendar) throw new Error("calendar not found");
        if (calendar === _classPrivateFieldGet(this, _calendar)) return this;

        const difference = () => {
            let difference = 0;

            switch (_classPrivateFieldGet(this, _calendar)) {
                case DateObject.calendars.PERSIAN:
                    if (calendar === DateObject.calendars.GEORGIAN) difference = 226895;
                    break;

                case DateObject.calendars.GEORGIAN:
                    if (calendar === DateObject.calendars.PERSIAN) difference = -226895;
                    break;

                default:
                    difference = 0;
            }

            return difference;
        };

        const offset = () => {
            let offset = 0;

            switch (_classPrivateFieldGet(this, _calendar) + "->" + calendar) {
                case "PERSIAN->GEORGIAN":
                case "GEORGIAN->PERSIAN":
                    if (_classPrivateFieldGet(this, _month) < 10 || _classPrivateFieldGet(this, _month) === 10 && _classPrivateFieldGet(this, _day) <= (this.isLeap ? 11 : 10)) {
                        offset = calendar === DateObject.calendars.GEORGIAN ? 621 : -621;
                    } else {
                        offset = calendar === DateObject.calendars.GEORGIAN ? 622 : -622;
                    }

                    break;

                default:
                    offset = 0;
            }

            return offset;
        };

        let year = _classPrivateFieldGet(this, _year);

        let days = this.dayOfBeginning;
        let month = undefined;
        let target = undefined;
        days += difference();
        target = new DateObject({
            calendar,
            year: year + offset(),
            month: 1,
            day: 1
        });
        days -= target.isLeap ? target.leaps.length - 1 : target.leaps.length;
        year = ~~(days / 365) + 1;
        days = days % 365;
        month = 0;

        _classPrivateFieldSet(this, _year, year);

        _classPrivateFieldSet(this, _month, month);

        _classPrivateFieldSet(this, _day, ~~days);

        _classPrivateFieldSet(this, _calendar, calendar);

        _classPrivateFieldGet(this, _getLeaps).call(this);

        _classPrivateFieldGet(this, _fix).call(this);

        return this;
    }

    format(format) {
        if (!format) format = _classPrivateFieldGet(this, _format) || "YYYY/MM/DD";
        let index = 100; //can be any number

        let object = {};

        for (let key in _classPrivateFieldGet(this, _types)) {
            while (format.includes(key)) {
                format = format.replace(key, index);
                object[index] = this.getProperty(key);
                index++;
            }
        }

        for (let key in object) {
            format = format.replace(key, object[key]);
        }

        if (_classPrivateFieldGet(this, _local) !== DateObject.locals.en) {
            let digits = _classPrivateFieldGet(this, _digits)[_classPrivateFieldGet(this, _local)];

            format = format.replace(/[0-9]/g, w => digits[w]);
        }

        return format;
    }

    getProperty(key) {
        const pad = number => number < 10 ? "0" + number : number;

        switch (key) {
            case "YYYY":
                return this.year;

            case "YY":
                return this.year.toString().substring(2, 4);

            case "MMMM":
                return this.month.name;

            case "MMM":
                return this.month.shortName;

            case "MM":
                return pad(this.month.number);

            case "M":
                return this.month.number;

            case "DDDD":
                return this.dayOfYear;

            case "DDD":
                return this.dayOfYear;

            case "DD":
                return pad(this.day);

            case "D":
                return this.day;

            case "HH":
                return pad(this.hour);

            case "H":
                return this.hour;

            case "dddd":
                return this.weekDay.name;

            case "ddd":
                return this.weekDay.shortName;

            case "hh":
                return pad(this.hour > 12 ? this.hour - 12 : this.hour);

            case "h":
                return this.hour > 12 ? this.hour - 12 : this.hour;

            case "mm":
                return pad(this.minute);

            case "m":
                return this.minute;

            case "ss":
                return pad(this.second);

            case "s":
                return this.second;

            case "SSS":
                return _classPrivateFieldGet(this, _millisecond);

            case "SS":
                return _classPrivateFieldGet(this, _millisecond).toString().substring(0, 2);

            case "S":
                return _classPrivateFieldGet(this, _millisecond).toString().substring(0, 1);

            case "a":
                return this.hour > 12 ? _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _local)][1].lowerCase : _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _local)][0].lowerCase;

            case "A":
                return this.hour > 12 ? _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _local)][1].upperCase : _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _local)][0].upperCase;

            default:
                return "";
        }
    }

    setYear(number) {
        this.year = number;
        return this;
    }

    setMonth(number) {
        this.month = number;
        return this;
    }

    setDay(number) {
        this.day = number;
        return this;
    }

    setHour(number) {
        this.hour = number;
        return this;
    }

    setMinute(number) {
        this.minute = number;
        return this;
    }

    setSecond(number) {
        this.second = number;
        return this;
    }

    setMillisecond(number) {
        this.millisecond = number;
        return this;
    }

    setFormat(format) {
        _classPrivateFieldSet(this, _format, format);

        return this;
    }

    setLocal(local) {
        this.local = local;
        return this;
    }

    setCalendar(calendar) {
        this.calendar = calendar;
        return this;
    }

    toFirstOfYear() {
        this.month = 1;
        this.day = 1;
        return this;
    }

    toLastOfYear() {
        if (this.day >= 29) this.day = 29;
        this.month = 12;
        this.toLastOfMonth();
        return this;
    }

    toFirstOfMonth() {
        _classPrivateFieldSet(this, _day, 1);

        return this;
    }

    toLastOfMonth() {
        _classPrivateFieldSet(this, _day, 0);

        _classPrivateFieldSet(this, _month, _classPrivateFieldGet(this, _month) + 1);

        _classPrivateFieldGet(this, _fix).call(this);

        return this;
    }

    toFirstOfWeek() {
        this.day -= this.weekDay.index;
        return this;
    }

    toLastOfWeek() {
        this.day += 6 - this.weekDay.index;
        return this;
    }

    toFirstWeekOfYear() {
        this.toFirstOfYear();
        if (this.weekDay.index === 0) return this;
        return this.toLastOfWeek().setDay(this.day + 1);
    }

    toLastWeekOfYear() {
        return this.toLastOfYear().toFirstOfWeek();
    }

    toString() {
        return this.format();
    }

    toDate() {
        if (_classPrivateFieldGet(this, _calendar) !== DateObject.calendars.GEORGIAN) this.convert(DateObject.calendars.GEORGIAN);
        return new Date(_classPrivateFieldGet(this, _year), _classPrivateFieldGet(this, _month), _classPrivateFieldGet(this, _day), _classPrivateFieldGet(this, _hour), _classPrivateFieldGet(this, _second));
    }

    get dayOfBeginning() {
        let days = (_classPrivateFieldGet(this, _year) > 0 ? _classPrivateFieldGet(this, _year) - 1 : _classPrivateFieldGet(this, _year)) * 365;
        let leapsLength = this.isLeap ? this.leaps.length - 1 : this.leaps.length;
        if (_classPrivateFieldGet(this, _year) > 0) days += leapsLength;
        if (_classPrivateFieldGet(this, _year) < 0) days -= leapsLength;
        days += this.dayOfYear;
        return days;
    }

    get dayOfYear() {
        let days = _classPrivateFieldGet(this, _day);

        let months = this.months;

        for (let i = 0; i <= months.length; i++) {
            if (i >= _classPrivateFieldGet(this, _month)) break;
            days += months[i].length;
        }

        return days;
    }

    get weekOfYear() {
        return ~~(this.dayOfYear / 7) + 1;
    }

    get daysLeft() {
        let days = this.isLeap ? 366 : 365;
        return days - this.dayOfYear;
    }

    get year() {
        return _classPrivateFieldGet(this, _year);
    }

    get month() {
        let month = this.months[_classPrivateFieldGet(this, _month)];

        month.index = _classPrivateFieldGet(this, _month);
        month.number = month.index + 1;

        month.toString = function () {
            return this.number;
        };

        return month;
    }

    get day() {
        return _classPrivateFieldGet(this, _day);
    }

    get weekDay() {
        let index = this.dayOfBeginning % 7;
        if (index < 0) index += 7;

        let weekDay = _classPrivateFieldGet(this, _weeks)[_classPrivateFieldGet(this, _calendar)][_classPrivateFieldGet(this, _local)][index];

        weekDay.number = weekDay.index + 1;

        weekDay.toString = function () {
            return this.number;
        };

        return weekDay;
    }

    get hour() {
        return _classPrivateFieldGet(this, _hour);
    }

    get minute() {
        return _classPrivateFieldGet(this, _minute);
    }

    get second() {
        return _classPrivateFieldGet(this, _second);
    }

    get millisecond() {
        return _classPrivateFieldGet(this, _millisecond);
    }

    get months() {
        let months = _classPrivateFieldGet(this, _months)[_classPrivateFieldGet(this, _calendar)][_classPrivateFieldGet(this, _local)];

        switch (_classPrivateFieldGet(this, _calendar)) {
            case DateObject.calendars.PERSIAN:
                months[11].length = this.isLeap ? 30 : 29;
                break;

            default:
                months[1].length = this.isLeap ? 29 : 28;
        }

        return months;
    }

    get weeks() {
        let weeks = _classPrivateFieldGet(this, _weeks)[_classPrivateFieldGet(this, _calendar)][_classPrivateFieldGet(this, _local)];

        weeks.sort((a, b) => a.index - b.index);
        weeks = weeks.map(week => {
            return {
                ...week,
                number: week.index + 1
            };
        });
        return weeks;
    }

    get leaps() {
        return _classPrivateFieldGet(this, _leaps);
    }

    get calendar() {
        return _classPrivateFieldGet(this, _calendar).toLowerCase();
    }

    get local() {
        return _classPrivateFieldGet(this, _local).toLowerCase();
    }

    get meridiems() {
        return _classPrivateFieldGet(this, _meridiems)[_classPrivateFieldGet(this, _local)];
    }

    get _format() {
        return _classPrivateFieldGet(this, _format);
    }

    get isLeap() {
        return _classPrivateFieldGet(this, _leaps).includes(_classPrivateFieldGet(this, _year));
    }

    set year(value) {
        _classPrivateFieldSet(this, _year, value);

        _classPrivateFieldGet(this, _getLeaps).call(this);

        _classPrivateFieldGet(this, _fix).call(this);
    }

    set month(value) {
        _classPrivateFieldSet(this, _month, value - 1);

        _classPrivateFieldGet(this, _fix).call(this);
    }

    set day(value) {
        _classPrivateFieldSet(this, _day, value);

        _classPrivateFieldGet(this, _fix).call(this);
    }

    set hour(value) {
        _classPrivateFieldSet(this, _hour, value);

        _classPrivateFieldGet(this, _fix).call(this);
    }

    set minute(value) {
        _classPrivateFieldSet(this, _minute, value);

        _classPrivateFieldGet(this, _fix).call(this);
    }

    set second(value) {
        _classPrivateFieldSet(this, _second, value);

        _classPrivateFieldGet(this, _fix).call(this);
    }

    set millisecond(value) {
        _classPrivateFieldSet(this, _millisecond, value);

        _classPrivateFieldGet(this, _fix).call(this);
    }

    set calendar(calendar) {
        this.convert(calendar);
    }

    set local(local) {
        local = local.toUpperCase();
        if (!DateObject.locals[local]) local = DateObject.locals.en;

        _classPrivateFieldSet(this, _local, local);
    }

    set _format(format) {
        _classPrivateFieldSet(this, _format, format);
    }

}

_defineProperty(DateObject, "calendars", {
    GEORGIAN: "GEORGIAN",
    PERSIAN: "PERSIAN"
});

_defineProperty(DateObject, "locals", {
    EN: "EN",
    FA: "FA"
});