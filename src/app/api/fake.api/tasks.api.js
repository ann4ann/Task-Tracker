const tasks = [
  {
    _id: "siofudnfdg224098",
    ownerId: "ldsk",
    name: "Todo 1",
    status: false,
    importance: 1,
    deadline: "Deadline 1",
    duration: 5,
    timeInWork: 0,
    belongsToGoal: 1,
    description: "Description description description description 1",
  },
  {
    _id: "hjjgdhsfhxfghch",
    ownerId: "vbcvg",
    name: "Todo 2",
    status: false,
    importance: 2,
    deadline: "Deadline 2",
    duration: 30,
    timeInWork: 0,
    belongsToGoal: 1,
    description: "Description description description description 2",
  },
  {
    _id: "bhuhjoiunjmfndbf",
    ownerId: "bhklu",
    name: "Todo 3",
    status: true,
    importance: 4,
    deadline: "Deadline 3",
    duration: 160,
    timeInWork: 0,
    belongsToGoal: 1,
    description: "Description description description description 3",
  },
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(tasks);
        }, 2000);
    });

export default {
  fetchAll
};
