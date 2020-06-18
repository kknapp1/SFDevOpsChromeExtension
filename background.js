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

console.log('attempting to create DataTable');
jQuery("table[id*='sandboxTable']").DataTable({
    paging: false,
    "order": [[ 1, "asc" ]], // default sort by Name
    "columnDefs": [
        { "orderable": false, "targets": [0,5,7] } //don't sort Actions,OrgID,Description        
      ]
});


function formatDateString(currentDate){
    let m = new moment(currentDate);
    return m.format('YYYY-MM-DD');
}