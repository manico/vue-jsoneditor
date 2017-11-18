import Vue from 'vue';
import VJsoneditor from './components/VJsoneditor';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VJsoneditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
