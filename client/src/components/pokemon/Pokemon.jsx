import React from "react";
import "./Pokemon.css";

const Pokemon = ({ name, types, image }) => {
  return (
    <div className="card">
      <div className="img-card">
        <div className="img_center">
          <img className="img" src={image} alt={name} />
        </div>
      </div>
      <div className="info">
        <span>{name}</span>
        <div>
          {types &&
            types.map((type, index) => (
              <div key={index}>
                <p key={type.id}>{type.name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Pokemon;
