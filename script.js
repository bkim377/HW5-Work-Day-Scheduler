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
    var colwrap1 = $("<div></div>");
    colwrap1.addClass("col-lg-2 time-block hour row");
    // A div for the second column (where you enter text)
    var colwrap2 = $("<textarea></textarea>");
    colwrap2.attr("id", "textbox"+(i+1));
    colwrap2.addClass("col-lg-9 row past");
    // A div for the third column (save button)
    var colwrap3 = $("<button type='submit'></button>");
    colwrap3.addClass("col-lg-1 saveBtn fas fa-save");

    wrapper.append(timeWrapper);
    timeWrapper.append(hourWrap);
    hourWrap.append(colwrap1);
    hourWrap.append(colwrap2);
    hourWrap.append(colwrap3);
}

// adds hour names for all timeblock rows
    var cls = $(".time-block");
    for (n = 0; n < 3; n++) {
      cls[n].append(hourArray[n] + "am");
    }
    for (n = 3; n < 9; n++) {
      cls[n].append(hourArray[n] + "pm");
}

// Check each row to see if they are past, present, or future hours
// and colorcode them accordingly
// for loop 1: hours 9am-12pm

var colColor = $(".past");
for (var i = 0; i < 4; i++) {
    if (hourArray[i] === moment().hour()) {
        $("#textbox"+(i+1)).addClass("present").removeClass("past future");
    } else if (hourArray[i] < moment().hour()) {
        $("#textbox"+(i+1)).addClass("past").removeClass("present future");
    } else if (hourArray[i] > moment().hour()){
        $("#textbox"+(i+1)).addClass("future").removeClass("past present");
    }
}
//for loop 2: hours 1pm-5pm
for (var i = 4; i < 9; i++) {
    if ((hourArray[i] + 12) === moment().hour()) {
        $("#textbox"+(i+1)).addClass("present").removeClass("past future");
    } else if ((hourArray[i] + 12) < moment().hour()) {
        $("#textbox"+(i+1)).addClass("past").removeClass("present future");
    } else if ((hourArray[i] + 12) > moment().hour()){
        $("#textbox"+(i+1)).addClass("future").removeClass("past present");
    }
}

// function updateColors(){
//             var currentTime = new Date().getHours();
//             for (var i = 0; i < 3; i++) { 
//             console.log(currentTime, $("#'${i}'").data("time"));
//              if ($("#'${i}'").data("time") == currentTime){
//                 $("#'text${i}'").addClass("present");
//             } else if (currentTime < $("#'${i}'").data("time")) {
//                 $("#'text${i}'").addClass("future");
//             }
//         }
//     }
    
// setInterval(function() {
//     updateColors();
//     }, 1000);

// clicking the save buttons adds the entered text to local storage
var saveButton = $(".saveBtn");
saveButton.on("click", function() {
    var textInput = $("box"+[i]).value;
    window.localStorage["box"+[i]] = textInput;
    localStorage.setItem("todoEvent", JSON.stringify(textInput));
    alert("Event saved in local storage");
    console.log("Event saved in local storage");
});

});
