
function mapObject(obj, cb) {
  const myObj = Object.assign(obj);
  for (const key in myObj) {
    if (myObj.hasOwnProperty(key)) {
      myObj[key] = cb(myObj[key]);
    }
  }
  return myObj;
}

export {
  mapObject,
};
