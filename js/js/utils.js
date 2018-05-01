'use strict';

function yearDifference(date1, date2) {
  var before;
  var after;

  if (date1.getTime() < date2.getTime()) {
    before = date1;
    after = date2;
  } else {
    before = date2;
    after = date1;
  }

  var yearDiff = after.getFullYear() - before.getFullYear();

  if (after.getMonth() < before.getMonth()) {
    yearDiff--;
  } else if (after.getMonth() === before.getMonth()) {
    if (after.getDate() < before.getDate()) {
      yearDiff--;
    } else if (after.getDate() === before.getDate()) {
      if (after.getHours() < before.getHours()) {
        yearDiff--;
      } else if (after.getHours() === before.getHours()) {
        if (after.getMinutes() < before.getMinutes()) {
          yearDiff--;
        } else if (after.getMinutes() === before.getMinutes()) {
          if (after.getSeconds() < before.getSeconds()) {
            yearDiff--;
          } else if (after.getSeconds() === before.getSeconds()) {
            if (after.getMilliseconds() < before.getMilliseconds()) {
              yearDiff--;
            }
          }
        }
      }
    }
  }

  if (yearDiff < 0) {
    return 0;
  } else {
    return yearDiff;
  }
}

console.log(yearDifference(new Date(1986, 7, 13, 8, 30, 1, 1), new Date(1987, 7, 13, 8, 30, 1, 0)));