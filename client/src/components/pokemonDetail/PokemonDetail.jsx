import React, { useEffect } from "react";
import "./PokemonDetail.css";
import Loading from "../../assets/loading1.gif";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, clearPokemonById } from "../../actions";
import LOGO from "../../assets/logo.png";

const PokemonDepth = () => {
  const dispatch = useDispatch();
  const pokemonByID = useSelector((state) => state.pokemonById);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonById(id));
    dispatch(clearPokemonById());
  }, [dispatch, id]);

  if (pokemonByID.length === 0) {
    return (
      <div className="loading__id">
        <div>
          <img className="loadin__img" src={Loading} alt="Loading" />
        </div>
      </div>
    );
  } else {
    // console.log(pokemonByID);
    return (
      <div className="container__pokemon">
        <div className="id__card">
          <img className="logo__id" src={LOGO} alt="Pokemon" />
          <div>
            <div className="pokemon__id">
              <img
                className="size__img"
                src={pokemonByID.image}
                alt={pokemonByID.name}
              />
            </div>
            <div className="item">
              <div className="letras__chinas">
                <p>ポケットモンスター</p>
              </div>
              <div className="id">
                <h1>#{pokemonByID.id}</h1>
              </div>
              <div className="name_id">
                <h2>{pokemonByID.name}</h2>
              </div>
              {/* ================= */}
              <div className="details_poke">
                <div>
                  <p className="emojis">🩸 health {pokemonByID.hp}</p>
                  <progress max="100" value={pokemonByID.hp}></progress>
                </div>
                <div>
                  <p className="emojis">💨 speed {pokemonByID.speed}</p>
                  <progress max="100" value={pokemonByID.speed}></progress>
                </div>
                <div>
                  <p className="emojis">🗡 attack {pokemonByID.attack}</p>
                  <progress max="100" value={pokemonByID.attack}></progress>
                </div>
                <div>
                  <p className="emojis">🛡 defense {pokemonByID.defense}</p>
                  <progress max="100" value={pokemonByID.defense}></progress>
                </div>
                <div>
                  <p className="emojis">📏 height {pokemonByID.height}</p>
                  <progress max="100" value={pokemonByID.height}></progress>
                </div>
                <div>
                  <p className="emojis">🟣 weight {pokemonByID.weight}</p>
                  <progress max="100" value={pokemonByID.weight}></progress>
                </div>
              </div>
              {/* ========== */}
            </div>
          </div>
          <div className="type__poke">
            {pokemonByID.types &&
              pokemonByID.types.map((type) => <h5>{type.name}</h5>)}
          </div>
          <div className="btn__position">
            <Link to="/home">
              <button className="buttonDark">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
export default PokemonDepth;
