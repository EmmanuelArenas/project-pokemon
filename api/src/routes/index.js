const { Router } = require("express");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  addPokemon,
  getPokemonsAPI,
  getPokemonTypes,
  getAllPokemons,
} = require("../controllers/controller.js");
const { Pokemon, Type } = require("../db.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET all pokemon
router.get("/pokemons", async (req, res) => {
  let { name } = req.query;
  if (name) {
    const pokemonDB = await Pokemon.findAll({
      where: {
        name: { [Op.like]: `%${name}%` },
        // req.query.name.toLowerCase(),
      },
    });
    if (pokemonDB.length) {
      return res.json(pokemonDB);
    } else {
      const pokemonsApi = await getPokemonsAPI();
      const foundPokemon = pokemonsApi.filter((p) =>
        p.name.includes(name.toLowerCase())
      );
      if (foundPokemon) {
        return res.json(foundPokemon);
      } else {
        return res.json("El nombre ingresado no pertenece a ningún pokemon");
      }
    }
  }
  const pokemons = await getAllPokemons();
  return res.status(200).json(pokemons);
});

// GET pokemon ID

router.get("/pokemons/:idPokemon", async (req, res) => {
  const id = Number(req.params.idPokemon);
  if (typeof id === "number") {
    const pokemonDb = await Pokemon.findOne({
      where: {
        id: id,
      },
      include: {
        model: Type,
        through: {
          attributes: [],
        },
        attributes: ["name"],
      },
    });
    if (pokemonDb) {
      return res.json(pokemonDb);
    } else {
      const pokemonsApi = await getPokemonsAPI();
      const foundPokemon = pokemonsApi.find((p) => p.id === id);
      if (foundPokemon) {
        return res.json(foundPokemon);
      } else {
        return res.json("El ID ingresado no pertenece a ningún pokemon");
      }
    }
  }
  return res.send("El ID debe ser un número").status(404);
});

// POST Pokemon
router.post("/pokemons", async (req, res) => {
  await addPokemon(req, res);
});

// GET types
router.get("/types", async (req, res) => {
  const pokemonTypes = await getPokemonTypes();
  return res.json(pokemonTypes);
});

module.exports = router;
