const NO_OF_DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
function daysInMonth(year, month) {
  if (month !== 2) {
    return NO_OF_DAYS_IN_MONTH[month - 1];
  }
  return isLeapYear(year) ? 29 : 28;
}

export { daysInMonth };
