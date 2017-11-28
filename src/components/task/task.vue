<template>
<v-layout row>
    <v-flex d-flex id="task-menu" class="task-menu" style="width:350px;">
        <task-menu></task-menu>
    </v-flex>
    <v-flex class="resizable" v-resizable="{id:'task-menu',minWidth:300,maxWidth:600}"></v-flex>
    <v-flex d-flex class="task-content">
        <router-view></router-view>
    </v-flex>
</v-layout>
</template>

<script>
import menu from './menu'

export default {
    components: {
        "task-menu": menu
    }   
}
</script>

<style lang="css">
.task-menu {
    flex:0 0 auto;
    height:100%;
}

.task-content {
    flex:1 1 auto;
    height:100%;
}
</style>
