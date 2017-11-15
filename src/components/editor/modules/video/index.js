export default {
    name: 'video',
    icon: 'play_circle_outline',
    command: {
        video(arg) {
            document.execCommand('insertOrderedList', false, arg)
        }
    }
}
