import dom from '../../core/dom'

export default {
    name: 'quote',
    icon: 'format_quote',
    handler (editor) {
        const range = editor.range;
        if (range) {
            const content       = editor.$refs.content;
            const root          = range.commonAncestorContainer;
            const findQuote     = dom.findParentBlockquote(root, content);
            const childNodes    = range.cloneContents().childNodes;
            const findNode      = dom.findNode(childNodes, dom.isBlockquote);

            if (findQuote || findNode) {
                document.execCommand('outdent')
            } else {
                document.execCommand('indent');
                let lastChild = content.lastChild;

                if (dom.isBlockquote(lastChild)) {
                    const p = document.createElement('p');
                    p.innerHTML = dom.blank;
                    content.appendChild(p);
                }
            }

            editor.range = null;
        }
    }
}
