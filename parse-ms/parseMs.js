/* eslint-disable padded-blocks */
function parseMs(milliSeconds) {

  const absMilliSeconds = Math.abs(milliSeconds);

  const SEC = 1000;
  const MINUTE = SEC * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  let multiplier = 1;
  let reminder = 0;

  if (milliSeconds < 0) {
    multiplier = -1;
  }

  const days = Math.floor(absMilliSeconds / (DAY), 10);
  reminder = absMilliSeconds % (DAY);
  const hours = Math.floor(reminder / (HOUR), 10);
  reminder %= (HOUR);
  const minutes = Math.floor(reminder / (MINUTE), 10);
  reminder %= (MINUTE);
  const seconds = Math.floor(reminder / (SEC), 10);
  const millis = Math.floor(absMilliSeconds % (SEC), 10);


  const response = {
    days: days * multiplier,
    hours: hours * multiplier,
    minutes: minutes * multiplier,
    seconds: seconds * multiplier,
    milliseconds: millis * multiplier,

  };
  return response;
}

export {
  parseMs,
};
