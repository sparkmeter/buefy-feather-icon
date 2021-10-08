import Vue, { VNode } from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import Dev from './serve.vue';
import VueFeather from 'vue-feather';
import BuefyFeatherIcon from '@/buefy-feather-icon.vue';

Vue.config.productionTip = false;

Vue.use(VueFeather);
Vue.use(Buefy, { defaultIconPack: 'feather-icons', defaultIconComponent: BuefyFeatherIcon });

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
