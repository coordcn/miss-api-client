<template>
<div>
    <div class="editor" style="border:1px solid rgba(0,0,0,0.12);">
        <div style="position:relative;">
            <v-toolbar light flat class="editor-toolbar" style="border-bottom:1px solid rgba(0,0,0,0.12);">
                <v-toolbar-items style="margin:0;">
                    <template v-for="(item, index) in items">
                        <v-btn 
                            v-if="item.active" 
                            flat 
                            :class="item.flipx ? 'flipx' : ''" 
                            :title="item.tooltip"
                            @click.native="click(item.click, $event)">
                            <v-icon style="color:#666"> {{ item.icon }} </v-icon>
                        </v-btn>
                    </template>
                </v-toolbar-items>
            </v-toolbar>
            <div class="editor-dashboard" ref="editor_title">
                <v-toolbar light flat class="editor-toolbar" style="background-color:#fff;">
                    <v-toolbar-items style="margin:0;">
                        <v-btn flat class="editor-btn">P</v-btn>
                        <v-btn flat class="editor-btn">H1</v-btn>
                        <v-btn flat class="editor-btn">H2</v-btn>
                        <v-btn flat class="editor-btn">H3</v-btn>
                        <v-btn flat class="editor-btn">H4</v-btn>
                        <v-btn flat class="editor-btn">H5</v-btn>
                        <v-btn flat class="editor-btn">H6</v-btn>
                    </v-toolbar-items>
                </v-toolbar>
            </div>
            <div class="editor-dashboard" ref="editor_link">
                <v-toolbar light flat class="editor-toolbar" style="background-color:#fff;">
                    <v-toolbar-items style="margin:0;">
                        <v-text-field
                            v-bind:value="datavalue"
                            v-on:change="val => datavalue = val"
                            single-line
                            hide-details
                            placeholder="输入网址"
                            style="padding:3px 8px 0 8px;min-width:256px;width:256px;"
                        ></v-text-field>
                        <v-btn flat @click.native="clickLink('link', $event)">
                            <v-icon class="editor-icon">check</v-icon>
                        </v-btn>
                        <v-btn flat @click.native="clickLink('link', $event)">
                            <v-icon style="color:#666;font-size:20px;">close</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
            </div>
        </div>
        <div class="editor-content" ref="editor_content" contenteditable></div>
    </div>
    <div style="padding-top:16px" class="editor-reply">
        <v-btn class="cyan" @click.native="">回复</v-btn>
        <v-btn class="grey lighten-2" @click.native="">核准</v-btn>
        <v-btn class="grey lighten-2" @click.native="">批准</v-btn>
        <v-btn class="grey lighten-2" @click.native="">不准</v-btn>
    </div>
</div>
</template>

<script>
import range from '../../utils/range'

