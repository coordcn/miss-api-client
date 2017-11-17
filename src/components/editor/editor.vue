<template>
<div class="editor" :class="{'editor-fullscreen':fullscreen}" style="z-index:1000">
    <div style="border:1px solid rgba(0,0,0,0.12);">
        <div style="position:relative;">
            <v-toolbar light flat class="editor-toolbar" style="border-bottom:1px solid rgba(0,0,0,0.12);">
                <v-toolbar-items style="margin:0;">
                    <template v-for="module in modules">
                        <v-btn 
                            flat 
                            :class="module.flipx ? 'flipx' : ''" 
                            :title="tooltip[module.name]"
                            @click="activeModule(module)">
                            <v-icon style="color:#666"> {{ module.icon }} </v-icon>
                        </v-btn>
                    </template>
                </v-toolbar-items>
            </v-toolbar>
            <div class="editor-dashboard" v-show="dashboard" ref="dashboard">
                <keep-alive>
                    <div v-show="dashboard" :is="dashboard"></div>
                </keep-alive>
            </div>
        </div>
        <div 
            class="editor-content" 
            ref="content" 
            contenteditable
            @click="toggleDashboard(dashboard)"
        ></div>
    </div>
    <div style="padding-top:16px" class="editor-reply" ref="reply">
        <v-btn class="cyan" @click="showContent">回复</v-btn>
        <v-btn class="grey lighten-2" @click.native="">核准</v-btn>
        <v-btn class="grey lighten-2" @click.native="">批准</v-btn>
        <v-btn class="grey lighten-2" @click.native="">不准</v-btn>
    </div>
</div>
</template>

<script>
import modules from './modules/index'
import i18n from './i18n/index'

const components = {}
modules.forEach((module) => {
    if (module.dashboard) {
        components[`dashboard-${module.name}`] = module.dashboard
    }

    module.hasDashboard = !!module.dashboard
    module.dashboard = null
})

export default {
    components: components,
    props: {
        content: {
            type: String,
            required: true,
            default: ''
        },
        height: {
            type: Number,
            default: 300,
            validator(val){
                return val >= 100
            }
        },
        zIndex: {
            type: Number,
            default: 1000
        },
        autoHeight: {
            type: Boolean,
            default: true
        },
        language: {
            type: String,
            default: 'zh-cn'
        },
        hiddenModules: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    data () {
        return {
            fullscreen: false,
            dashboard: null,
            modules: modules,
        }
    },
    watch: {
        content(val) {
            const content = this.$refs.content.innerHTML
            if (val !== content) {
                this.$refs.content.innerHTML = val
            }
            this.$emit('update:content', val)
        },
        fullscreen(val){
            const component = this
            if (val) {
                component.parentEl = component.$el.parentNode
                component.nextEl = component.$el.nextSibling
                //document.body.appendChild(component.$el)
                let app = document.getElementById('app')
                app.appendChild(component.$el)
                return
            }
            if (component.nextEl) {
                component.parentEl.insertBefore(component.$el, component.nextEl)
                return
            }
            component.parentEl.appendChild(component.$el)
        }
    },
    computed: {
        contentStyle(){
            const style = {}
            if (this.fullscreen) {
                style.height = `${window.innerHeight - this.$refs.toolbar.clientHeight - 1}px`
                return style
            }
            if (!this.autoHeight) {
                style.height = `${this.height}px`
                return style
            }
            style['min-height'] = `${this.height}px`
            return style
        }
    },
    methods: {
        showContent(){
            alert(this.$refs.content.innerHTML)
        },
        toggleFullscreen(){
            this.fullscreen = !this.fullscreen
        },
        enableFullscreen(){
            this.fullscreen = true
        },
        exitFullscreen(){
            this.fullscreen = false
        },
        focus(){
            this.$refs.content.focus()
        },
        toggleDashboard(dashboard){
            this.dashboard = this.dashboard === dashboard ? null : dashboard
        },
        execCommand(cmd){
            this.restoreSelection()
            if (this.range) {
                cmd()
            }
            this.toggleDashboard()
            this.$emit('change', this.$refs.content.innerHTML)
        },
        getCurrentRange(){
            return this.range
        },
        saveCurrentRange(){
            const selection = window.getSelection ? window.getSelection() : document.getSelection()
            if (!selection.rangeCount) {
                return
            }
            const content = this.$refs.content
            for (let i = 0; i < selection.rangeCount; i++) {
                const range = selection.getRangeAt(0)
                let start = range.startContainer
                let end = range.endContainer
                // for IE11 : node.contains(textNode) always return false
                start = start.nodeType === Node.TEXT_NODE ? start.parentNode : start
                end = end.nodeType === Node.TEXT_NODE ? end.parentNode : end
                if (content.contains(start) && content.contains(end)) {
                    this.range = range
                    break
                }
            }
        },
        restoreSelection(){
            const selection = window.getSelection ? window.getSelection() : document.getSelection()
            selection.removeAllRanges()
            if (this.range) {
                selection.addRange(this.range)
            } else {
                const content = this.$refs.content
                const div = document.createElement('div')
                const range = document.createRange()
                content.appendChild(div)
                range.setStart(div, 0)
                range.setEnd(div, 0)
                selection.addRange(range)
                this.range = range
            }
        },
        activeModule(module){
            if (typeof module.handler === 'function') {
                let ret = module.handler(this);
                if (!ret) return;
            }

            if (module.hasDashboard) {
                this.toggleDashboard(`dashboard-${module.name}`)
            }
        }
    },
    created(){
        this.tooltip = i18n[this.language]
        
        let ms = []
        this.modules.forEach((module) => {
            if (!this.hiddenModules[module.name]) {
                ms.push(module)
            }
        })
        this.modules = ms

        this.modules.forEach((module) => {
            if (typeof module.init === 'function') {
                module.init(this)
            }
        })
    },
    mounted(){
        const content = this.$refs.content
        content.innerHTML = this.content
        content.addEventListener('mouseup', this.saveCurrentRange, false)
        content.addEventListener('keyup', () => {
            this.$emit('change', content.innerHTML)
            this.saveCurrentRange()
        }, false)
        content.addEventListener('mouseout', (e) => {
            if (e.target === content) {
                this.saveCurrentRange()
            }
        }, false)
        this.touchHandler = (e) => {
            if (content.contains(e.target)) {
                this.saveCurrentRange()
            }
        }

        window.addEventListener('touchend', this.touchHandler, false)
    },
    updated(){
        // update dashboard style
        if (this.$refs.dashboard){
            this.$refs.dashboard.style.maxHeight = `${this.$refs.content.clientHeight}px`
        }
    },
    beforeDestroy(){
        window.removeEventListener('touchend', this.touchHandler)
        this.modules.forEach((module) => {
            if (typeof module.destroyed === 'function') {
                module.destroyed(this)
            }
        })
    }
}
</script>

<style lang="css" src="./style.css"></style>
