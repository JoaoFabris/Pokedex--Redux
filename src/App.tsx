// src/App.tsx\

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchPokemon } from "./redux/actions";
import { Dispatch } from "./types";

import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState("");
  const dispatch: Dispatch = useDispatch();
  

  return (
    <div>
      <input
      className="input__search"
        type="text"
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setPokemon(target.value.toLowerCase())
        }
        value={pokemon}
        placeholder="Pokemon Name"
      />
      <button type="button" className="button" onClick={() => dispatch(fetchPokemon(pokemon))}>
        Search
      </button>
      <PokemonCard />
    </div>
  );
}

export default App;
