<template>
<v-layout column>
    <v-flex class="task-menu-toolbar">
        <v-toolbar dark flat class="cyan toolbar-small">
            <v-toolbar-items style="margin:0;">
                <v-btn flat class="toolbar-right-btn">新建任务</v-btn>
            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-toolbar-items style="margin:0;">
                <v-menu offset-y z-index="128">
                    <v-btn 
                        flat 
                        class="toolbar-right-btn menu-btn" 
                        slot="activator"
                        style="width:220px;"
                    >
                        <span> {{ classes[classIndex].title }} </span>
                        <v-icon dark>arrow_drop_down</v-icon>
                    </v-btn>
                    <v-list dense>
                        <v-list-tile v-for="(item, index) in classes" :key="item" @click="changeClassIndex(index)">
                            <v-list-tile-content>
                                <v-list-tile-title 
                                    v-text="item.title" 
                                    style="color:#333;font-size:16px;"
                                ></v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text style="color:#d93d5e;font-size:14px;">
                                    {{ item.count }}
                                </v-list-tile-action-text>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                </v-menu>
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
                                <v-list-tile-title 
                                    v-html="item.title" 
                                    style="color:#333;font-size:16px;"
                                ></v-list-tile-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text style="color:#d93d5e;font-size:14px;">
                                    {{ item.deadline }}
                                </v-list-tile-action-text>
                            </v-list-tile-action>
                        </v-list-tile>
                    </template>
                    <v-list-tile v-if="more" @click.stop="">
                        <v-list-tile-content>
                            <v-list-tile-title style="color:#03a9f4;font-size:16px;font-weight:600;">
                                点击加载更多
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title style="color:#03a9f4;font-size:16px;font-weight:600;">
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
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
            more: true,
            classIndex: 0,
            classes: [
                {
                    title: '未完成的',
                    count: 16,
                },
                {
                    title: '已完成的',
                    count: 0,
                },
                {
                    title: '我发出的',
                    count: 10,
                },
                {
                    title: '我执行的',
                    count: 8,
                },
                {
                    title: '抄送我的',
                    count: 2,
                },
                {
                    title: '暂停的',
                    count: 1,
                },
                {
                    title: '废弃的',
                    count: 0,
                }
            ],
            items: [
                {
                    id: '1',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '1天',
                    title: '昆山岱德延峰表冷器冲片',
                },
                {
                    id: '2',
                    name: '范琴（测试工程师）',
                    avatar: '/public/avatar/3.jpg',
                    deadline: '2天',
                    title: '昆山岱德延峰表冷器下料',
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
                    deadline: '3天',
                    title: '济南铃木水洗箱下料',
                },
                {
                    id: '8',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '6天',
                    title: '江淮汽车空调机组现场安装',
                },
                {
                    id: '9',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '20天',
                    title: '沈阳棒棒娃空调机组现场安装',
                },
                {
                    id: '10',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '17天',
                    title: '慈溪图书馆通风系统安装',
                },
                {
                    id: '11',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '10天',
                    title: '东风汽车涂装线水洗箱报价',
                },
                {
                    id: '12',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '12天',
                    title: '南京天加空调参观',
                },
                {
                    id: '13',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '淮安微晶电子化学滤网安装',
                },
                {
                    id: '14',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '26天',
                    title: '慈溪图书馆水系统安装',
                },
                {
                    id: '15',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '1月',
                    title: '全厂消防演练',
                },
                {
                    id: '16',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '22天',
                    title: '南京台积电库板采购',
                },
                {
                    id: '17',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '2月',
                    title: '慈溪图书馆空调系统调试',
                },
                {
                    id: '18',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '18天',
                    title: '南京台积电化学滤网安装',
                },
            ]
        }
    },
    methods: {
        select(event) {
            let tag = event.currentTarget;
            let id = tag.firstChild.id;
            if (id == this.id) {
                return;
            } else {
                if (this.id != "") {
                    let prev = document.getElementById(this.id).parentNode;
                    if (prev) {
                        prev.style.backgroundColor = "#fff";
                    }
                }

                tag.style.backgroundColor = "#bbdefb";
                this.id = id;
            }
        },
        changeClassIndex(index) {
            this.classIndex = index;
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
