<template>
<v-toolbar light flat class="editor-toolbar" style="background-color:#fff;">
    <v-toolbar-items style="margin:0;">
        <v-btn flat class="editor-btn" @click="click('p', $event)">P</v-btn>
        <v-btn flat class="editor-btn" @click="click('h1', $event)">H1</v-btn>
        <v-btn flat class="editor-btn" @click="click('h2', $event)">H2</v-btn>
        <v-btn flat class="editor-btn" @click="click('h3', $event)">H3</v-btn>
        <v-btn flat class="editor-btn" @click="click('h4', $event)">H4</v-btn>
        <v-btn flat class="editor-btn" @click="click('h5', $event)">H5</v-btn>
        <v-btn flat class="editor-btn" @click="click('h6', $event)">H6</v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
import command from './command'

export default {
    methods: {
        click (cmd, event) {
            this.$parent.execCommand(function() {
                let fn = command[cmd]
                fn()
            })
        }
    }
}
</script>

<style lang="css" src="../../style.css"></style>
