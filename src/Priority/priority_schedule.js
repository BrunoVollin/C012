let waiting = [
  {
    nome: "Process02",
    time: 10,
    priority: 11,
  },
  {
    nome: "Process01",
    time: 10,
    priority: 20,
  },
  {
    nome: "Process04",
    time: 10,
    priority: 1,
  },
  {
    nome: "Process03",
    time: 10,
    priority: 3,
  },
  {
    nome: "Process05",
    time: 10,
    priority: 5,
  },
];

let executed = [];

function sortByPriority(processList) {
  const processListSorted = processList.sort((a, b) => a.priority - b.priority);
  return processListSorted;
}

function getNames(processList) {
  let names = [];
  if (processList != undefined) {
    names = processList.map(
      (process) => process.nome + "(" + process.priority + ")"
    );
  }
  return names;
}

function log(executing = "none", waiting, executed) {
  console.log("____________________________________________________________\n");
  console.log("Waiting List:", getNames(waiting));
  console.log("\x1b[33mexecuting:", executing, "\x1b[0m");
  console.log("Executed Process:", getNames(executed), "\n");
}


function prioritySchedule(processList) {
  log("", waiting, executed);
  const processListSorted = sortByPriority(processList);
  executing = processListSorted.shift();
  const length = processListSorted.length;

  log("", waiting, executed);

  for (let i = 0; i < length; i++) {
    const item = processListSorted.pop();
    log(item.nome + "(" + item.priority + ")", waiting, executed);
    executed.push(item);
  }

  log("", waiting, executed);
}

prioritySchedule(waiting);

