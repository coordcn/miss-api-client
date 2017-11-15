<template>
<v-toolbar light flat class="editor-toolbar" style="background-color:#fff;">
    <v-toolbar-items style="margin:0;">
        <v-text-field
            v-bind:value="url"
            v-on:change="val => url = val"
            single-line
            hide-details
            :placeholder="$parent.tooltip.linkPlaceHolder"
            style="padding:3px 8px 0 8px;min-width:256px;width:256px;"
        ></v-text-field>
        <v-btn 
            flat
            :title="$parent.tooltip.save"
            @click="click('link', $event)"
        >
            <v-icon class="editor-icon">check</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.unlink"
            @click="click('unlink', $event)"
        >
            <v-icon style="editor-icon">close</v-icon>
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
import command from './command'

export default {
    data () {
        return {
            url: ''
        }
    },
    methods: {
        click (cmd, event) {
            let url = this.url
            this.$parent.execCommand(function() {
                let fn = command[cmd]
                fn(url)
            })
        }
    }
}
</script>

<style lang="css" src="../../style.css"></style>
