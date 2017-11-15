function findParent (node, filter, stopNode) {
    if (!node) return null;
    if (!filter || (typeof filter != 'function')) return null;

    stopNode = stopNode || document.getElementsByTagName('body')

    while (node) {
        if (filter(node)) return node;
        if (node === stopNode) return null;
        node = node.parentNode
    }

    return null;
}

function findBlockquote (nodes) {
    if (!nodes) return null;

    let len = nodes.length;
    for (let i = 0; i < len; i++) {
        if (nodes[i].nodeName === 'BLOCKQUOTE') {
            return nodes[i]
        }
    }

    return null
}


export default {
    name: 'quote',
    icon: 'format_quote',
    handler (editor) {
        const range = editor.range;
        if (range) {
        const stopNode = editor.$refs.content;
        const root = range.commonAncestorContainer;

        const find = findParent(root, function(node) {
            return node.nodeName === 'BLOCKQUOTE';
        }, stopNode);

        const selectedNodes = range.cloneContents();
        const findNode = findBlockquote(selectedNodes.childNodes);

        if (find || findNode) {
            document.execCommand('outdent')
        } else {
            document.execCommand('indent')
        }

        editor.range = null;
        }
    }
}
