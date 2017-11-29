<template>
<v-tabs dark v-model="active" :scrollable="false" style="height:100%">
    <v-tabs-bar class="cyan" dark style="height:42px;">
        <v-tabs-item
            v-for="item in items"
            :key="item.key"
            :href="item.href"
            class="menu_title"
            style="min-width:96px;"
        >
            {{ item.title }}
        </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items style="height:calc(100% - 42px);">
        <v-tabs-content
            key="news"
            id="tab-news"
            style="height:100%;"
            :transition=false
            :reverseTransition=false
        >
            <div style="height:100%;overflow-y:auto;padding:0 16px 16px 16px;">
                <ul style="list-style:none;padding:0px;">
                    <li>
                        <v-layout row style="padding:20px 0 20px;">
                            <div style="width:80px;padding-left:12px;">
                                    <img src="/public/avatar/1.jpg" style="width:42px;height:42px;padding:2px;border:1px solid #ddd">
                            </div>
                            <div>
                                <div style="font-size:16px;font-weight:600;">钱烨（软件工程师）</div>
                                <div>2017年09月27日15:28:29 昨天 15小时前</div>
                                <div style="padding: 4px 0 16px 0;font-size:15px;line-height:25px;">
                                    下面的内容来自于互联网
        内容主要是一帮大老爷们的照片，我就是随便找的，并没有什么特殊癖好，你要事喜欢，可以换成风景图片什么的，我觉得风景图片可能要好点，不过风景图片可能大大小小的，这个图片估计也会有这个问题，大大小小不容易排版，这个是我们需要改进的地方，之所以说这么多废话，就是想凑点字数出来，看看多排的排版效果，其实说的都是废话。
                                </div>
                                <!--
                                <div>
                                    <miss-editor 
                                        language="en-us" 
                                        :hiddenModules="{italic:true,underline:true,strikethrough:true}"
                                    ></miss-editor>
                                </div>
                                -->
                            </div>
                        </v-layout>
                    </li>
                    <v-divider></v-divider>
                    <li>
                        <v-layout row style="padding:20px 0 20px;">
                            <div style="width:80px;padding-left:12px;">
                                    <img src="/public/avatar/1.jpg" style="width:42px;height:42px;padding:2px;border:1px solid #ddd">
                            </div>
                            <div>
                                <div style="font-size:16px;font-weight:600;">钱烨（软件工程师）
                                </div>
                                <div>2017年09月27日15:28:29 昨天 15小时前
                                </div>
                                <div style="padding: 4px 0 16px 0;font-size:15px;line-height:25px;">
                                    下面的内容来自于互联网
                                            <v-container fluid grid-list-sm style="margin:6px 0 6px 0">
          <v-layout row wrap>
            <v-flex class="img-list" v-for="i in 4" :key="i">
              <img class="image" src="http://wx4.sinaimg.cn/mw690/006iPnCSgy1fiovf5em8uj30qo0zkae0.jpg" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        内容主要是一帮大老爷们的照片，我就是随便找的，并没有什么特殊癖好，你要事喜欢，可以换成风景图片什么的，我觉得风景图片可能要好点，不过风景图片可能大大小小的，这个图片估计也会有这个问题，大大小小不容易排版，这个是我们需要改进的地方，之所以说这么多废话，就是想凑点字数出来，看看多排的排版效果，其实说的都是废话。
                                </div>
                                <div>
                                    <miss-editor></miss-editor>
                                </div>
                            </div>
                        </v-layout>
                    </li>
                    <v-divider></v-divider>
                </ul>
            </div>
        </v-tabs-content>
        <v-tabs-content
            key="profile"
            id="tab-profile"
            style="height:100%;"
            :transition=false
            :reverseTransition=false
        >
            <div style="height:100%;overflow-y:auto;padding:0 16px 16px 16px;">
                <ul style="list-style:none;padding:0px;">
                    <li>
                        <v-layout row style="padding:20px 0 20px;">
                            <div style="width:80px;padding-left:12px;">
                                    <img src="/public/avatar/1.jpg" style="width:42px;height:42px;padding:2px;border:1px solid #ddd">
                            </div>
                            <div>
                                <div style="font-size:16px;font-weight:600;">钱烨（软件工程师）
                                </div>
                                <div>2017年09月27日15:28:29 昨天 15小时前
                                </div>
                                <div style="padding: 4px 0 16px 0;font-size:15px;line-height:25px;">
                                    下面的内容来自于互联网
                                            <v-container fluid grid-list-sm style="margin:6px 0 6px 0">
          <v-layout row wrap>
            <v-flex class="img-list" v-for="i in 4" :key="i">
              <img class="image" src="http://wx4.sinaimg.cn/mw690/006iPnCSgy1fiovf5em8uj30qo0zkae0.jpg" alt="lorem" width="100%" height="100%">
            </v-flex>
          </v-layout>
        </v-container>
        内容主要是一帮大老爷们的照片，我就是随便找的，并没有什么特殊癖好，你要事喜欢，可以换成风景图片什么的，我觉得风景图片可能要好点，不过风景图片可能大大小小的，这个图片估计也会有这个问题，大大小小不容易排版，这个是我们需要改进的地方，之所以说这么多废话，就是想凑点字数出来，看看多排的排版效果，其实说的都是废话。
                                </div>
                                <div>
                                    <miss-editor></miss-editor>
                                </div>
                            </div>
                        </v-layout>
                    </li>
                    <v-divider></v-divider>
                </ul>
            </div>
        </v-tabs-content>

        <v-tabs-content
            key="subtask"
            id="tab-subtask"
            style="height:100%;"
            :transition=false
            :reverseTransition=false
        >
            子任务待实现
        </v-tabs-content>
    </v-tabs-items>
</v-tabs>
</template>

<script>
export default {
    data () {
        return {
            active: 'tab-news',
            id: "1",
            text: '',
            items: [
                {
                    title: '动态',
                    key: 'news',
                    href: '#tab-news',
                    id: 'tab-news'
                },
                {
                    title: '详情',
                    key: 'profile',
                    href: '#tab-profile',
                    id: 'tab-profile'
                },
                {
                    title: '子任务',
                    key: 'subtask',
                    href: '#tab-subtask',
                    id: 'tab-subtasck'
                }
            ]
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            //do ajax request
            this.id = this.$route.query.id
        }
    }
}
</script>

<style lang="css">
.img-list {
    flex-basis:96px;
    width:96px;
    height:96px;
    max-width:96px;
    max-height:96px;
}

</style>
