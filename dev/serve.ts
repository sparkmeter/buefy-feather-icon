import Vue, { VNode } from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import Dev from "./serve.vue";
import VueFeather from "vue-feather";
import BuefyFeatherIcon from "@/entry.esm";

Vue.config.productionTip = false;

Vue.use(VueFeather);
Vue.use(BuefyFeatherIcon);
Vue.use(Buefy, {
  defaultIconPack: "feather-icons",
  defaultIconComponent: BuefyFeatherIcon,
});

new Vue({
  render: (h): VNode => h(Dev),
}).$mount("#app");
