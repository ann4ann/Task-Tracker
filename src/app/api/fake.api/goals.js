const goals = [
  {
    id: "cvdsdlinxc",
    ownerId: "0001",
    name: "my second goal",
    status: false,
    isMainGoal: false,
    ifArchieve: "Будет очень классно1",
    ifNotArchieve: "Будет совсем не классно1",
    description: "sdfsdv sbxfb dfbcsd",
  },
  {
    id: "oigbfjdpfo",
    ownerId: "0001",
    name: "my last goal",
    status: false,
    isMainGoal: false,
    ifArchieve: "Будет очень классно2",
    ifNotArchieve: "Будет совсем не классно2",
    description: "hjk. df ndgndf fgn",
  },
  {
    id: "fxjcghmvhbx",
    ownerId: "0011",
    name: "my archived goal",
    status: true,
    isMainGoal: false,
    ifArchieve: "Будет очень классно11",
    ifNotArchieve: "Будет совсем не классно11",
    description: "fgn hjb,l sdzx sd",
  },
  {
    id: "sdlfkcxiov",
    ownerId: "0001",
    name: "my favorite goal",
    status: false,
    isMainGoal: true,
    ifArchieve: "Будет очень классно",
    ifNotArchieve: "Будет совсем не классно",
    description: "дчлсомыдчлм члмо двыаот",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(goals);
    }, 1000);
  });

const getMainGoal = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(goals.find((goal) => goal.isMainGoal === true));
    }, 1000);
  });

export default {
  fetchAll,
  getMainGoal,
};
