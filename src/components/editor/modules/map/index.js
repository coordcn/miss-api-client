export default {
    name: 'map',
    icon: 'room',
    command: {
        map(arg) {
            document.execCommand('insertOrderedList', false, arg)
        }
    }
}
