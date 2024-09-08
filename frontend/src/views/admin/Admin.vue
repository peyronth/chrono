<template>
    <v-container v-if="isAuthenticated" class="fill-height">
        <v-card
            v-if="race"
        >
            <v-card-title class="text-h5">Détails de la Course</v-card-title>
            <v-card-subtitle>Nom : {{ race.name }}</v-card-subtitle>
            <v-card-subtitle>Club : {{ race.club }}</v-card-subtitle>
            <v-card-subtitle>Date de Début : {{ race.date_start }}</v-card-subtitle>
            <!-- Ajoutez d'autres détails selon vos besoins -->
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getAuth } from 'firebase/auth';
import { doc, Firestore, getDoc } from 'firebase/firestore';
import { Race } from '../../models/Race';

export default defineComponent({
    name: 'Admin',
    setup() {
        const db = inject<Firestore>('db');

        const isAuthenticated = ref(false);
        const race = ref<Race | null>(null);
        const router = useRouter();
        const route = useRoute();

        const fetchRaceDetails = async (raceId: string) => {
            if (!db) {
                console.error('Firestore non trouvé dans les propriétés globales.');
                return;
            }
            try {
                const docRef = doc(db, 'races', raceId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    race.value = new Race(docSnap.data() as any);
                } else {
                    console.log('Aucune donnée trouvée pour cet identifiant de course.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des détails de la course :', error);
            }
        };

        const checkAuthentication = () => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
                isAuthenticated.value = true;
                const raceId = route.params.raceId as string;
                fetchRaceDetails(raceId);
            } else {
                isAuthenticated.value = false;
                router.push(`/races/${route.params.raceId}/admin/login`);
            }
        };

        onMounted(checkAuthentication);

        return {
            isAuthenticated,
            race
        };
    }
});
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>