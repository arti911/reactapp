import React from "react";

import Information from "./Information";

import "./style.scss";

const Card = (props) => {
  return (
    <div className="card">
      <header className="card__header">
        <div className="card__price">{props.price} Р</div>
        <img
          src={`https://pics.avs.io/99/36/${props.carrier}.png`}
          alt={props.carrier}
        />
      </header>
      {props.segments.map((item) => (
        <Information {...item} key={item.duration} />
      ))}
    </div>
  );
};

export default Card;
