export default class Fifo {
  maxSize: number;
  ready: Array<any>;
  executed: Array<any>;

  constructor(maxSize : number) {
    this.maxSize = maxSize;
    this.ready = [];
    this.executed = [];
  }

  enqueue(item: any) {
    if (this.ready.length >= this.maxSize) {
      this.ready.shift();
    }
    this.ready.push(item);
  }

  dequeue() {
    const item = this.ready.shift();
    this.executed.push(item);
  }

  isEmpty() {
    return this.ready.length === 0;
  }

  size() {
    return this.ready.length;
  }
}

