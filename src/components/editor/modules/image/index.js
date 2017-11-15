export default {
    name: 'image',
    icon: 'satellite',
    command: {
        image(arg) {
            document.execCommand('bold', false, arg)
        }
    }
}
