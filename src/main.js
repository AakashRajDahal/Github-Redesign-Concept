import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
