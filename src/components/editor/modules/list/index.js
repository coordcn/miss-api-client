export default {
    name: 'list',
    icon: 'format_list_numbered',
    handler (editor) {
        document.execCommand('insertOrderedList', false)
        //document.execCommand('insertUnorderedList', false)
    }
}
