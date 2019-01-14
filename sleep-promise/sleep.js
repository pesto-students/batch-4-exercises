function createSleepPromise(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function sleep(timeout) {
  const sleepPromise = createSleepPromise(timeout);

  function functionWithThen(value) {
    return sleepPromise.then(() => value);
  }

  functionWithThen.then = args => sleepPromise.then(args);
  functionWithThen.catch = Promise.resolve().catch;

  return functionWithThen;
}

export { sleep };
