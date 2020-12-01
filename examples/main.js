import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import wfEcharts from "../packages";

Vue.use(wfEcharts);


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
