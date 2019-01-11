function daysInMonth(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}

export { daysInMonth };
