function parseMs(milliseconds) {
  const milsInSecond = 1000;
  const milsInMinute = milsInSecond * 60;
  const milsInHour = milsInMinute * 60;
  const milsInDay = 24 * milsInHour;

  const isNegative = milliseconds < 0;

  let milsGiven = isNegative ? milliseconds * -1 : milliseconds;

  const finalTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  if (milsGiven > milsInDay) {
    finalTime.days = Math.floor(milsGiven / milsInDay);
    milsGiven -= milsInDay * finalTime.days;
  }

  if (milsGiven > milsInHour) {
    finalTime.hours = Math.floor(milsGiven / milsInHour);
    milsGiven -= milsInHour * finalTime.hours;
  }

  if (milsGiven > milsInMinute) {
    finalTime.minutes = Math.floor(milsGiven / milsInMinute);
    milsGiven -= milsInMinute * finalTime.minutes;
  }

  if (milsGiven > milsInSecond) {
    finalTime.seconds = Math.floor(milsGiven / milsInSecond);
    milsGiven -= milsInSecond * finalTime.seconds;
  }

  finalTime.milliseconds = milsGiven;

  if (isNegative) {
    for (const key of Object.keys(finalTime)) {
      finalTime[key] = -finalTime[key];
    }
  }

  return finalTime;
}

export { parseMs };
