// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import route from './route';
import App from './doc';

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
  routes: route(true),
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      x: 0,
      y: 0,
    };
  },
});

window.router = router;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
