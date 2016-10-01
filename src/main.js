import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './pages/home/Home.vue'

/* eslint-disable no-new */

Vue.use(VueRouter);

const Work = resolve => {require(['./pages/Work'], resolve)};

const routes = [
  { path: '/', component: Home },
  { path: '/work', component: Work},
  { path: '/stuff', component: resolve => {require(['./pages/stuff/Stuff'], resolve)} },
  // { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes, // short for routes: routes
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.afterEach((to, from) => {
  // ga('send', {
  //   hitType: 'pageview',
  //   page: to.path
  // })
});



const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
