<template>
    <v-container class="fill-height d-flex flex-column align-center justify-center">
        <v-card class="pa-4" max-width="400">
            <v-card-title class="text-h5">Détails de la Course</v-card-title>
            <v-card-subtitle class="text-h6">Sélectionnez une option :</v-card-subtitle>
            <v-card-text>
                <v-btn class="mx-2" color="primary" @click="goToResults">Résultats</v-btn>
                <v-btn class="mx-2" color="secondary" @click="goToStartList">Start List</v-btn>
            </v-card-text>
        </v-card>
        <v-btn fab small color="primary" class="position-fixed top-3 right-3" @click="goToAdmin">
            <v-icon>mdi-account-cog</v-icon>
        </v-btn>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
    name: 'Race',
    setup() {
        const router = useRouter();
        const route = useRoute();

        const goToResults = () => {
            const raceId = route.params.raceId as string;
            router.push(`/races/${raceId}/result`);
        };

        const goToStartList = () => {
            const raceId = route.params.raceId as string;
            router.push(`/races/${raceId}/startList`);
        };

        const goToAdmin = () => {
            const raceId = route.params.raceId as string;
            router.push(`/races/${raceId}/admin`);
        };

        return {
            goToResults,
            goToStartList,
            goToAdmin
        };
    }
});
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}

.position-fixed {
    position: fixed;
}

.top-3 {
    top: 1rem;
}

.right-3 {
    right: 1rem;
}
</style>