import React from "react";
import "./Pokemon.css";

const Pokemon = ({ name, types, image }) => {
  return (
    <div class="card">
      <div class="img-card">
        <div className="img_center">
          <img className="img" src={image} alt={name} />
        </div>
      </div>
      <div class="info">
        <span>{name}</span>
        <div>
          {types && types.map((type) => <p key={type.id}>{type.name}</p>)}{" "}
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
