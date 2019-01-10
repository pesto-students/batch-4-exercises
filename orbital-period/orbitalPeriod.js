const GM = 398600.4418; // in km3s-2
const earthRadius = 6367.4447; // in km
function orbitalPeriod(ary) {
  return ary.map((item) => {
    const newItem = {};
    newItem.name = item.name;
    const a = item.avgAlt + earthRadius;
    const aCube = a ** 3;
    newItem.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(aCube / GM));
    return newItem;
  });
}

export { orbitalPeriod };
