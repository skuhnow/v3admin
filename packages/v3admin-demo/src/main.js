import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { V3AdminPlugin } from '@skuhnow/v3admin';

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(V3AdminPlugin)

app.mount('#app')
