
function objectDefaults(obj,defaults) {
  for(var index in defaults){
    if(!obj.hasOwnProperty(index)){
      obj[index] = defaults[index];
    }
  }

  return obj;
}

export {
  objectDefaults,
};
