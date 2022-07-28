const { Pokemon, Type } = require("../db.js");
const axios = require("axios");

let dbID = 40;

// trae pokemons de la API
async function getPokemonsAPI() {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=40"
    );
    const data = Promise.all(
      response.data.results.map(async (pokemon) => {
        let subRequest = await axios.get(pokemon.url);
        let pokemonResult = {
          name: subRequest.data.name,
          id: Number(subRequest.data.id),
          hp: subRequest.data.stats[0].base_stat,
          attack: subRequest.data.stats[1].base_stat,
          defense: subRequest.data.stats[2].base_stat,
          speed: subRequest.data.stats[4].base_stat,
          height: subRequest.data.height,
          weight: subRequest.data.weight,
          image: subRequest.data.sprites.other.home.front_default,
          types: subRequest.data.types.map((type) => {
            return { name: type.type.name };
          }),
          created: "false",
        };
        return pokemonResult;
      })
    );
    return data;
  } catch (error) {
    return error;
  }
}

// Trae todos los pokemos de la DB y API
async function getAllPokemons() {
  const dbPokemons = await Pokemon.findAll({
    include: {
      model: Type,
      through: {
        attributes: [],
      },
      attributes: ["name"],
    },
  });
  const ApiPokemons = await getPokemonsAPI();
  return [...ApiPokemons, ...dbPokemons];
}

// Obtener pokemon por ID
async function getPokemonId() {
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
}

// Agregar pokemon a la DB
async function addPokemon(req, res) {
  const { hp, attack, defense, speed, height, weight, image, type1, type2 } =
    req.body;
  let name = req.body.name.toLowerCase();
  let pokemon = {
    id: ++dbID,
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
  };
  try {
    let createdPokemon = await Pokemon.create(pokemon);
    const addType1 = await createdPokemon.addType(type1, {
      through: "pokemon_type",
    });
    const addType2 = await createdPokemon.addType(type2, {
      through: "pokemon_type",
    });
    return res.status(200).send("El pokemon ha sido creado correctamente");
  } catch (error) {
    return error;
  }
}

// agregar tipos de pokemons a DB
async function getPokemonTypes() {
  let pokemonDb = await Type.findAll();
  if (pokemonDb.length > 0) {
    return pokemonDb;
  } else {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const data = Promise.all(
      response.data.results.map(async (t, index) => {
        let types = await Type.create({
          id: index + 1,
          name: t.name,
        });
        return types;
      })
    );
    return data;
  }
}

module.exports = {
  addPokemon,
  getPokemonsAPI,
  getAllPokemons,
  getPokemonId,
  getPokemonTypes,
};
