import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    pokemons: [],
    types: [],
    results: [],
  },
  getters: {
    getPokemons(state) {
      return state.pokemons;
    },
    getResults(state) {
      return state.results;
    },
    getCurrent(state, getters) {
      return (state.results.length > 0) ? getters.getResults : getters.getPokemons;
    },
  },
  mutations: {
    setPokemons(state, payload) {
      state.pokemons = payload;
    },
    setTypes(state, payload) {
      state.types = payload;
    },
    addResults(state, payload) {
      const difference = payload.filter((item) => !state.results.includes(item));
      state.results = state.results
        .concat(difference);
    },
    removeResults(state, payload) {
      const difference = state.results.filter((item) => !payload.includes(item));
      state.results = difference;
    },
  },
  actions: {
    async fetchAllPokemons({ commit }) {
      const res = await axios.get('https://pokedex-api-flask.herokuapp.com/get/pokemons');
      commit('setPokemons', res.data.results);
    },
    async fetchTypes({ commit }) {
      const res = await axios.get('https://pokedex-api-flask.herokuapp.com/get/types');
      const types = [];
      res.data.results.forEach((type) => types.push(type.name));
      commit('setTypes', types);
    },
    filterType({ state }, type) {
      const pokemons = state.pokemons
        .filter((pokemon) => pokemon['Type I'][0] === type)
        .concat(state.pokemons
          .filter((pokemon) => pokemon['Type II'] && pokemon['Type II'][0] === type));
      return pokemons;
    },
    async addType(context, type) {
      const pokemons = await context.dispatch('filterType', type);
      context.commit('addResults', pokemons);
    },
    async removeType(context, type) {
      const pokemons = await context.dispatch('filterType', type);
      context.commit('removeResults', pokemons);
    },
  },
});
