<template>
<v-layout column>
    <v-flex class="task-menu-toolbar">
        <v-toolbar dark flat class="cyan toolbar-small">
            <v-toolbar-items style="margin:0;">
                <v-btn flat class="toolbar-right-btn">新建任务</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat class="toolbar-right-btn">已完成</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </v-flex>
    <v-flex style="border-right:1px solid rgba(0,0,0,0.12);height:calc(100% - 42px);">
        <v-layout column>
            <v-flex class="task-menu-search">
                <v-text-field
                    v-bind:value="datavalue"
                    v-on:change="val => datavalue = val"
                    single-line
                    hide-details
                    append-icon="search"
                    placeholder="查找任务"
                    :append-icon-cb="saveThis"
                    v-click-outside="cancelThis"
                ></v-text-field>
            </v-flex>
            <v-flex class="task-menu-list" style="overflow-y:auto;height:100%">
                <v-list dense>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                            :key="item.id"
                            :to="item.id ? {path:'/task/content', query:{id:item.id}} : null"
                            @click.stop="select"
                            :id="`task--${item.id}`"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.title" style="color:#333;font-size:16px;"></v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text class="menu_title" style="color:#d93d5e;">
                                    {{ item.deadline }}
                                </v-list-tile-action-text>
                            </v-list-tile-action>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-flex>
        </v-layout>
    </v-flex>
</v-layout>
</template>

<script>
export default {
    data () {
        return {
            id: '',
            items: [
                {
                    id: '1',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '1天',
                    title: '完成任务模块页面编码',
                },
                {
                    id: '2',
                    name: '范琴（测试工程师）',
                    avatar: '/public/avatar/3.jpg',
                    deadline: '2天',
                    title: '任务模块页面测试及后台数据测试',
                },
                {
                    id: '3',
                    name: '宋海桥（质量工程师）',
                    avatar: '/public/avatar/2.jpg',
                    deadline: '3小时',
                    title: '南车间表冷器检验',
                },
                {
                    id: '4',
                    name: '戴明德（项目经理）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '15天',
                    title: '常州天马空调主机工程施工',
                },
                {
                    id: '5',
                    name: '秦丽娟（采购部经理）',
                    avatar: '/public/avatar/5.jpg',
                    deadline: '4天',
                    title: '南京伏羲工程风机采购',
                },
                {
                    id: '6',
                    name: '钱波（财务部会计）',
                    avatar: '/public/avatar/4.jpg',
                    deadline: '16分钟',
                    title: '财务月报表',
                },
                {
                    id: '7',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '8',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '9',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '10',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '11',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '11',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '11',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '11',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
            ]
        }
    },
    methods: {
        select: function(event) {
            let tag = event.currentTarget
            let id = tag.firstChild.id
            if (id == this.id) {
                return;
            } else {
                if (this.id != '') {
                    let prev = document.getElementById(this.id).parentNode
                    if (prev) {
                        prev.style.backgroundColor = "#fff"
                    }
                }

                tag.style.backgroundColor = "#bbdefb"
                this.id = id
            }
        }
    }
}
</script>

<style lang="css">
.task-menu-toolbar {
    flex-basis:42px;
    max-height:42px;
    flex:0 0 auto;
}

.task-menu-search {
    flex-basis:42px;
    max-height:42px;
    height:42px;
    flex:0 0 auto;
    border-bottom:1px solid rgba(0,0,0,0.12);
}

.task-menu-search .input-group {
    padding:6px 10px 0px 16px;
}

.indent-20 {
    padding-left:20px;
}
</style>
