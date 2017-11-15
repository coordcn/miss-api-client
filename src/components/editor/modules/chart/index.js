export default {
    name: 'chart',
    icon: 'insert_chart',
    command: {
        chart(arg) {
            document.execCommand('bold', false, arg)
        }
    }
}
