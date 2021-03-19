module.exports = (app) => {
  const pokemon1 = app.data.pokemon;
  const listPokemon = app.data.pokemons;
  const controller = {};

  controller.pokemon1 = (require, response) =>
    response.status(200).json(pokemon1);

  controller.listPokemon = (require, response) =>
    response.status(200).json(listPokemon);

  return controller;
};
