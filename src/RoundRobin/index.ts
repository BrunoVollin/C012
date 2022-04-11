import RoundRobin from "./RoundRobin";

const rr = new RoundRobin(10, 2);

rr.enqueue({ name: "Process 1", time: 5 });
rr.enqueue({ name: "Process 2", time: 3 });
rr.enqueue({ name: "Process 3", time: 2 });

console.log(rr);
rr.exec();
console.log(rr);