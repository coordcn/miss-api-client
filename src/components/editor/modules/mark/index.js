import dom from '../../core/dom'

export default {
    name: 'mark',
    icon: 'stars',
    handler (editor) {
        const range     = editor.range;
        const content   = editor.$refs.content;
        const root      = range.commonAncestorContainer;
        const findSpan  = dom.findParentSpan(root, content);

        if (findSpan && findSpan.style && /background/i.test(findSpan.style.cssText)) {
            document.execCommand('removeFormat', false);
        } else {
            document.execCommand("backColor", false, "#ffc107");
            //document.execCommand('foreColor', false, arg);
        }
    }
}
