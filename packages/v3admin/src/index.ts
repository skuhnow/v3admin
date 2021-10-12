import { App } from 'vue';
import Sidebar from './components/layout/Sidebar.vue';
import Test from './components/Test.vue';
import { V3AdminOptions } from '@/types/V3AdminOptions';

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
      app.component('V3Test', Test)
    }
  }
}
