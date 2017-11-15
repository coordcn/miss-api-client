function setSelectionRange(input, start, end) {
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

export default {
    setSelectionRange: setSelectionRange,
}
