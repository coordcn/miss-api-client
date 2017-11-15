<template>
<v-toolbar dark flat dense style="background-color:#3c8dbc;background-image:url(public/bg.jpg);">
    <v-toolbar-items style="margin-left:0;">
        <v-menu
            offset-y
            v-modle="menu"
        >
            <v-btn flat class="toolbar-apps-button" slot="activator">
                <v-icon large>apps</v-icon>
            </v-btn>
            <toolbar-menu></toolbar-menu>
        </v-menu>
    </v-toolbar-items>
    <v-toolbar-title style="font-weight:600;font-size:18px;color:#fff;">Miss API</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat class="toolbar-right-btn">注册</v-btn>
        <v-btn flat class="toolbar-right-btn">登录</v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>

<script>
import ToolbarMenu from './menu'

export default {
    components: {
        "toolbar-menu": ToolbarMenu
    },   
    data: () => ({
        menu: false,
    })
}
</script>

<style lang="css">
.toolbar-apps-button {
    font-weight:600 !important;
    font-size:15px !important;
    min-width:56px !important;
    width:56px;
    background-color:#3c8dbc !important;
    border-radius:0 !important;
}

.toolbar-app {
    margin:4px;
    flex-basis:96px;
    width:96px;
    height:96px;
    max-width:96px;
    max-height:96px;
    border:1px solid rgba(0,0,0,0.12);
    display:flex;
    flex-direction:column;
    align-items:center;
    align-content:center;
}
</style>
