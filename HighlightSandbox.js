var dates = jQuery("table[id*='sandboxTable']").find("span[id*='completedDate']");

dates.each(function(){
    let newDate = formatDateString(this.innerText);
    jQuery(this).text(newDate);
    applyFormatting(this);
});

function applyFormatting(element){
    let startDate = new moment(element.innerText);
    let monthsSinceStartDate = moment().diff(startDate,'months');

    // apply formatting rules in descending order, start with the biggest difference
    // more than 1 year, magenta?
    if (monthsSinceStartDate >=12)
        applyColor(element, "white", "red");

    // more than 6 months, red
    if (monthsSinceStartDate >=6)
        applyColor(element, "red", "none");

    // more than 3 months yellow
    if (monthsSinceStartDate >=3)
        applyColor(element, "yellow", "none");

    // more than 1 month, blue
    if (monthsSinceStartDate >=1)
        applyColor(element, "blue", "none");

    // less than 1 month, nbd    

}

function applyColor(element, textColor, backgroundColor){
    jQuery(element).css("color",textColor);
    jQuery(element).css("background-color",backgroundColor);    
}

function formatDateString(currentDate){
    let m = new moment(currentDate);
    return m.format('MM/d/YYYY');
}