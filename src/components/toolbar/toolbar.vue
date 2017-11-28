<template>
<v-toolbar dark flat dense style="background-color:#3c8dbc;background-image:url(public/bg.jpg);">
    <v-toolbar-items style="margin:0;">
        <v-menu
            offset-y
            v-modle="menu"
            z-index="256"
        >
            <v-btn flat class="toolbar-apps-button" slot="activator">
                <v-icon large>apps</v-icon>
            </v-btn>
            <toolbar-menu></toolbar-menu>
        </v-menu>
    </v-toolbar-items>
    <v-toolbar-title style="font-weight:600;font-size:18px;color:#fff;">Miss API</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items style="margin:0;">
        <template v-for="(item, index) in items">
            <router-link :to="item.href">
                <v-btn flat class="toolbar-right-btn link-btn badge-btn">
                    <v-badge color="orange">
                    <span slot="badge" v-if="item.badge && (typeof item.badge === 'number') && (item.badge > 0)">
                        {{ item.badge < 100 ? item.badge : 99 }}
                    </span>
                    <span> {{ item.title }} </span>
                    </v-badge>
                </v-btn>
            </router-link>
        </template>
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
        items: [
            {
                title: '消息',
                href: '/message',
            },
            {
                title: '任务',
                href: '/task',
                badge: 128
            },
            {
                title: '会议',
                href: '/meeting',
                badge: 2
            },
            {
                title: '日程',
                href: '/schedule',
            },
        ]
    }),
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
