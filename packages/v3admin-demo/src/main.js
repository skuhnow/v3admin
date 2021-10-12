import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import v3admin from './plugins/v3admin'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(v3admin)

app.mount('#app')
