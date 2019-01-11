// Created custom round function instead of using Math.round because
// Math.round ceils after 0.5 but test case asks for ceiling after 0.49
function customRound(num) {
  if (Math.abs(num) - 0.49 > Math.abs(Math.floor(num))) {
    return Math.ceil(num);
  }
  return Math.floor(num);
}

function round(rountType, number, places) {
  const multiplier = 10 ** places;
  switch (rountType) {
    case 'up':
      return Math.ceil(number * multiplier) / multiplier;
    case 'down':
      return Math.floor(number * multiplier) / multiplier;
    default:
      return customRound(number * multiplier) / multiplier;
  }
}

const roundTo = round.bind(null, null);
roundTo.up = round.bind(null, 'up');
roundTo.down = round.bind(null, 'down');

export { roundTo };
