declare module '*.vue' {
  import {defineComponent} from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

///* eslint-disable */
//declare module '*.vue' {
//  import type { DefineComponent } from 'vue'
//  const component: DefineComponent<{}, {}, any>
//  export default component
//}

// declare module '*.vue' { // NOTE: ts-loader
//   import { defineComponent } from 'vue';
//
//   const component: ReturnType<typeof defineComponent>;
//   export default component;
// }
