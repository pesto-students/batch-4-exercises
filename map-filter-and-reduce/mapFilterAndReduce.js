function mapFilterAndReduce(ary) {
  return ary
    .filter(obj => obj.firstName.length < 5)
    .reduce((acc, obj) => {
      acc[obj.firstName] = obj.firstName.length;
      return acc;
    }, {});
}

export { mapFilterAndReduce };
