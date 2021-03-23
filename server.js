const express = require('express');
const bodyParser = require('body-parser');

const pokemonController = require('./controller/pokemon.controller');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/pokemon', (req, res) => {
  pokemonController.getPokemons().then((data) => res.json(data));
});

app.post('/api/pokemon', (req, res) => {
  console.log(req.body);
  pokemonController
    .createPokemon(req.body.pokemon)
    .then((data) => res.json(data));
});

app.put('/api/pokemon', (req, res) => {
  pokemonController
    .updatePokemon(req.body.pokemon)
    .then((data) => res.json(data));
});

app.delete('/api/pokemon/:id', (req, res) => {
  pokemonController.deletePokemon(req.params.id).then((data) => res.json(data));
});

app.get('/', (req, res) => {
  res.send(`API Works !!!`);
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
});
