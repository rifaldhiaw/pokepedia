import Vue from "vue";
import Vuex from "vuex";
import { Pokedex } from "pokeapi-js-wrapper";

const P = new Pokedex();
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listPokemons: [],
    filteredPokemon: [],
    onwnedPokemon: []
  },
  mutations: {
    setPokemonsList: (state, list) => {
      state.listPokemons = [...list];
      state.filteredPokemon = [...list];
    },
    filterPokemon: (state, searchQuery) => {
      if (searchQuery) {
        state.filteredPokemon = state.listPokemons.filter(poke =>
          poke.name.includes(searchQuery)
        );
      } else {
        state.filteredPokemon = state.listPokemons;
      }
    }
  },
  actions: {
    getPokemonsList: async ({ commit }) => {
      try {
        const data = await P.getPokemonsList();
        commit("setPokemonsList", data.results);
      } catch (error) {
        /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
        console.error(error);
      }
    }
  }
});
