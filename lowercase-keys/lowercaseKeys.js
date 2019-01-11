
function lowercaseKeys(inputObject) {
  const newObject = {}
  
  Object.keys(inputObject).forEach(element => {
    newObject[element.toLowerCase()] = inputObject[element]
  });
  
  return newObject
  
}

export {
  lowercaseKeys,
};
