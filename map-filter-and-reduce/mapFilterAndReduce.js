function mapFilterAndReduce(firstNames) {
  return firstNames
    .filter(({ firstName }) => firstName.length < 5)
    .reduce((acc, { firstName }) => ({ ...acc, [firstName]: firstName.length }), {});
}

export { mapFilterAndReduce };
