import React from "react";
import PokeList from "./PokeList";
import data from "../data/data.json";
import "../stylesheets/App.scss";

const App = () => {
  const list = useState(data);
  return (
    <>
      <PokeList data={list} />;
    </>
  );
};

export default App;
