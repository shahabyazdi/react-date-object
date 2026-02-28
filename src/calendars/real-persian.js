"use strict";

var persian = require("../../node_modules/date-object/calendars/cjs/persian");

// The "Old Persian" (Imperial/Shahanshahi) calendar uses the same
// solar calendar as the modern Persian (Solar Hijri) calendar,
// but counts years from the founding of the Achaemenid Empire
// by Cyrus the Great (559 BCE) instead of the Islamic Hijra (622 CE).

var HIJRI_EPOCH_CE = 622;
var ACHAEMENID_EPOCH_BCE = 559;
var YEAR_OFFSET = HIJRI_EPOCH_CE + ACHAEMENID_EPOCH_BCE - 1; // 1180

var realPersian = {
  name: "real-persian",
  startYear: persian.startYear + YEAR_OFFSET,
  yearLength: persian.yearLength,
  epoch: persian.epoch,
  century: Math.ceil((persian.century * 100 + YEAR_OFFSET) / 100),
  weekStartDayIndex: persian.weekStartDayIndex,
  getMonthLengths: function (isLeap) {
    return persian.getMonthLengths(isLeap);
  },
  isLeap: function (year) {
    return persian.isLeap(year - YEAR_OFFSET);
  },
  getLeaps: function (currentYear) {
    var persianYear = currentYear - YEAR_OFFSET;
    var leaps = persian.getLeaps(persianYear);
    if (!leaps) return leaps;
    return leaps.map(function (y) {
      return y + YEAR_OFFSET;
    });
  },
  getDayOfYear: function (date) {
    return persian.getDayOfYear(date);
  },
  getAllDays: function (date) {
    return persian.getAllDays.call(persian, {
      year: date.year - YEAR_OFFSET,
      month: date.month,
      day: date.day,
    });
  },
  guessYear: function (days, currentYear) {
    return persian.guessYear(days, currentYear) + YEAR_OFFSET;
  },
};

module.exports = realPersian;
