const pokemon = require("../routes/pokemon");

module.exports = (app) => {
  const pokemon1 = app.data.pokemon;
  const listPokemon = app.data.pokemons;
  const controller = {};

  controller.pokemon1 = (request, response) =>
    response.status(200).json(pokemon1);

  controller.listPokemonFilter = (request, response) => {
    const filterPokemons = listPokemon.pokemons.filter((pokemon) => {
      return pokemon.name === request.params.name;
    });

    const createObject = {
      pokemons: filterPokemons,
    };
    response.status(200).json(createObject);
  };

  controller.listPokemon = (request, response) => {
    response.status(200).json(listPokemon);
  };

  return controller;
};
