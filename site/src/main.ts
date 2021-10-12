import { createApp } from "vue";
import App from "./App.vue";
import { IconComponent } from "./plugins/icons";
import { router } from "./plugins/router";
import { Themer } from "./plugins/theme";

import "./assets/styles.css";

Themer.update();
createApp(App).use(router).component("Icon", IconComponent).mount("#app");
