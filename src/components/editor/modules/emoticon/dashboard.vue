<template>
<v-layout row wrap class="editor-emoticon" style="background-color:#fff;max-height:288px;overflow-y:auto">
    <v-flex class="editor-emoticon-item" v-for="item in items" :key="item.index">
        <v-btn 
            flat
            :title="item.tooltip"
            @click="click(item.index, $event)"
        >
        <img :src="`public/face/${10000 + item.index}.gif`" :width="`${item.width}px`">
        {{ index }}
        </v-btn>
    </v-flex>
</v-layout>
</template>

<script>
import images from './data'

export default {
    data () {
        return {
            items: images
        }
    },
    methods: {
        click (cmd, event) {
            this.$parent.execCommand(function() {
                let src = `public/face/${10000 + cmd}.gif`
                document.execCommand('insertImage', false, src)
            })
        }
    }
}
</script>

<style lang="css" src="../../style.css"></style>
