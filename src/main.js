import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './pages/home/Home.vue'

/* eslint-disable no-new */
Vue.use(VueRouter)

var router = new VueRouter();

router.map({
  '/': {
    component: Home
  },
  '/work': {
    component: function (resolve) {
      require(['./pages/Work'], resolve)
    }
  },
  '/stuff': {
    component: function (resolve) {
      require(['./pages/stuff/Stuff'], resolve)
    }
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0)
})
router.afterEach(function (transition) {
  ga('send', {
    hitType: 'pageview',
    page: transition.to.path
  })
})
router.redirect({
  '*': '/'
})

router.start(App, '#app')
