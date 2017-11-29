function focus(input, start, end) {
    if (input.setSelectionRange) {  
        input.focus();  
        input.setSelectionRange(start, end);  
    } else if (input.createTextRange) {  
        var range = input.createTextRange();  
        range.collapse(true);  
        range.moveEnd('character', end);  
        range.moveStart('character', start);  
        range.select();  
    }  
}

function clearSelection () {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}

export default {
    focus,
    clearSelection,
}
