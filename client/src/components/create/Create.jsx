import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Create.css";
import Img from "../../assets/add_provisional.png";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonTypes, addPokemon, clearState } from "../../actions";

const AddPokemon = () => {
  const dispatch = useDispatch();

  const types = useSelector((state) => state.pokemonTypes);

  useEffect(() => {
    dispatch(getPokemonTypes());
  }, [dispatch]);

  // Control de form
  const [input, setInput] = useState({
    name: "",
    image: "",
    type1: "",
    type2: "",
    height: "",
    weight: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
  });

  const [errors, setErrors] = useState({ name: "" });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    if (!input.name) return alert("You must complete the form");
    e.preventDefault();
    dispatch(addPokemon(input));
    setInput({
      name: "",
      image: "",
      type1: "",
      type2: "",
      height: "",
      weight: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
    });
    alert("Pokemon Created");
  };

  //Create Ok  en el botón Enviar

  const finishedForm = () => {
    setTimeout(() => dispatch(clearState()), 2000);
  };

  return (
    <section>
      <h6>Let your imagination fly</h6>
      <h2 className="title">Create Pokemon</h2>
      <div className="container container__create">
        <form onSubmit={handleSubmit}>
          <div className="textInputWrapper ">
            <input
              placeholder="Name"
              type="text"
              className="textInput "
              name="name"
              onChange={handleInputChange}
              value={input.name}
            />
            {errors.name && <p className="p ">{errors.name}</p>}
          </div>

          <div className="textInputWrapper">
            <input
              className="textInput"
              type="text"
              placeholder="Image"
              name="image"
              onChange={handleInputChange}
              value={input.image}
            ></input>
            {errors.image && <p className="p">{errors.image}</p>}
          </div>
          <div className="textInputWrapper">
            <select
              className="textInput"
              name="type1"
              onChange={handleInputChange}
              value={input.type1}
            >
              <option value="type1">Type 1</option>
              {types &&
                types
                  .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                  .map((type) => {
                    return (
                      <option value={type.id} key={type.id}>
                        {type.name}
                      </option>
                    );
                  })}
            </select>
            {errors.type1 && <p className="p">{errors.type1}</p>}
          </div>
          <div className="textInputWrapper">
            <select
              className="textInput"
              name="type2"
              onChange={handleInputChange}
              value={input.type2}
            >
              <option value="type2">Type 2</option>
              {types &&
                types
                  .sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                  })
                  .map((type) => {
                    return (
                      <option value={type.id} key={type.id}>
                        {type.name}
                      </option>
                    );
                  })}
            </select>
            {errors.type2 && <p className="p">{errors.type2}</p>}
          </div>
          <div className="textInputWrapper">
            <input
              className="textInput"
              type="text"
              placeholder="Height"
              name="height"
              onChange={handleInputChange}
              value={input.height}
            ></input>
            {errors.height && <p className="p">{errors.height}</p>}
          </div>
          <div className="textInputWrapper">
            <input
              className="textInput"
              type="text"
              placeholder="Weight"
              name="weight"
              onChange={handleInputChange}
              value={input.weight}
            ></input>
            {errors.weight && <p className="p">{errors.weight}</p>}
          </div>
          <div className="textInputWrapper">
            <input
              className="textInput"
              type="text"
              placeholder="Health"
              name="hp"
              onChange={handleInputChange}
              value={input.hp}
            ></input>
            {errors.hp && <p className="p">{errors.hp}</p>}
          </div>
          <div className="textInputWrapper">
            <input
              className="textInput"
              type="text"
              placeholder="Attack"
              name="attack"
              onChange={handleInputChange}
              value={input.attack}
            ></input>
            {errors.attack && <p className="p">{errors.attack}</p>}
          </div>
          <div className="textInputWrapper">
            <input
              className="textInput"
              type="text"
              placeholder="Defense"
              name="defense"
              onChange={handleInputChange}
              value={input.defense}
            ></input>
            {errors.defense && <p className="p">{errors.defense}</p>}
          </div>
          <div className="textInputWrapper">
            <input
              className="textInput"
              type="text"
              placeholder="Speed"
              name="speed"
              onChange={handleInputChange}
              value={input.speed}
            ></input>
            {errors.speed && <p className="p">{errors.speed}</p>}
          </div>
        </form>
        <div className="pre">
          <article className="item__create">
            <div className="image">
              {input.image ? (
                <img
                  className="img-size"
                  src={input.image}
                  alt={input.name}
                ></img>
              ) : (
                <img className="img-size" src={Img} alt="New Pokemon"></img>
              )}

              <div className="container-name">
                {input.name && <h3>{input.name}</h3>}
              </div>
              {input.height && (
                <div className="container-view">
                  <p>📏 height {input.height}</p>
                  <progress max="100" value={input.height}></progress>
                </div>
              )}
              {input.weight && (
                <div className="container-view">
                  <p>🟣 weight {input.weight}</p>
                  <progress max="100" value={input.weight}></progress>
                </div>
              )}
              {input.hp && (
                <div className="container-view">
                  <p>🩸 health {input.hp}</p>
                  <progress max="100" value={input.hp}></progress>
                </div>
              )}
              {input.attack && (
                <div className="container-view">
                  <p>🗡 attack {input.attack}</p>
                  <progress max="100" value={input.attack}></progress>
                </div>
              )}
              {input.defense && (
                <div className="container-view">
                  <p>🛡 defense {input.defense}</p>
                  <progress max="100" value={input.defense}></progress>
                </div>
              )}
              {input.speed && (
                <div className="container-view">
                  <p>💨 speed {input.speed}</p>
                  <progress max="100" value={input.speed}></progress>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
      <div className="position_x">
        {Object.keys(errors).length !== 0 ? (
          <spam disabled="true" onClick={finishedForm} className="buttonx ">
            Complete the form
          </spam>
        ) : (
          <button className="buttonDark" onClick={handleSubmit}>
            Create
          </button>
        )}
      </div>
      {/* {isCreated && <CreateOk />} */}
      <div className="btn-position">
        <Link to="/home">
          <button className="buttonDark">Home</button>
        </Link>
      </div>
    </section>
  );
};

