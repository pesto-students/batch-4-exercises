
class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(value) {
    this.linkedList.push(value);
  }

  dequeue() {
    if (this.linkedList.length === 0) {
      return null;
    }
    return this.linkedList.shift();
  }

  isEmpty() {
    if (this.linkedList.length === 0) {
      return true;
    }
    return false;
  }

  peek() {
    if (this.linkedList.length === 0) {
      return null;
    }
    return this.linkedList[0];
  }

  toString(stringiFier) {
    if (!stringiFier) {
      return this.linkedList.join(',');
    }
    return this.linkedList.map(element => stringiFier(element)).join(',');
  }
}

export {
  Queue,
};
