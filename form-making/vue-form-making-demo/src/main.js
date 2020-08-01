import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'

Vue.use(ElementUI);
Vue.use(FormMaking)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
