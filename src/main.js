import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import router from './router'

import axios from './axios'

import resizable from './directives/resizable'

Vue.use(Vuetify)
Vue.use(axios)

Vue.directive('resizable', resizable)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
