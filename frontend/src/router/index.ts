import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import Race from '../views/race/Race.vue';
import StartList from '../views/race/StartList.vue';
import Result from '../views/race/Result.vue';
import Admin from '../views/admin/Admin.vue';
//import Import from '../views/admin/Import.vue';
import LogIn from '../views/admin/LogIn.vue';

// Définir les routes
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/races/:raceId', name: 'Race', component: Race },
  { path: '/races/:raceId/startList', name: 'StartList', component: StartList },
  { path: '/races/:raceId/result', name: 'Result', component: Result },
  { path: '/races/:raceId/admin', name: 'Admin', component: Admin },
  //{ path: '/races/:raceId/admin/import', name: 'Import', component: Import },
  { path: '/races/:raceId/admin/login', name: 'LogIn', component: LogIn }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
