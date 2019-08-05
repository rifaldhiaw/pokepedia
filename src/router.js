import Vue from "vue";
import Router from "vue-router";
import ListPokemon from "./views/ListPokemon.vue";
import MyPokemon from "./views/MyPokemon.vue";
import PokemonDetail from "./views/PokemonDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      name: "list pokemon",
      component: ListPokemon
    },
    {
      path: "/my-pokemon",
      name: "My pokemon",
      component: MyPokemon
    },
    {
      path: "/detail/:name",
      name: "pokemon detail",
      component: PokemonDetail
    }
  ]
});
