<template>
<v-toolbar light flat class="editor-toolbar" style="background-color:#fff;">
    <v-toolbar-items style="margin:0;">
        <v-text-field
            ref="input"
            v-bind:value="url"
            v-on:change="val => url = val"
            single-line
            hide-details
            :placeholder="$parent.tooltip.linkPlaceHolder"
            style="padding:3px 8px 0 8px;min-width:360px;width:360px;"
        ></v-text-field>
        <v-btn 
            flat
            class="editor-btn-sm"
            :title="$parent.tooltip.linkCreate"
            @click="click('link', $event)"
        >
            {{ $parent.tooltip.save }}
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.unlink"
            class="editor-btn-sm"
            @click="click('unlink', $event)"
        >
            {{ $parent.tooltip.unlink }}
        </v-btn>
        <!--
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
            <v-icon class="editor-icon">close</v-icon>
        </v-btn>
        -->
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
import command from './command'
import dom from '../../core/dom'
import utils from '../../../../utils/index'

export default {
    data () {
        return {
            url: ''
        }
    },
    activated () {
        let editor = this.$parent;
        const range         = editor.range;
        const content       = editor.$refs.content;
        const root          = range.commonAncestorContainer;
        const findAnchor    = dom.findParentAnchor(root, content);

        if (findAnchor) {
            this.url = findAnchor.getAttribute('href');
        } else {
            const childNodes    = range.cloneContents().childNodes;
            const findNode      = dom.findNode(childNodes, dom.isAnchor);
            if (findNode) {
                this.url = findNode.getAttribute('href');
            } else {
                this.url = '';
            }
        }

        this.$nextTick(function() {
            let el = this.$refs.input.$el;
            let input = el.querySelector('input');
            let len = input.value.length;
            utils.range.focus(input, len, len);
        })
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
