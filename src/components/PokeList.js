import React from "react";
import PokeCard from "./PokeCard";
import "../stylesheets/PokeList.scss";

const PokeList = (props) => {
  const pokemonList = props.list.map((pokemon) => {
    return (
      <li className="list pokemon__list" key={pokemon.id}>
        <PokeCard pokemon={pokemon} />
      </li>
    );
  });
  return (
    <div>
      <h1 className="title">Mi lista de Pokémons</h1>
      <ul className="container">{pokemonList}</ul>
    </div>
  );
};

export default PokeList;
