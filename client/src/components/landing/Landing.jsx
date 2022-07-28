import React from "react";
import "./Landing.css";
import CTA from "./CTA.jsx";
import poke from "../../assets/pokedexLanding.png";

import TEAM from "../../assets/poke_landin.gif";
import LOGO from "../../assets/logo.png";

const Landing = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="logo">
          <img className="img" src={LOGO} alt="pokemon" />
        </div>
        <div className="btn__cta">
          <CTA />
        </div>
        <div className="container__poke">
          <div className="area__tex"></div>
          <img className="image__pokedex img" src={poke} alt="Pokedex" />
          <div className="container__team">
            <img className="img__poke img" src={TEAM} alt="team Pokemon" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Landing;
