

class Cycled {
  constructor(dataArray) {
    this.list = dataArray;
    this.count = 0;
  }

  set index(value) {
    if (value < 0 && value > this.list.length) {
      return this.count;
    }
    return value;
  }

  get index() {
    return this.count;
  }

  [Symbol.iterator]() {
    return this;
  }

  previous() {
    if (this.count === 0) {
      this.count = this.list.length - 1;
    } else {
      this.count -= 1;
    }
    return this.list[this.count];
  }

  step(takenStep) {
    if (takenStep < 0) {
      this.count = this.count + (takenStep % this.list.length);
    } else {
      this.count = this.count + (takenStep % this.list.length);
    }
    return this.list[this.count];
  }

  next() {
    if (this.count + 1 === this.list.length) {
      this.count = 0;
    } else {
      this.count += 1;
    }
    return this.list[this.count];
  }

  current() {
    return this.list[this.count];
  }
}

export {
  Cycled,
};
