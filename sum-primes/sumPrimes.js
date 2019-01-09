function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumPrimes(...args) {
  const n = args[0];
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export { sumPrimes };
