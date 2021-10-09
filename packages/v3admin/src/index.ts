import { App } from "vue";
import Foo from "./components/Foo.vue"

export default {
  install: (app: App) => {
    // @ts-ignore
    app.component(`VaFoo`, Foo);
  },
};
