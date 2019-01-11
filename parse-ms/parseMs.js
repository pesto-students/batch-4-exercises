function parseMs(millisecondsArgs) {
  let temp = millisecondsArgs;
  const milliseconds = Math.round(temp % 1000);
  temp /= 1000;
  const seconds = Math.round(temp % 60);
  temp /= 60;
  const minutes = Math.round(temp % 60);
  temp /= 60;
  const hours = Math.round(temp % 24);
  temp /= 24;
  const days = Math.round(temp);
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

export { parseMs };
