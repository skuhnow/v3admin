import { App, Plugin } from 'vue';
import Sidebar from './components/layout/Sidebar.vue';
import Test from './components/Test.vue';
import { V3AdminOptions } from '@/types/V3AdminOptions';

export interface V3Admin
{

}

export { Sidebar }

const createV3Admin = (options: V3AdminOptions): V3Admin => {

  return {
    resources: options.resources,

  }
}

export const V3AdminPlugin: Plugin = {
  install(app: App, options: V3AdminOptions) {
    app.config.globalProperties.$admin = createV3Admin(options)
    app.component('V3Sidebar', Sidebar)
    app.component('V3Test', Test)
  }
}
