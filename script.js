$(document).ready(function() { 

// Gets the current date and time and displays it on the top of the page
var a = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
document.getElementById("currentDay").innerHTML = a;

// dynamically adds the tiemblock rows and hours
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

// adds hour names and unique ID's for all timeblock rows
    var cls = $(".time-block");
    var colColor = $(".col-lg-9");
    idArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (n = 0; n < 3; n++) {
      cls[n].append(hourArray[n] + "am");
      colColor.attr("id", "hour-"+idArray[n]);
    }
    for (n = 3; n < 9; n++) {
      cls[n].append(hourArray[n] + "pm");
      colColor.attr("id", "hour-"+idArray[n]);
}

// Check each row to see if they are past, present, or future hours
// for loop 1: hours 9am-12pm
for (var i = 0; i < 3; i++) {
    if (hourArray[i] === moment().hour()) {
        colColor.addClass("present").removeClass("past future");
    } else if (hourArray[i] < moment().hour()) {
        colColor.addClass("past").removeClass("present future");
    } else if (hourArray[i] > moment().hour()){
        colColor.addClass("future").removeClass("past present");
    }
}
//for loop 2: hours 1pm-5pm
for (var i = 3; i < 9; i++) {
    if ((hourArray[i] + 12) === moment().hour()) {
        colColor.addClass("present").removeClass("past future");
    } else if ((hourArray[i] + 12) < moment().hour()) {
        colColor.addClass("past").removeClass("present future");
    } else if ((hourArray[i] + 12) > moment().hour()){
        colColor.addClass("future").removeClass("past present");
    }
}


});
