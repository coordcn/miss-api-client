<template>
<v-card style="border-radius:0;width:538px;padding:8px;">
    <v-layout row wrap>
        <v-flex class="toolbar-app" v-for="item in items" :key="item.icon">
            <router-link :to="item.href" class="toolbar-app-link">
            <div style="margin:10px 0 4px 0">
                <v-icon style="font-size:48px;color:#fff;">
                    {{ item.icon }}
                </v-icon>
            </div>
            <div style="font-weight:600;text-align:center;color:#fff;">
                {{ item.title }}
            </div>
            </router-link>
        </v-flex>
    </v-layout>
</v-card>
</template>

<script>
export default {
    data () {
        return {
            items: [
                { 
                    title: '任务',
                    href: '/task',
                    icon: 'layers',
                    action: 99
                },
                { 
                    title: '项目',
                    href: '/project',
                    icon: 'dashboard'
                },
                { 
                    title: '团队',
                    href: '/group',
                    icon: 'account_box' 
                },
                { 
                    title: '产品',
                    href: '/product',
                    icon: 'camera' 
                },
                { 
                    title: '客户',
                    href: '/custom',
                    icon: 'language' 
                },
                { 
                    title: '供应商',
                    href: '/supplier',
                    icon: 'unarchive', 
                    action: 8 
                },
                { 
                    title: '设备',
                    href: '/equip',
                    icon: 'iso' 
                },
                { 
                    title: '库存',
                    href: '/stock',
                    icon: 'dns',
                    action: 12
                },
                { 
                    title: '报表',
                    href: '/report',
                    icon: 'assessment' 
                },
                { 
                    title: '应用',
                    href: '/apps',
                    icon: 'pages' 
                },
                { 
                    title: '设置',
                    href: '/settings',
                    icon: 'settings' 
                },
                { 
                    title: '帮助',
                    href: '/help',
                    icon: 'school' 
                },
            ],
        }
    }
}
</script>

<style lang="css">
.toolbar-app {
    margin:4px;
    flex-basis:96px;
    width:96px;
    height:96px;
    max-width:96px;
    max-height:96px;
    align-content:center;
}

.toolbar-app-link {
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;
    text-decoration:none;
    background-color:#3c8dbc;
}

.toolbar-app-link:hover {
    background-color:rgb(2, 168, 243);
}
</style>
