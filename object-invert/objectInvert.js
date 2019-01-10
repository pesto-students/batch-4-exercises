
function objectInvert(obj) {
  var new_obj = {}
  for (let index = 0; index <Object.keys(obj).length; index++) {
    const element =Object.keys(obj)[index];
    new_obj[obj[element]] = element
  }
  return new_obj
}

export {
  objectInvert,
};
