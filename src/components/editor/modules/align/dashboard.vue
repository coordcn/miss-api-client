<template>
<v-toolbar light flat class="editor-toolbar" style="background-color:#fff;">
    <v-toolbar-items style="margin:0;">
        <v-btn 
            flat
            :title="$parent.tooltip.alignLeft"
            @click="click('left', $event)"
        >
            <v-icon class="editor-icon">format_align_left</v-icon>
        </v-btn>
        <v-btn 
            flat 
            :title="$parent.tooltip.alignCenter"
            @click="click('center', $event)"
        >
            <v-icon class="editor-icon">format_align_center</v-icon>
        </v-btn>
        <v-btn 
            flat 
            :title="$parent.tooltip.alignRight"
            @click="click('right', $event)"
        >
            <v-icon class="editor-icon">format_align_right</v-icon>
        </v-btn>
        <!--
        <v-btn 
            flat 
            :title="$parent.tooltip.alignRight"
            @click="click('indent', $event)"
        >
            <v-icon class="editor-icon">format_indent_increase</v-icon>
        </v-btn>
        <v-btn 
            flat 
            :title="$parent.tooltip.alignRight"
            @click="click('outdent', $event)"
        >
            <v-icon class="editor-icon">format_indent_decrease</v-icon>
        </v-btn>
        -->
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
