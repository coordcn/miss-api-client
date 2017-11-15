export default {
    link(arg) {
        document.execCommand('createLink', false, arg)
    },
    unlink(arg) {
        document.execCommand('unlink', false)
    }
}
