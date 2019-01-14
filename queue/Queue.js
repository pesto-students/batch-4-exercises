class Queue {
  constructor() {
    this.linkedList = [];
  }

  enqueue(value) {
    this.linkedList.push(value);
  }

  toString(stringifier) {
    if (stringifier) {
      return this.linkedList.map(stringifier).toString();
    }
    return this.linkedList.toString();
  }

  peek() {
    return this.linkedList[0] || null;
  }

  isEmpty() {
    return this.linkedList.length === 0;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.shift();
  }
}

export { Queue };
