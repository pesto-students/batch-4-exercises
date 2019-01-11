
function timeWas(newNow) {
  const NOW = 1516816290;
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;
  const timeDifferenceSeconds = NOW - newNow;
  if (timeDifferenceSeconds <= 1) return 'just now';
  if (timeDifferenceSeconds >= SECONDS && timeDifferenceSeconds < MINUTES) return `${timeDifferenceSeconds} seconds ago`;
  if (timeDifferenceSeconds >= MINUTES && timeDifferenceSeconds < HOURS) return `${timeDifferenceSeconds} minutes ago`;
  if (timeDifferenceSeconds >= HOURS && timeDifferenceSeconds < DAYS) return `${timeDifferenceSeconds} hours ago`;
  if (timeDifferenceSeconds >= DAYS && timeDifferenceSeconds < WEEKS) return `${timeDifferenceSeconds} days ago`;
  if (timeDifferenceSeconds >= WEEKS && timeDifferenceSeconds < MONTHS) return `${timeDifferenceSeconds} weeks ago`;
  if (timeDifferenceSeconds >= MONTHS && timeDifferenceSeconds < YEARS) return `${timeDifferenceSeconds} months ago`;
  return timeDifferenceSeconds;
}

export {
  timeWas,
};
