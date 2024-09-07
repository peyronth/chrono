<template>
  <v-app>
    <RaceList />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RaceList from './components/RaceList.vue';

export default defineComponent({
  name: 'App',
  components: {
    RaceList
  }
});
</script>

<style>
/* Styles globaux si nécessaire */
</style>
