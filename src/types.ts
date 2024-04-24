import { ThunkDispatch } from "redux-thunk";
import { UnknownAction } from "redux";

export type PokemonType = {
  name: string;
  sprites: PokemonImg;
  types: PokemonT[];
};

export type PokemonImg = {
  front_default: string;
};

export type Type = {
  name: string;
};

export type PokemonT = {
  types: string;
  type: Type;
};

export type PokemonState = {
  isLoading: boolean;
  pokemon: PokemonType | null;
  error: string | null;
};

export type Dispatch = ThunkDispatch<PokemonState, null, UnknownAction>;
