<template>
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
</template>

<script lang="ts">
import { ref, onMounted, defineComponent, inject } from 'vue';
import { collection, Firestore, getDocs, query } from 'firebase/firestore';
import { Race } from '../models/Race.ts';

export default defineComponent({
    name: 'RaceList',
    setup() {
        const races = ref<Race[]>([]);
        
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