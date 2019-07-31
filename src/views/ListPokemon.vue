<template>
  <v-container class="py-12">
    <v-layout justify-center>
      <v-flex xs12 md4>
        <v-text-field
          solo
          color="green"
          append-icon="search"
          label="Search Pokemon"
          @change="searchData = $event"
          @keydown="filterPokemon(searchData)"
        ></v-text-field>
      </v-flex>
    </v-layout>

    <v-layout wrap v-if="limitedPokemon.length" justify-center>
      <v-flex
        v-for="poke in limitedPokemon"
        :key="`${poke.name}`"
        xs12
        sm6
        md4
        px-2
        py-2
      >
        <CardList :name="poke.name" :owned="poke.owned ? poke.owned : 0" />
      </v-flex>
      <v-flex xs12 text-center>
        <v-btn rounded color="green" dark class="my-10" @click="limit += adder">
          Load More
        </v-btn>
      </v-flex>
    </v-layout>

    <div v-if="!limitedPokemon.length" class="text-center my-12">
      <v-progress-circular indeterminate color="green" />
    </div>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import CardList from "../components/CardList.vue";

export default {
  components: {
    CardList
  },
  created() {
    if (!this.filteredPokemon.length) {
      this.getPokemonsList();
    }
  },
  data() {
    return {
      searchData: "",
      limit: 15,
      adder: 15
    };
  },
  computed: {
    limitedPokemon() {
      return this.limit
        ? this.filteredPokemon.slice(0, this.limit)
        : this.filteredPokemon;
    },
    ...mapState(["filteredPokemon"])
  },
  methods: {
    ...mapMutations(["filterPokemon"]),
    ...mapActions(["getPokemonsList"])
  }
};
</script>
