import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Vue3Reactivity from '../components/Vue3Reactivity.vue';

const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/hello', component: HelloWorld },
  { path: '/vue3', component: Vue3Reactivity },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
