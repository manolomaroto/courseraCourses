// JavaScript source code.

function time_Dis() {

    // Dispalys the local current date and time from your browser 
    var time_set = new Date();
    var time_setT = time_set.toLocaleTimeString();
    var time_month = time_set.getMonth() + 1;

    this.document.getElementById("indexDate").innerHTML = "Todays date is " + time_set.getDate() + "-" + time_month + "-" + time_set.getFullYear() + " and the Time is "
                            + time_setT;

    
};

setInterval(time_Dis, 1000);


function browDet() {
    "userstrict";
    this.document.getElementById("browserDetDis").innerHTML = "The Power of JavaScript <br>" + " Well Just a Small Example of its Power <br> "
    + "Browser Your Using Is " + navigator.userAgent + "<br>And The language Is " + navigator.language;
    return browDet();
    // will say Browser Type and will say which version;
}


$(document).ready(function() {
    $("#mainBut").click(function () {
        $("h3").text("I'm developing my skills so that one day I will become a Full Stack Developer creating and supporting amazing sites")
    });})