export default {
    data () {
        return {
            items: [
                {
                    active: true,
                    click: "undo",
                    tooltip: "撤销",
                    icon: "replay"
                    // arrow_drop_down arrow_drop_up
                },
                {
                    active: true,
                    click: "redo",
                    flipx: true,
                    tooltip: "重做",
                    icon: "replay"
                },
                {
                    active: true,
                    click: "clear",
                    tooltip: "清除格式",
                    icon: "do_not_disturb"
                },
                {
                    active: true,
                    click: "title",
                    tooltip: "标题",
                    icon: "title"
                },
                {
                    active: true,
                    click: "bold",
                    tooltip: "加粗",
                    icon: "format_bold"
                },
                {
                    active: false,
                    click: "italic",
                    tooltip: "斜体",
                    icon: "format_italic"
                },
                {
                    active: false,
                    click: "underline",
                    tooltip: "下划线",
                    icon: "format_underlined"
                },
                {
                    active: false,
                    click: "strike",
                    tooltip: "删除线",
                    icon: "strikethrough_s"
                },
                {
                    active: true,
                    click: "link",
                    tooltip: "链接",
                    icon: "link"
                },
                {
                    active: true,
                    click: "quote",
                    tooltip: "引用",
                    icon: "format_quote"
                },
                {
                    active: true,
                    click: "list",
                    tooltip: "列表",
                    icon: "format_list_numbered"
                },
                {
                    active: true,
                    click: "table",
                    tooltip: "表格",
                    icon: "border_all"
                },
                {
                    active: true,
                    click: "mark",
                    tooltip: "文字背景高亮",
                    icon: "stars"
                },
                {
                    active: false,
                    click: "emot",
                    tooltip: "表情",
                    icon: "insert_emoticon"
                },
                {
                    active: true,
                    click: "image",
                    tooltip: "图片",
                    icon: "satellite"
                },
                {
                    active: false,
                    click: "chart",
                    tooltip: "图表",
                    icon: "insert_chart"
                },
                {
                    active: true,
                    click: "file",
                    tooltip: "文件",
                    icon: "unarchive"
                },
                {
                    active: true,
                    click: "video",
                    tooltip: "视频",
                    icon: "play_circle_outline"
                },
                {
                    active: false,
                    click: "title",
                    tooltip: "名片",
                    icon: "account_box"
                },
                {
                    active: false,
                    click: "map",
                    tooltip: "地图",
                    icon: "room"
                },
                {
                    active: true,
                    click: "math",
                    tooltip: "公式",
                    icon: "functions"
                },
                {
                    active: true,
                    click: "code",
                    tooltip: "代码",
                    icon: "code"
                }
            ]
        }
    },
    methods: {
        click: function(name, event) {
            switch (name) {
                case "undo":
                    document.execCommand("undo", false, false);
                    break;
                case "redo":
                    document.execCommand("redo", false, false);
                    break;
                case "title":
                    let title = this.$refs.editor_title;
                    if (title.style.display == "block") {
                        title.style.display = "none";
                    } else {
                        title.style.display = "block";
                    }
                    break;
                case "bold":
                    document.execCommand("bold", false, false);
                    break;
                case "italic":
                    document.execCommand("italic", false, false);
                    break;
                case "underline":
                    document.execCommand("underline", false, false);
                    break;
                case "strike":
                    document.execCommand("strikeThrough", false, false);
                    break;
                case "mark":
                    /* 文字颜色 foreColor */
                    /* 背景颜色 backColor */
                    /* 上标     superscript */
                    /* 下标     subscript */
                    document.execCommand("backColor", false, "#ffc107");
                    break; 
                case "link":
                    let link = this.$refs.editor_link;
                    if (link.style.display == "block") {
                        link.style.display = "none";
                    } else {
                        link.style.display = "block";
                    }

                    let input = link.querySelector('input')
                    if (input) {
                        let len = input.value.length;
                        range.setSelectionRange(input, len, len);
                    }

                    break;
                case "quote":
                    break;
                case "list":
                    document.execCommand("insertOrderedList", false, false);
                    break;
                case "table":
                    break;
                case "face":
                    break;
                case "image":
                    break;
                case "file":
                    break;
                case "video":
                    break;
                case "map":
                    break;
                case "math":
                    break;
                case "code":
                    break;
                default:
                    return;
            }
        },
        clickTitle: function(name, event) {
            switch (name) {
                case "p":
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                default:
                    return;
            }
        },
        clickLink: function(name, event) {
            let link = this.$refs.editor_link;
            switch (name) {
                case "link":
                    if (link.style.display == "block") {
                        link.style.display = "none";
                    } else {
                        link.style.display = "block";
                    }
                    
                    let input = link.querySelector('input');
                    let url = '';
                    if (input) {
                        url = input.value
                    }

                    document.execCommand("createLink", false, url);
                    break;
                case "unlink":
                    if (link.style.display == "block") {
                        link.style.display = "none";
                    } else {
                        link.style.display = "block";
                    }
                    document.execCommand("ulink", false,);
                    break;
                default:
                    return;
            }
        },
        hideTile: function() {
            let node = this.$refs.editor_title;
            node.style.display = "none";
        },
        hideLink: function() {
            let node = this.$refs.editor_link;
            node.style.display = "none";
        },
    }
}
</script>

<style lang="css">
.editor-toolbar .toolbar__content {
    height:36px;
}

.editor-toolbar button {
    min-width: 40px !important;
    width:40px;
    border-radius:0;
}

.editor-dashboard {
    display:none;
    border-bottom:1px solid rgba(0,0,0,0.12);
    position:absolute;
    left:0;
    top:100%;
    z-index:1000;
    width:100%;
    height:256;
}

.editor-content {
    overflow: auto;
    padding: 8px;
    min-height:128px;
    max-height:256px;
}

.editor-reply > button {
    height:32px !important;
    min-width:72px !important;
    margin:0 16px 0 0 !important;
    border-radius:0 !important;
    box-shadow:none !important;
}

.editor-btn {
    font-size:18px !important;
    color:#666 !important;
}

.editor-btn-sm {
    font-size:15px !important;
    min-width:88px !important;
    width:auto !important;
    color:#666 !important;
}

.editor-icon {
    font-size:20px !important;
    color:#666 !important;
}

</style>
