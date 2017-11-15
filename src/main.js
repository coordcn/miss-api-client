import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import './stylus/main.styl'

import router from './router'

import axios from './axios'

import resizable from './directives/resizable'
import MissEditor from './components/editor/index'
import ClickOutside from './directives/click-outside'

Vue.use(Vuetify)
Vue.use(axios)
Vue.use(MissEditor)

Vue.directive('resizable', resizable)
Vue.directive('click-outside', ClickOutside)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
