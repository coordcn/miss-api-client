<template>
<v-toolbar light flat class="editor-toolbar" style="background-color:#fff;">
    <v-toolbar-items style="margin:0;">
        <div class="editor-toolbar-label">
            {{ $parent.tooltip.row }}
        </div>
        <v-text-field
            v-bind:value="row"
            v-on:change="val => row = val"
            single-line
            hide-details
            style="padding:3px 8px 0 0;min-width:48px;width:48px;"
        ></v-text-field>
        <div class="editor-toolbar-label">
            {{ $parent.tooltip.column }}
        </div>
        <v-text-field
            v-bind:value="column"
            v-on:change="val => column = val"
            single-line
            hide-details
            style="padding:3px 8px 0 0;min-width:48px;width:48px;"
        ></v-text-field>
        <v-btn 
            flat
            :title="$parent.tooltip.tableAdd"
            class="editor-btn-sm"
            @click="click('link', $event)"
        >
            {{ $parent.tooltip.save }}
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items style="margin-left:16px;">
        <v-btn
            flat 
            :title="$parent.tooltip.tableAddRowBelow"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">border_top</v-icon>
        </v-btn>        
        <v-btn
            flat 
            :title="$parent.tooltip.tableAddRowAbove"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">border_bottom</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.tableAddColumnLeft"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">border_right</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.tableAddColumnRight"
            @click="click('unlin', $event)"
        >
            <v-icon class="editor-icon">border_left</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.tableDeleteRow"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">border_horizontal</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.tableDeleteColumn"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">border_vertical</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.tableDelete"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">delete_forever</v-icon>
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
import command from '../cmd.js'

export default {
    data () {
        return {
            row: '2',
            column: '2',
        }
    },
    activated () {
        let editor = this.$parent;
        const range     = editor.range;
        const content   = editor.$refs.content;
        const root      = range.commonAncestorContainer;
        const table     = dom.findParentTable(root, content);

        if (table) {
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
    },
    methods: {
        click (cmd, event) {
            this.$parent.execCommand(function() {
                let fn = command[cmd]
                fn(url)
            })
        }
    }
}
</script>

<style lang="css" src="../../style.css"></style>
