
function mapObject(obj,map) {
  for(var index in obj){
    obj[index] = map(obj[index]);
  }

  return obj;
}

export {
  mapObject,
};
