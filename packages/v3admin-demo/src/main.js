import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import admin from './admin/plugin.js'

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.use(admin, {'foo': 'translated bar'})

app.mount('#app');
