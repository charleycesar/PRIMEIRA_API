module.exports = (app) => {
  const oUsuario = app.data.usuario;
  const controller = {};

  controller.oUsuario = (request, response) =>
    response.status(200).json(oUsuario);

  return controller;
};
