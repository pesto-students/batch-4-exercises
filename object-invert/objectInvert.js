
function objectInvert(obj) {
  for(var index in obj){
    obj[obj[index]] = index;
    delete obj[index];
  }

  return obj;
}

export {
  objectInvert,
};
