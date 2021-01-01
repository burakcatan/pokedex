import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    pokemons: [],
    types: [],
  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
    setTypes(state, payload) {
      state.types = payload;
    },
  },
  actions: {
    async fetchPokemons({ commit }) {
      const res = await axios.get('https://pokedex-api-flask.herokuapp.com/get/pokemons');
      commit('setPokemons', res.data.results);
    },
    async fetchTypes({ commit }) {
      const res = await axios.get('https://pokedex-api-flask.herokuapp.com/get/types');
      const types = [];
      res.data.results.forEach((type) => types.push(type.name));
      commit('setTypes', types);
    },
  },
});
