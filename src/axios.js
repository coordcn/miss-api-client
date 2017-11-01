import axios from 'axios'

export default {
    install: function(Vue, options) {
        let instance = axios.create(options)
        Vue.axios = instance
        Vue.prototype.$axios = instance
    }
}
