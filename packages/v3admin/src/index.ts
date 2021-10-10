import { App } from 'vue'
import Sidebar from './components/layout/Sidebar.vue'

export default {
  install: (app: App) => {
    app.component('V3Sidebar', Sidebar)
  },
}
