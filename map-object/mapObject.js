
function mapObject(obj) {
  var new_obj = {}
  for (let index = 0; index < Object.keys(obj).length; index++) {
    const element =Object.keys(obj)[index];
    new_obj[element] = obj[element]*obj[element]
  }
  return new_obj
}

export {
  mapObject,
};
