const GM = 398600.4418;
const earthRadius = 6367.4447;
function calculateOrbitalPeriod(semiMajorAxis){
  return Math.round(2 * Math.PI * Math.sqrt((semiMajorAxis ** 3) / GM));
}

function orbitalPeriod(input) {
  input.map((satObj) => {
    var semiMajorAxis = earthRadius + satObj.avgAlt;

    satObj.orbitalPeriod = calculateOrbitalPeriod(semiMajorAxis);
    delete satObj.avgAlt;

    return [satObj];
  });

  return input;
}

export {
  orbitalPeriod,
};
