var dates = jQuery("table[id*='sandboxTable']").find("span[id*='completedDate']");

dates.each(function(){
    let newDate = formatDateString(this.innerText);
    jQuery(this).text(newDate);
    applyFormatting(this);
    addDataToParent(this);
});

// in order for sorting to work correctly, we need to add the timestamp of the Date 
// to the parent element, which is a <td> on the table
function addDataToParent(element){
    let parentEl = jQuery(element).parent("td");
    let startDate = new moment(element.innerText);
    parentEl.attr("data-sort",startDate.format("X")); // set data-order to Unix Timestamp for sorting
}

function applyFormatting(element){
    let startDate = new moment(element.innerText);
    let monthsSinceStartDate = moment().diff(startDate,'months');

    // apply formatting rules in descending order, start with the biggest difference
    // more than 1 year, magenta?
    if (monthsSinceStartDate >=12)
        applyColor(element, null, "red");

    // more than 6 months, red
    else if (monthsSinceStartDate >=6)
        applyColor(element, "red", null);

    // more than 3 months yellow
    else if (monthsSinceStartDate >=3)
        applyColor(element, null, "yellow");

    // more than 1 month, blue
    else if (monthsSinceStartDate >=1)
        applyColor(element, null, "lightblue");

    // less than 1 month, nbd    

}

function applyColor(element, textColor, backgroundColor){
    jQuery(element).css("color",textColor);
    jQuery(element).css("background-color",backgroundColor);    
}

function formatDateString(currentDate){
    let m = new moment(currentDate);
    return m.format('YYYY/MM/DD');
}