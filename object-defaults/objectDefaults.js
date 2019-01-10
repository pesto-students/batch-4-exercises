
function objectDefaults(new_obj,default_obj) {
  
  for (const key in new_obj) {
    default_obj[key]  = new_obj[key]
  }
  return default_obj
}

export {
  objectDefaults,
};
