
function mapFilterAndReduce(personArray) {
  return personArray.filter(personObject => personObject.firstName.length < 5)
    .map(personObject => ({ [personObject.firstName]: personObject.firstName.length }))
    .reduce((nameObject, person) => Object.assign(nameObject, person), {});
}

export {
  mapFilterAndReduce,
};
