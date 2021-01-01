import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    pokemons: [],
  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
  },
  actions: {
    async fetchPokemons({ commit }) {
      const res = await axios.get('https://pokedex-api-flask.herokuapp.com/get/pokemons');
      commit('setPokemons', res.data.results);
    },
  },
});
