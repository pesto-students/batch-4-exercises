function daysInMonth(year, month) {
  if (month == 2) {
    if (year % 4 == 0) {
      return 29

    } else {
      return 28
    }
  }
  if ((month <= 7)) {
    if (month % 2 == 1) {
      return 31
    } else {
      return 30
    }
  } else {
    if (month % 2 == 0) {
      return 31
    } else {
      return 30
    }
  }
}

export {
  daysInMonth,
};