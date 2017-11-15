export default {
    p (arg) {
        document.execCommand('formatBlock', false, '<p>')
    },
    h1 (arg) {
        document.execCommand('formatBlock', false, '<h1>' )
    },
    h2 (arg) {
        document.execCommand('formatBlock', false, '<h2>')
    },
    h3 (arg) {
        document.execCommand('formatBlock', false, '<h3>')
    },
    h4 (arg) {
        document.execCommand('formatBlock', false, '<h4>')
    },
    h5 (arg) {
        document.execCommand('formatBlock', false, '<h5>')
    },
    h6 (arg) {
        document.execCommand('formatBlock', false, '<h6>')
    },    
}
