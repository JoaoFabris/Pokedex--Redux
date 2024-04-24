import { PokemonType, Dispatch } from "../../types"


export const searchBegin = () => ({
    type: 'SEARCH_BEGIN'
})

export const searchSuccess = (pokemon: PokemonType) => ({
    type: 'SEARCH_SUCCESS', pokemon
})

export const searchFailure = (error: string) => ({
    type: 'SEARCH_ERROR', error
})

export function fetchPokemon(name: string) {
    return async(dispatch: Dispatch) => {
        try{
            dispatch(searchBegin());
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await response.json();
            dispatch(searchSuccess(data));
          } catch (error: unknown) {
            dispatch(searchFailure((error as Error).message));
        }
    }
}
