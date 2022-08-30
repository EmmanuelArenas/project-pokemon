import React, { useEffect, useState } from "react";
import "./FilterBar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getPokemonTypes,
  orderPokemon,
  filterByType,
  filterByCreator,
  clearState,
} from "../../actions/index.js";

const FilterBar = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes);
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [selectType, setSelectType] = useState("");
  const [selectCreator, setSelectCreator] = useState("");
  const [selectOrder, setSelectOrder] = useState("");

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  const order = (e) => {
    setSelectOrder(e.target.value);
    if (e.target.value === "alph" || e.target.value === "attack") return;
    dispatch(orderPokemon(e.target.value));
  };

  const filterType = (e) => {
    setSelectType(e.target.value);
    if (e.target.value === "type") return dispatch(clearState());
    dispatch(filterByType(e.target.value));
  };

  const filterCreator = (e) => {
    setSelectCreator(e.target.value);
    if (e.target.value === "all") return dispatch(clearState());
    dispatch(filterByCreator(e.target.value));
  };

  const clearAllFilters = () => {
    setSelectType("");
    setSelectCreator("");
    setSelectOrder("");
    dispatch(clearState());
  };

  if (!showFilterBar) {
    return (
      <div className="menu example8">
        <span className="span" onClick={() => setShowFilterBar(true)}></span>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container__menu">
          <h4>Filter by</h4>
          <div className="textInputWrapper">
            <select
              className="textInput"
              onChange={filterType}
              value={selectType}
            >
              <option value="type">Type</option>
              {types &&
                types
                  .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                  .map((type) => {
                    return (
                      <option value={type.name} key={type.id}>
                        {type.name}
                      </option>
                    );
                  })}
            </select>
          </div>
          <div className="textInputWrapper">
            <select
              className="textInput"
              onChange={filterCreator}
              value={selectCreator}
            >
              <option>Source</option>
              <option value="all">All</option>
              <option value="false">Api</option>
              <option value="true">Db</option>
            </select>
          </div>

          <h4>Order by</h4>
          <div className="textInputWrapper">
            <select className="textInput" onChange={order} value={selectOrder}>
              <option value="alph">Alphabetical</option>
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>
          </div>
          <div className="textInputWrapper">
            <select className="textInput" onChange={order} value={selectOrder}>
              <option value="attack">Attack</option>
              <option value="less">Less (-)</option>
              <option value="more">More (+)</option>
            </select>
          </div>

          <div>
            <button className="btn btn-primary" onClick={clearAllFilters}>
              Clear filters
            </button>
          </div>

          <div>
            <Link to="/create">
              <p className="menu-menu">Create</p>
            </Link>
          </div>
        </div>
        <div className="menu2 example8">
          <span className="span" onClick={() => setShowFilterBar(false)}></span>
        </div>
      </div>
    );
  }
};
export default FilterBar;
