
class Cycled {
  constructor(arrayToCycle) {
    this.cycleArray = arrayToCycle;
    this.currentPosition = 0;
    this.cycleArrayLength = arrayToCycle.length;
  }

  [Symbol.iterator]() {
    return {
      next() {
        this.currentPosition++;
        return this.cycleArray[this.currentPosition];
      }
    }
  }

  next() {
    return this[Symbol.iterator].next();
  }
}

export {
  Cycled,
};
