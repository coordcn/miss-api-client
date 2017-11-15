export default {
    name: 'undo',
    icon: 'replay',
    handler (editor) {
        document.execCommand('undo', false)
    }
}
