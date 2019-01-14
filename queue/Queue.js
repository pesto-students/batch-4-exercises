
class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(item) {
    this.linkedList.push(item);
  }

  dequeue() {
    return (this.linkedList.length === 0) ? null : this.linkedList.shift();
  }

  peek() {
    return (this.linkedList[0] === undefined) ? null : this.linkedList[0];
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  toString(callback) {
    if (callback) {
      return this.linkedList.map(value => callback(value)).toString();
    }
    return this.linkedList.toString();
  }
}

export {
  Queue,
};
