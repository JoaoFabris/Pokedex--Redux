import { PokemonState, PokemonType } from "../types";

const INITIAL_STATE = {
  isLoading: false,
  pokemon: null,
  error: null,
};

function pokemonReducer(
  state: PokemonState = INITIAL_STATE,
  action: { type: string; pokemon?: PokemonType; error?: string },
) {
  switch (action.type) {
    case "SEARCH_BEGIN":
      return {
        ...state,
        isLoading: true,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        pokemon: action.pokemon || null,
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.error || "Error !",
      };
    default:
      return state;
  }
}

export default pokemonReducer;
