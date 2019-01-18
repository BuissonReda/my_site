import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import router from './router'
import VueProgressBar from 'vue-progressbar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import hljs from 'highlight.js'
import Vuex from 'vuex'
import VueTranslate from 'vue-translate-plugin'
 
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueAxios, axios)
Vue.use(VueProgressBar, options)
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueTranslate)
Vue.config.productionTip = false

Vue.directive('highlightjs', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
})

const store = new Vuex.Store({
  state: {
    isDarkModeEnabled: false
  },
  mutations: {
    switchDesignMode (state, mode) {
      state.isDarkModeEnabled = mode
    }
  }
})

Vue.locales({
  french: {
    'test': 'hey'
  },
  english: {
    'test': 'hey bro'
  },
  spanish: {
    'hello world': 'hola mundo'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
