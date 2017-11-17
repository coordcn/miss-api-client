import dashboard from './dashboard'
import dom from '../../core/dom'

export default {
    name: 'link',
    icon: 'link',
    dashboard: dashboard,
    /*
    handler (editor) {
        const range         = editor.range;
        const content       = editor.$refs.content;
        const root          = range.commonAncestorContainer;
        const findAnchor    = dom.findParentAnchor(root, content);

        if (findAnchor) {
            document.execCommand('unlink');
            return false;
        }

        return true;
    }
    */
}