export const validateForm = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Name must be plain text";
  }
  if (!input.image) {
    errors.image = "Image is required";
  } else if (
    !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.svg)(\?[^\s[",><]*)?/.test(
      input.image
    )
  ) {
    errors.image = "An URL of an image is required";
  }

  if (!input.type1 || input.type1 === "type1") {
    errors.type1 = "Type can not be empty";
  }
  if (input.type2 === "type2") {
    errors.type2 = "Type can not be empty";
  }
  if (!input.height) {
    errors.height = "Height is required";
  } else if (!/^([1-9]\d{0,2}|1000)$/.test(input.height)) {
    errors.height = "Height must be between 1 and 1000";
  }
  if (!input.weight) {
    errors.weight = "Weight is required";
  } else if (!/^([1-9]\d{0,2}|1000)$/.test(input.weight)) {
    errors.weight = "Weight must be between 1 and 1000";
  }

  if (!input.hp) {
    errors.hp = "Hp is required";
  } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.hp)) {
    errors.hp = "Hp must be between 1 and 255";
  }
  if (!input.attack) {
    errors.attack = "Attack is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.attack)
  ) {
    errors.attack = "Attack must be between 1 and 255";
  }
  if (!input.defense) {
    errors.defense = "Defense is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.defense)
  ) {
    errors.defense = "Defense must be between 1 and 255";
  }
  if (!input.speed) {
    errors.speed = "Speed is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.speed)
  ) {
    errors.speed = "Speed must be between 1 and 255";
  }

  return errors;
};
export default AddPokemon;
