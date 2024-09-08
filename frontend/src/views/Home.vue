<template>
    <h1>Home</h1>
    <RaceList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import RaceList from '../components/RaceList.vue';

export default defineComponent({
    name: 'Home', 
    components: {
        RaceList
    }
});
</script>