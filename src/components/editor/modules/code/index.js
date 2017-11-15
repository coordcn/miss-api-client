export default {
    name: 'code',
    icon: 'code',
    command: {
        code(arg) {
            document.execCommand('bold', false, arg)
        }
    }
}
