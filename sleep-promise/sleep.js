function sleep(timeout) {
  console.log(timeout)
  const sleepFor = new Promise((resolve, reject) => {
    setTimeout(() => (resolve('test')), timeout);
  });
  return sleepFor
}

export {
  sleep,
};
