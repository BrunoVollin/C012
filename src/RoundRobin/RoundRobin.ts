type Process = {
  name: string;
  time: number;
};

export default class RoundRobin {
  maxSize: number;
  ready: Process[];
  executed: Process[];
  quantum = 2;

  constructor(maxSize: number, quantum: number) {
    this.maxSize = maxSize;
    this.ready = [];
    this.executed = [];
    this.quantum = quantum;
  }

  enqueue(item: any) {
    if (this.ready.length >= this.maxSize) {
      this.ready.shift();
    }
    this.ready.push(item);
  }

  dequeue(index: number) {
    const item: Process = this.ready.splice(index, 1)[0];
    this.executed.push(item);
  }

  isEmpty() {
    return this.ready.length === 0;
  }

  size() {
    return this.ready.length;
  }

  exec() {
    let i = 0;

    while (!this.isEmpty()) {
      for (let j = 0; j < this.quantum; j++) {
        if (this.ready[i]) {
          this.ready[i].time -= 1;

          if (this.ready[i].time === 0) this.dequeue(i);
        }
      }

      if (i >= this.size() - 1) i = 0;
      else i++;
    }
  }
}


