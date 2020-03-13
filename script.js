$(document).ready(function() { 

hourArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var wrapper = $("#main-body");

for (var i = 0; i < hourArray.length; i++) {
    var timeWrapper = $("<div>");
    timeWrapper.addClass("container");

    // A div row containing each timeblock
    var hourWrap = $("<div>");
    hourWrap.addClass("row");
    // A div for the first column
    var colwrap1 = $("<div>");
    colwrap1.addClass("col-lg-2 time-block hour row");
    // A div for the second column (where you enter text)
    var colwrap2 = $("<textarea>");
    colwrap2.addClass("col-lg-9 row");
    // A div for the third column (save button)
    var colwrap3 = $("<div>");
    colwrap3.addClass("col-lg-1 saveBtn");

    wrapper.append(timeWrapper);
    timeWrapper.append(hourWrap);
    hourWrap.append(colwrap1);
    hourWrap.append(colwrap2);
    hourWrap.append(colwrap3);
}


    // adds new class name to each div to reference later for showing/hiding individually
    var cls = $(".time-block");
    for (n = 0; n < 3; n++) {
      cls[n].append(hourArray[n] + "am");
    }
    for (n = 3; n < 9; n++) {
      cls[n].append(hourArray[n] + "pm");
}

// taken from https://stackoverflow.com/questions/32540044/html-display-current-date/32540196
// n = new Date();
// y = n.getFullYear();
// m = n.getMonth() + 1;
// d = n.getDate();
// document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;





var a = moment().toString();
    document.getElementById("currentDay").innerHTML = a;

});
