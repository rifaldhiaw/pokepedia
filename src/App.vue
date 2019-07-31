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
        <v-tabs fixed-tabs color="green" @change="changeTab">
          <v-tab>
            All Pokemon
          </v-tab>
          <v-tab>
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
  }),
  methods: {
    changeTab(e) {
      if (e === 0) {
        this.$router.push("/");
      } else {
        this.$router.push("/my-pokemon");
      }
    }
  }
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
