import axios from "axios";
const URL = process.env.REACT_APP_URL;

// Get

export function getAllPokemons() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/pokemons`);
      dispatch({ type: "GET_ALL_POKEMONS", payload: response.data });
    } catch (error) {
      console.log("Get all pokemons:", error);
    }
  };
}

export function getPokemonTypes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/types`);
      dispatch({ type: "GET_POKEMON_TYPES", payload: response.data });
    } catch (error) {
      console.log("Get pokemon types:", error);
    }
  };
}

export function getPokemonByName(payload) {
  return async function (dispatch) {
    try {
      let pokemon = await axios.get(`${URL}/pokemons?name=` + payload);
      return dispatch({
        type: "GET_POKEMON_BY_NAME",
        payload: pokemon.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_POKEMON_BY_NAME",
        payload: error.name,
      });
    }
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/pokemons/${id}`);
      dispatch({ type: "GET_POKEMON_BY_ID", payload: response.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_POKEMON_BY_ID", payload: null });
    }
  };
}

// Clear

export function clearPokemonById() {
  return {
    type: "CLEAR_POKEMON_BY_ID",
  };
}

export function clearState() {
  return {
    type: "CLEAR_STATE",
  };
}

// Post

export function addPokemon(pokemon) {
  return async function (dispatch) {
    try {
      dispatch({ type: "ADD_POKEMON", payload: true });
      await axios.post(`${URL}/pokemons`, pokemon);
    } catch (error) {
      console.log(error);
      dispatch({ type: "ADD_POKEMON", payload: false });
    }
  };
}

// Filter

export function filterByType(type) {
  console.log(type);
  return {
    type: "FILTER_BY_TYPE",
    payload: type,
  };
}

export function filterByCreator(payload) {
  return {
    type: "FILTER_BY_CREATOR",
    payload: payload,
  };
}

// Order

export function orderPokemon(type) {
  console.log(type);
  if (type === "asc") {
    return {
      type: "ORDER_ASCENDING",
    };
  }
  if (type === "desc") {
    return {
      type: "ORDER_DESCENDING",
    };
  }
  if (type === "less") {
    return {
      type: "ORDER_ATTACK_DESCENDING",
    };
  }
  if (type === "more") {
    return {
      type: "ORDER_ATTACK_ASCENDING",
    };
  }
}
