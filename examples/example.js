// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Router from 'vue-router';
import UI from 'fdk-ui';
import route from './route';
import App from './demo';
import lang from './lang';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(UI);

const router = new Router({
  routes: route(),
});

window.router = router;

Vue.mixin(lang);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
