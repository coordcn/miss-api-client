export default {
    name: 'strikethrough',
    icon: 'strikethrough_s',
    handler (editor) {
        document.execCommand('strikeThrough', false)
    }
}
