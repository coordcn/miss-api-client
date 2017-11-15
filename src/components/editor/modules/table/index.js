export default {
    name: 'table',
    icon: 'border_all',
    command: {
        table(arg) {
            document.execCommand('insertOrderedList', false, arg)
        }
    }
}
