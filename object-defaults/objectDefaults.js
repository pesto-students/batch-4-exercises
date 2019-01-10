
function objectDefaults(obj, defaultObj) {
  for (const key in obj) {
    if (defaultObj.hasOwnProperty(key)) {
      defaultObj[key] = obj[key];
    }
    else {
      defaultObj[key] = obj[key];
    }
  }
  return defaultObj;
}

export {
  objectDefaults,
};
