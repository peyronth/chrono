import { createApp } from 'vue';

import App from './App.vue';
import firebasePlugin from './plugins/firebasePlugin';
import vuetifyPlugin from './plugins/vuetifyPlugin.ts';

const app = createApp(App);

app.use(firebasePlugin);
app.use(vuetifyPlugin);

app.mount('#app');
