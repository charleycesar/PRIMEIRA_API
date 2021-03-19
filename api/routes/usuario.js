module.exports = (app) => {
  const controller = app.controllers.usuario;

  app.route("/api/v1/users/1").get(controller.oUsuario);
};
