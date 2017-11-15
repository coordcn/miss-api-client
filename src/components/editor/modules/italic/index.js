export default {
    name: 'italic',
    icon: 'format_italic',
    handler (editor) {
        document.execCommand('italic', false)
    }
}
