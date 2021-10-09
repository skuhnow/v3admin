import * as v3components from "./components"

export default {
  install: (app) => {
    v3components.forEach(c => {
      Object.keys(c).forEach((name) => {
        app.component(`Va${name}`, c[name]);
      });
    })
  },
};
