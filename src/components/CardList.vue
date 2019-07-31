<template>
  <v-card ripple min-width="250" class="mx-auto" to="/detail">
    <v-card-title>{{ name }}</v-card-title>
    <v-card-text>{{ "total owned: " + owned }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["name", "owned"]
};
</script>
