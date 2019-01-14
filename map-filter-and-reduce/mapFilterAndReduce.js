function mapFilterAndReduce(firstNames) {
  const reducerFunction = function (accumaltor, element) {
    accumaltor[element.firstName] = element.firstName.length;
    return accumaltor;
  };
  const filterdFirstNames = firstNames.filter(element => element.firstName.length < 5);
  const resultantObject = filterdFirstNames.reduce(reducerFunction, {});
  return resultantObject;
}

export {
  mapFilterAndReduce,
};
