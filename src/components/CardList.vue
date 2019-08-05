<template>
  <div>
    <v-card
      ripple
      min-width="250"
      class="mx-auto"
      :to="releaseButton ? null : '/detail/' + name"
    >
      <v-card-title>{{ name }}</v-card-title>

      <v-card-text>
        <div v-if="owned">
          {{ "total owned: " + owned }}
        </div>
        <div v-if="nickname">
          {{ "Nickname: " + nickname }}
        </div>
      </v-card-text>
      <v-card-actions v-if="releaseButton" class="mb-5">
        <v-layout justify-end>
          <v-btn dark small color="info" :to="'/detail/' + name" class="mr-2">
            Detail
          </v-btn>
          <v-btn small dark color="red" @click="dialog = true">
            Release
          </v-btn>
        </v-layout>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Release Pokemon</v-card-title>
        <v-card-text>Are you sure want to relase {{ name }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-grey"
            small
            dark
            @click="dialog = false"
            class="mr-2"
            >No</v-btn
          >
          <v-btn
            color="warning"
            small
            dark
            @click="$emit('on-release', { name, nickname })"
            >Yes</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["name", "owned", "releaseButton", "nickname"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>
