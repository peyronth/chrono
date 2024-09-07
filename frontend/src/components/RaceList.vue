<template>
    <div>
      <h1>Liste des Courses</h1>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" v-for="race in races" :key="race.id">
            <v-card>
              <v-card-title>{{ race.name }}</v-card-title>
              <v-card-subtitle>{{ race.club }}</v-card-subtitle>
              <v-card-text>Date de début : {{ race.date_start }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted, defineComponent, inject } from 'vue';
  import { collection, Firestore, getDocs, query } from 'firebase/firestore';
  
  // Définir le type pour une course
  interface Race {
    id: string;
    name: string;
    club: string;
    date_start: string;
  }
  
  export default defineComponent({
    name: 'RaceList',
    setup() {
      const races = ref<Race[]>([]);
  
      // Injecte Firestore depuis les propriétés globales
      const db = inject<Firestore>('db');
      
      if (!db) {
        console.error('Firestore non trouvé dans les propriétés globales.');
        return {
          races
        };
      }
  
      const fetchRaces = async () => {
        const q = query(collection(db, "race"));
        const querySnapshot = await getDocs(q);
        races.value = querySnapshot.docs.map(doc => {
          return doc.data() as Race;
        });
      };
  
      onMounted(fetchRaces);
  
      return {
        races
      };
    }
  });
  </script>
  
  <style scoped>
  /* Ajoute ton style personnalisé ici si nécessaire */
  </style>
  