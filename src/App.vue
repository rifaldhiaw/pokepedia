<template>
  <v-app>
    <v-container>
      <v-layout align-end justify-center logo mb-12>
        <router-link to="/" class="no-underline">
          <h1 class="display-2 font-weight-bold text-center mt-20">
            <span class="blue-grey--text text--darken-4">Poke</span>
            <span class="green--text">Pedia</span>
          </h1>
        </router-link>
      </v-layout>

      <v-layout justify-center my-5 class="hidden-sm-and-down">
        <v-tabs centered color="green">
          <v-tab to="/" exact>
            All Pokemon
          </v-tab>
          <v-tab to="/my-pokemon" exact>
            My Pokemon
          </v-tab>
        </v-tabs>
      </v-layout>

      <v-content>
        <router-view />
      </v-content>
    </v-container>

    <v-bottom-navigation app fixed grow color="green" class="hidden-sm-and-up">
      <v-btn value="allPokemon" height="auto" to="/" exact>
        <span>All Pokemon</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn value="myPokemon" height="auto" to="/my-pokemon" exact>
        <span>My Pokemon</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>

<style scoped>
.logo {
  height: 150px;
}
.no-underline {
  text-decoration: none;
}
</style>
