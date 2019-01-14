const isEven = val => val % 2 === 0;
function sumEvenArgs(...args) {
  return args.filter(isEven).reduce((acc, val) => acc + val, 0);
}

export { sumEvenArgs };
