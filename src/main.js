import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuePageTransition from "vue-page-transition";
import vueHeadful from 'vue-headful';
import VueLazyload from 'vue-lazyload';
import ScrollAnimation from './directives/scrollanimation';
import ScrollAnimation2 from './directives/scrollanimation2';

Vue.directive('scrollanimation', ScrollAnimation);
Vue.directive('scrollanimation2', ScrollAnimation2);

Vue.use(VuePageTransition);

Vue.component('vue-headful', vueHeadful);

Vue.use(VueLazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render:h => h(App)
}).$mount("#app");