export default {
    name: 'eraser',
    icon: 'highlight_off',
    handler (editor) {
        document.execCommand('removeFormat', false)
    }
}
