export default {
    name: 'upload',
    icon: 'unarchive',
    command: {
        upload(arg) {
            document.execCommand('insertOrderedList', false, arg)
        }
    }
}
