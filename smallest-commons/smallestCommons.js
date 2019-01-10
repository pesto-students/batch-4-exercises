function LCMTwoNumbers(num1, num2) {
  let greater;
  let smaller;
  if (num2 > num1) {
    greater = num2;
    smaller = num1;
  } else {
    greater = num1;
    smaller = num2;
  }

  for (let i = smaller; i <= greater * smaller; i += smaller) {
    if (i % greater === 0) {
      return i;
    }
  }
}

function smallestCommons([start, end]) {
  const series = [];
  if (start <= end) {
    for (let i = start; i <= end; i += 1) {
      series.push(i);
    }
  } else {
    // start from backward if end is smaller than start
    for (let i = end; i <= start; i += 1) {
      series.push(i);
    }
  }

  return series.reduce(LCMTwoNumbers, 1);
}

export { smallestCommons };
