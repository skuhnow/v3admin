import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import admin from '@skuhnow/v3admin'
import resources from './resources'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(admin, { resources: resources })

app.mount('#app')
