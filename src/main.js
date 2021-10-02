import {
  createApp
} from "vue";
import App from "./App.vue";
import router from "./router/routing";

createApp(App)
  .use(router)
  .mount("#app");