import { createApp } from "vue";
import App from "./App.vue";
import { Lifecycle } from "./tools/lifecycle";
import { router } from "./tools/router";

import "./assets/css/main.css";

Lifecycle.init();

const app = createApp(App);
app.use(router).mount("#app");
