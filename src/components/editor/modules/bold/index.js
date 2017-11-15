export default {
    name: 'bold',
    icon: 'format_bold',
    handler (editor) {
        document.execCommand('bold', false)
        //document.execCommand('superscript', false)
        //document.execCommand('subscript', false)
    }
}
