function addTestElement(){
    $("body").append('Test');
}

function buildJsonElement(element){
    let retval = '';
    let d = $( element ).find("div");
    retval += d.attr('id').substr(16,d.attr('id').length);
    retval += '=';
    retval += $( element ).text();
    retval += ',';    
    return retval;
}