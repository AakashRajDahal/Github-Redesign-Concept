import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './router';
import './assets/scss/style.scss';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
