import Fifo from './Fifo';

const fifo = new Fifo(10);

fifo.enqueue({ name: "Process 1" });
fifo.enqueue({ name: "Process 2" });
fifo.enqueue({ name: "Process 3" });
fifo.enqueue({ name: "Process 4" });

console.log(fifo);
fifo.dequeue();
console.log(fifo);
fifo.dequeue();
console.log(fifo);
fifo.dequeue();
console.log(fifo);
fifo.dequeue();