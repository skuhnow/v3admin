import { V3AdminOptions } from '@/types/V3AdminOptions'
import { App } from 'vue';
import Sidebar from './components/layout/Sidebar.vue';

export interface V3Admin
{

}

export function createV3Admin(options: V3AdminOptions): V3Admin {

  return {
    resources: options.resources,
    install(app: App) {
      const v3admin = this

      app.config.globalProperties.$admin = v3admin
      app.component('V3Sidebar', Sidebar)
    }
  }
}
