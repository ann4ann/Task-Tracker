const users = [
  { _id: "0001", login: "Anna", password: "anna" },
  { _id: "0002", login: "Daria", password: "daria" },
  { _id: "0003", login: "Igor", password: "igor" },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(users);
    }, 2000);
  });

const getByLogin = (login, password) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        users.find(
          (user) =>
            user.login === login.trim() && user.password === password.trim()
        )
      );
    }, 1000);
  });

export default {
  fetchAll,
  getByLogin,
};
