import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home.vue'
import About from './components/pages/About.vue'
import Articles from './components/pages/Articles.vue'
import FirstArticle from './components/pages/FirstArticle.vue'
import SecondArticle from './components/pages/SecondArticle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/Home' },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 320}}
          ]
        }
      }
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 320}}
          ]
        }
      }
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 320}}
          ]
        }
      }
    },
    {
      path: '/FirstArticle',
      name: 'FirstArticle',
      component: FirstArticle,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 320}}
          ]
        }
      }
    },
    {
      path: '/SecondArticle',
      name: 'SecondArticle',
      component: SecondArticle,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 320}}
          ]
        }
      }
    }
  ],
  linkActiveClass: "active"
})
