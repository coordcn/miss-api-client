export default {
    name: 'underline',
    icon: 'format_underlined',
    handler (editor) {
        document.execCommand('underline', false)
    }
}
