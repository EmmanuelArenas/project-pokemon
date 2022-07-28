import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import SearchBar from "../searchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearState } from "../../actions/index.js";

const Header = () => {
  const dispatch = useDispatch();

  const goBackHome = () => {
    dispatch(clearState());
  };
  return (
    <div className="container__header">
      <Link to="/home">
        <img
          className="header__logo"
          src={Logo}
          alt="Pokémon Logo"
          onClick={goBackHome}
        />
      </Link>
      <SearchBar />
      <div></div>
    </div>
  );
};
export default Header;
