export default {
    insertHtml (range, html) {
        if (document.execCommand(Command.INSERT_HTML, false, html)) {
            return;
        }

        // IE < 9
        if ( (sel = document.selection) && sel.type != "Control") {
            sel.createRange().pasteHTML(html);
            return;
        }

        const fragment = document.createDocumentFragment()
        const div = document.createElement('div')
        div.innerHTML = html
        if (div.hasChildNodes()) {
            for (let i = 0; i < div.childNodes.length; i++) {
                fragment.appendChild(div.childNodes[i].cloneNode(true))
            }
        }

        range.deleteContents()
        range.insertNode(fragment)
    }
}
