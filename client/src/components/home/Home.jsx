import React from "react";
import "./Home.css";
import FilterBar from "../filterBar/FilterBar.jsx";
import Header from "../header/Header.jsx";
import Pokemons from "../pokemons/Pokemons.jsx";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <div className="container__card">
          <Pokemons />
          <FilterBar />
        </div>
      </div>
    </div>
  );
};
export default Home;
