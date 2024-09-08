<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6" v-for="race in races" :key="race.id">
                <v-card
                    @click="() => goToRace(race.id)"
                >
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
import { Race, RaceDTO } from '../models/Race.ts';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'RaceList',
    setup() {
        const router = useRouter();

        const races = ref<Race[]>([]);
        
        const db = inject<Firestore>('db');

        const fetchRaces = async () => {
            const q = query(collection(db, "race"));
            const querySnapshot = await getDocs(q);
            races.value = querySnapshot.docs.map(doc => {
                const dto = doc.data();
                dto.id = doc.id;
                return new Race(dto as RaceDTO);
            });
            console.log(races.value);
        };

        const goToRace = (raceId: string) => {
            router.push(`/races/${raceId}`);
        };

        onMounted(fetchRaces);

        return {
            goToRace,
            races
        };
    }
});
</script>

<style scoped>
/* Ajoute ton style personnalisé ici si nécessaire */
</style>