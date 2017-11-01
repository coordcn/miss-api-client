<template>
<v-app style="background-color:#fff;width:100%;height:100%;overflow:hidden;">
    <v-layout column>
        <v-flex class="app-toolbar">
            <app-toolbar></app-toolbar>
        </v-flex>
        <v-flex style="height:calc(100% - 48px);">
            <v-layout row>
                <v-flex class="app-content">
                    <router-view></router-view>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</v-app>
</template>

<script>
import toolbar from './components/toolbar/toolbar'
import menu from './components/menu/menu'

export default {
    components: {
        "app-toolbar": toolbar,
        "app-menu": menu
    }
}
</script>

<style lang="css">
.app-toolbar {
    flex-basis:48px;
    max-height:48px;
    height:48px;
    flex:0 0 auto;
}

.app-menu {
    flex-basis:180px;
    max-width:180px;
    border-right:1px solid rgba(0,0,0,0.12);
    flex:0 0 auto;
    height:100%;
}

.app-content {
    height:100%;
    width:100%;
}

</style>
