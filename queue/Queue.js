
class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(item) {
    this.linkedList.push(item);
  }

  toString(manipulator) {
    if (manipulator) {
      return this.linkedList.map(manipulator).join(',');
    }
    return this.linkedList.toString();
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList[0];
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }
}

export {
  Queue,
};
