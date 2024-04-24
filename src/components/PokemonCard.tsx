// src/components/CharacterCard.tsx

import { useSelector } from "react-redux";
import { PokemonState } from "../types";

function PokemonCard() {
  const { pokemon, isLoading, error } = useSelector(
    (state: PokemonState) => state
  );

  if (error) {
    return <div>{error}</div>;
  }
  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (pokemon) {
    console.log(pokemon);
    console.log(pokemon.sprites);
    console.log(pokemon.types[0].type.name);

    return (
      <div>
        <img
          className="pokemon__image"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <h2 className="pokemon__name">{pokemon.name}</h2>
        {pokemon.types[1] ? (
          <>
            <h2 className="pokemon__data">{pokemon.types[0].type.name}</h2>
            <h2 className="pokemon__data2">{pokemon.types[1].type.name}</h2>
          </>
        ) : (
          <h2 className="pokemon__data">{pokemon.types[0].type.name}</h2>
        )}
        <div>
          <img
            className="pokedex"
            src="../images/pokedex.png"
            alt="Bg_pokemon"
          />
        </div>
      </div>
    );
  }
}

export default PokemonCard;
