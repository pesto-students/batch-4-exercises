function buildtimeWasString(timePassed, interval, intervalName) {
  const intervalsPassed = timePassed / interval;
  return intervalsPassed > 1
    ? `${intervalsPassed} ${intervalName}s ago`
    : `${intervalsPassed} ${intervalName} ago`;
}

function timeWas(previousTime, currentTime) {
  const timePassed = (currentTime || Date.now()) - previousTime;
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  if (timePassed >= YEARS) {
    return buildtimeWasString(timePassed, YEARS, 'year');
  }

  if (timePassed >= MONTHS) {
    return buildtimeWasString(timePassed, MONTHS, 'month');
  }

  if (timePassed >= WEEKS) {
    return buildtimeWasString(timePassed, WEEKS, 'week');
  }

  if (timePassed >= DAYS) {
    return buildtimeWasString(timePassed, DAYS, 'day');
  }

  if (timePassed >= HOURS) {
    return buildtimeWasString(timePassed, HOURS, 'hour');
  }

  if (timePassed >= MINUTES) {
    return buildtimeWasString(timePassed, MINUTES, 'minute');
  }

  if (timePassed >= SECONDS) {
    return buildtimeWasString(timePassed, SECONDS, 'second');
  }

  return 'just now';
}

export { timeWas };
