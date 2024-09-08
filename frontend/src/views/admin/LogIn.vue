<template>
    <v-container class="fill-height d-flex align-center justify-center">
        <v-card>
            <v-card-title class="text-h5">Connexion Admin</v-card-title>
            <v-card-text>
                <v-btn color="primary" @click="loginWithGoogle">Se connecter avec Google</v-btn>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default defineComponent({
    name: 'Login',
    setup() {
        const loginWithGoogle = async () => {
            try {
                const auth = getAuth();
                const provider = new GoogleAuthProvider();
                const result = await signInWithPopup(auth, provider);
                console.log("Utilisateur connecté : ", result.user);
                // Redirection ou autre traitement après la connexion réussie
            } catch (error) {
                console.error("Erreur lors de la connexion : ", error);
            }
        };

        return {
            loginWithGoogle
        };
    }
});
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>