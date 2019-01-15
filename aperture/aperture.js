const sliceTupleFrom = (list, index, tupleLength) => list.slice(index, index + tupleLength);

function aperture(tupleLength, list) {
  return list.reduce((accumulator, element, index) => {
    const currentTuple = sliceTupleFrom(list, index, tupleLength);
    if (currentTuple.length === tupleLength) {
      accumulator.push(currentTuple);
    }
    return accumulator;
  }, []);
}

export { aperture };
