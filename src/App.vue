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

      <v-layout justify-center my-5>
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
