export default {
    name: 'redo',
    icon: 'replay',
    flipx: true,
    handler (editor) {
        document.execCommand('redo', false)
    }
}
