// src/redux/index.ts

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import pokemonReducer from '../reducers/pokemonReducer';

const store = createStore(pokemonReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;