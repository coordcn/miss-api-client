import Editor from './editor'

export default {
    install (Vue, options = {}) {
        Vue.component('miss-editor', Editor)
    }
}
