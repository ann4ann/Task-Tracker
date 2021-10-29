const goals = [
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
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(goals);
    }, 1000);
  });

export default {
  fetchAll,
};
