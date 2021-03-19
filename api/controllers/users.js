module.exports = (app) => {
  const ListUsers = app.data.users;
  const controller = {};

  controller.listUsers = (request, response) =>
    response.status(200).json(ListUsers);

  return controller;
};
