async function promiseAllProps(obj) {
  const objAry = Object.keys(obj);
  const result = [];
  for (const key of objAry) {
    result.push(obj[key]);
  }
  try {
    const output = await Promise.all(result);
    const newObj = {};
    let i = 0;
    for (const key of objAry) {
      newObj[key] = output[i];
      i += 1;
    }
    return newObj;
  } catch (err) {
    return Promise.reject(err);
  }
}

export { promiseAllProps };
