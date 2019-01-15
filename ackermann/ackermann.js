// import { runInNewContext } from 'vm';

const map = new Map();

function ackermann(m, n) {
  const key = `${m}-${n}`;
  if (map.has(key)) {
    return map.get(key);
  }
  if (m === 0) {
    const val = n + 1;
    map.set(key, val);
    return val;
  }
  if (n === 0) {
    const val = ackermann(m - 1, 1);
    map.set(`${m - 1}-1`, val);
    return val;
  }
  const val = ackermann(m, n - 1);
  map.set(`${m}-${n - 1}`, val);
  const nVal = val;
  return ackermann(m - 1, nVal);
}

export { ackermann };
