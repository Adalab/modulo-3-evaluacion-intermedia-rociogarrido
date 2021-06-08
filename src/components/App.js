import React from "react";
import PokeList from "./PokeList";
import data from "../data/data.json";
import "../stylesheets/App.scss";

const App = () => {
  return (
    <>
      <h1 className="title">Pokémon</h1>
      <PokeList list={data} />;
    </>
  );
};

export default App;
