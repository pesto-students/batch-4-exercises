const createSleepPromise = time => new Promise(resolve => setTimeout(resolve, time));

const sleep = (time) => {
  const sleepPromise = createSleepPromise(time);

  const imposterPromise = val => sleepPromise.then(() => val);
  imposterPromise.then = args => sleepPromise.then(args);

  return imposterPromise;
};

sleep.then = () => Promise.resolve();

export { sleep };
