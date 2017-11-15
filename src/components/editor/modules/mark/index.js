export default {
    name: 'mark',
    icon: 'stars',
    handler (editor) {
        document.execCommand("backColor", false, "#ffc107");
        //document.execCommand('foreColor', false, arg)
    }
}
