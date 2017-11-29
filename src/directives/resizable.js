function clearSelection () {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}

// close menu content
function closeMenuContent () {
    let nodes;
    if (document.getElementsByClassName) {
        nodes = document.getElementsByClassName('menu__content');
    } else if (document.querySelectorAll) {
        nodes = document.querySelectorAll('.menu__content');
    } else {
        return;
    }

    if (nodes) {
        let len = nodes.length;
        for (let i = 0; i < len; i++) {
            nodes[i].style.display = 'none';
        }
    }
}

function directive (el, binding) {
    const id = binding.value.id;
    const minWidth = binding.value.minWidth;
    const maxWidth = binding.value.maxWidth;
   
    const mousedown = function(e) {
        closeMenuContent();

        const x = e.clientX;
        let tag = document.getElementById(id);
        if (!tag) return false;

        el.style.backgroundColor = '#ccc';

        document.onmousemove = function (e) {
            const offset = e.clientX - x;
            el.style.left = offset + 'px';
            clearSelection();
        }

        document.onmouseup = function (e) {
            const offset = e.clientX - x;
            const offsetWidth = tag.offsetWidth;
            let width = offsetWidth + offset;

            width = (width > 0) ? width : 0;

            if (minWidth && width < minWidth) {
                tag.style.width = minWidth + 'px';
            } else if (maxWidth && width > maxWidth) {
                tag.style.width = maxWidth + 'px';
            } else {
                tag.style.width = width + 'px';
            }
            el.style.left = '';
            el.style.backgroundColor = 'transparent';
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    el.addEventListener('mousedown', mousedown);
    el._mousedown = mousedown;
}

function unbind (el) {
    el.removeEventListener('mousedown', el._mousedown);
}

export default {
    name: 'resizable',
    bind: directive,
    update: directive,
    componentUpdated: directive,
    unbind: unbind
}
