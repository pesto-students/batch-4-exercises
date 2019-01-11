function timeWas(ms, reference) {
  let NOW = 1516816290;
  if (reference) {
    NOW = reference;
  }
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;
  const diff = NOW - ms;

  if (diff <= 1000) {
    return 'just now';
  }

  function createResponse(value, unit) {
    if (value === 1) {
      return `${value} ${unit} ago`;
    }
    return (`${value} ${unit}s ago`);
  }

  if (Math.floor(diff / YEARS, 10) !== 0) {
    return createResponse(Math.floor(diff / YEARS, 10), 'year');
  }

  if (Math.floor(diff / MONTHS, 10) !== 0) {
    return createResponse(Math.floor(diff / MONTHS, 10), 'month');
  }
  if (Math.floor(diff / WEEKS, 10) !== 0) {
    return createResponse(Math.floor(diff / WEEKS, 10), 'week');
  }
  if (Math.floor(diff / DAYS, 10) !== 0) {
    return createResponse(Math.floor(diff / DAYS, 10), 'day');
  }
  if (Math.floor(diff / HOURS, 10) !== 0) {
    return createResponse(Math.floor(diff / HOURS, 10), 'hour');
  }
  if (Math.floor(diff / MINUTES, 10) !== 0) {
    return createResponse(Math.floor(diff / MINUTES, 10), 'minute');
  }
  if (Math.floor(diff / SECONDS, 10) !== 0) {
    return createResponse(Math.floor(diff / SECONDS, 10), 'second');
  }
}

export {
  timeWas,
};
