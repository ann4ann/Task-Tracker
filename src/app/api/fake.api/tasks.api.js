const tasks = [
  {
    _id: "siofudnfdg224098",
    ownerId: "ldsk",
    name: "Todo 1",
    status: false,
    importance: 1,
    deadline: 4,
    duration: 5,
    timeInWork: 0,
    belongsToGoal: 1,
    description: "Description description description description 1",
  },
  {
    _id: "siofudnfdgds224098",
    ownerId: "lddfsk",
    name: "Todo 1.1",
    status: false,
    importance: 2,
    deadline: 3,
    duration: 5,
    timeInWork: 0,
    belongsToGoal: 1,
    description: "Description description description description 1.1",
  },
  {
    _id: "hjjgdhsfhxfghch",
    ownerId: "vbcvg",
    name: "Todo 2",
    status: false,
    importance: 3,
    deadline: 2,
    duration: 30,
    timeInWork: 0,
    belongsToGoal: 1,
    description: "Description description description description 2",
  },
  {
    _id: "shnghjhkvgvnb",
    ownerId: "vhjl",
    name: "Todo 3",
    status: false,
    importance: 1,
    deadline: 1,
    duration: 5,
    timeInWork: 0,
    belongsToGoal: 1,
    description: "Description description description description 3",
  },
  {
    _id: "ghhbmcghfgzdfs",
    ownerId: "fxkjds",
    name: "Todo 4",
    status: false,
    importance: 4,
    deadline: 4,
    duration: 30,
    timeInWork: 0,
    belongsToGoal: 0,
    description: "Description description description description 4",
  },
  {
    _id: "bhuhjoiunjmfndbf",
    ownerId: "bhklu",
    name: "Todo 10",
    status: true,
    importance: 4,
    deadline: 1,
    duration: 160,
    timeInWork: 0,
    belongsToGoal: 1,
    description: "Description description description description 10",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(tasks);
    }, 2000);
  });

const fetchById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(tasks.find((task) => task._id === id));
    }, 1000);
  });

export default {
  fetchAll,
  fetchById,
};
