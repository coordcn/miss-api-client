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
            class="editor-btn-sm"
            @click="click('link', $event)"
        >
            {{ $parent.tooltip.tableWithHeader }}
        </v-btn>
        <v-btn 
            flat
            class="editor-btn-sm"
            @click="click('link', $event)"
        >
            {{ $parent.tooltip.tableWithoutHeader }}
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
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">border_left</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.tableRemoveRow"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">border_horizontal</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.tableRemoveColumn"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">border_vertical</v-icon>
        </v-btn>
        <v-btn
            flat 
            :title="$parent.tooltip.tableRemove"
            @click="click('unlink', $event)"
        >
            <v-icon class="editor-icon">delete_forever</v-icon>
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
import command from './command'

export default {
    data () {
        return {
            row: '2',
            column: '2',
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
