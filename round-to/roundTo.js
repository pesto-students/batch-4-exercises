function roundTo(inputNumber, precision) {
  const roundedNumber = Math.round(inputNumber * multiplier) + 'e-' + precision;
  return Number(roundedNumber);
}

roundTo.up = function (inputNumber, precision) {
  const roundedNumber = Math.ceil(inputNumber * multiplier) / multiplier;
  return roundedNumber;
};
roundTo.down = function (inputNumber, precision) {
  const multiplier = Math.pow(10, precision);
  const roundedNumber = Math.floor(inputNumber * multiplier) / multiplier;
  return roundedNumber;
};

export {
  roundTo,
};