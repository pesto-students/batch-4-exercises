function orbitalPeriod(arr) {
  return arr.map(({ name, avgAlt }) => {
    const GM = 398600.4418;
    const r = 6367.4447;
    const a = r + avgAlt;

    // prettier-ignore
    return { name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt((a ** 3) / GM)) };
  });
}

export { orbitalPeriod };
