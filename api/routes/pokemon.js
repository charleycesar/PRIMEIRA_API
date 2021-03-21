module.exports = (app) => {
  const controller = app.controllers.pokemon;

  app.route("/api/v1/pokemon").get(controller.pokemon1);
  app.route("/api/v1/pokemon/list/:name").get(controller.listPokemonFilter);
  app.route("/api/v1/pokemon/list").get(controller.listPokemon);
};
