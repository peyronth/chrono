import { createApp } from 'vue';

import App from './App.vue';
import firebasePlugin from './plugins/firebasePlugin';
import vuetifyPlugin from './plugins/vuetifyPlugin.ts';
import router from './router/index.ts';

const app = createApp(App);

app.use(firebasePlugin);
app.use(vuetifyPlugin);
app.use(router);

app.mount('#app');
