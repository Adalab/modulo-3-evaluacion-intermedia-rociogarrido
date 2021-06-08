import React from "react";
import "../stylesheets/PokeCard.scss";

const PokeCard = (props) => {
  const renderCards = props.pokemon.types.map((type, index) => {
    return (
      <li className="list type-list" key={index}>
        {type}
      </li>
    );
  });
  return (
    <article className="card">
      <img
        className="card__image"
        src={props.pokemon.url}
        alt={props.pokemon.name}
      />
      <h3 className="card__name">{props.pokemon.name}</h3>
      <ul className="types">{renderCards}</ul>
    </article>
  );
};

export default PokeCard;
