export default {
    center (arg) {
        document.execCommand('justifyCenter', false)
    },
    left (arg) {
        document.execCommand('justifyLeft', false)
    },
    right (arg) {
        document.execCommand('justifyRight', false)
    },
    indent (arg) {
        document.execCommand('indent', false)
    },
    outdent (arg) {
        document.execCommand('outdent', false)
    },
}
