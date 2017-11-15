export default {
    name: 'math',
    icon: 'functions',
    command: {
        math(arg) {
            document.execCommand('insertOrderedList', false, arg)
            //document.execCommand('insertUnorderedList', false, arg)
        }
    }
}
