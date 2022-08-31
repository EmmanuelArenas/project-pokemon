import React, { useEffect, useState } from "react";
import "./Pokemons.css";
import Loading from "../../assets/loading-L-H.gif";
import NotFound from "../../assets/bulbasour.gif";
import Pokemon from "../pokemon/Pokemon.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getPokemonTypes } from "../../actions/index.js";

const Pokemons = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(15);
  const indexOfLastPost = currentPage * pokemonsPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;

  const totalPokemons = useSelector((state) => state.filteredPokemons);
  const totalPages = Math.ceil(totalPokemons.length / pokemonsPerPage);

  const showPokemons = useSelector((state) =>
    state.filteredPokemons
      ? state.filteredPokemons.slice(indexOfFirstPost, indexOfLastPost)
      : false
  );

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getPokemonTypes());
  }, [dispatch]);

  // paginacion

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (currentPage > totalPages) previousPage();

  if (showPokemons[0] === "error" || !showPokemons) {
    return (
      <div className="notFound">
        <img src={NotFound} alt="Not Found Pikachu" />
        <h1>Nothing was found...</h1>
      </div>
    );
  } else if (showPokemons.length) {
    return (
      <div>
        <div className="container__gral">
          <div className="pokem">
            {showPokemons &&
              showPokemons.map((p) => (
                <Link
                  key={p.id}
                  to={`pokemon/${p.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Pokemon
                    name={p.name}
                    types={p.types}
                    image={p.image}
                    hp={p.hp}
                    attack={p.attack}
                    defense={p.defense}
                    speed={p.speed}
                    key={p.id}
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="pagination">
          <div className="frame">
            <button className="custom-btn btn-2" onClick={previousPage}>
              {" "}
              &laquo;{" "}
            </button>
          </div>
          <div>
            <h4>
              {currentPage} / {totalPages}
            </h4>
          </div>
          <div className="frame">
            <button className="custom-btn btn-2" onClick={nextPage}>
              &raquo;
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading__l-h">
        <img className="loading__img" src={Loading} alt="Loading" />
      </div>
    );
  }
};
export default Pokemons;
