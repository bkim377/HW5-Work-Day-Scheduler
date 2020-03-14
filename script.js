$(document).ready(function() {
  // Gets the current date and time and displays it on the top of the page
  var a = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  document.getElementById("currentDay").innerHTML = a;

  // Dynamically adds the timeblock rows and hours
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
    colwrap2.attr("id", "textbox" + (i + 1));
    colwrap2.addClass("col-lg-9 row past");
    // A div for the third column (save button)
    var colwrap3 = $("<button type='submit'></button>");
    colwrap3.attr("id", "saveBtn" + (i + 1));
    colwrap3.addClass("col-lg-1 saveBtn i:hover fas fa-save");
    colwrap3.append("Save");

    wrapper.append(timeWrapper);
    timeWrapper.append(hourWrap);
    hourWrap.append(colwrap1);
    hourWrap.append(colwrap2);
    hourWrap.append(colwrap3);
  }

  // Adds hour names for all timeblock rows
  var cls = $(".time-block");
  for (n = 0; n < 3; n++) {
    cls[n].append(hourArray[n] + "am");
  }
  for (n = 3; n < 9; n++) {
    cls[n].append(hourArray[n] + "pm");
  }

  // Check each row to see if they are past, present, or future hours
  // and colorcode them accordingly

  // For loop 1: hours 9am-12pm
  var colColor = $(".past");
  for (var i = 0; i < 4; i++) {
    if (hourArray[i] === moment().hour()) {
      $("#textbox" + (i + 1))
        .addClass("present")
        .removeClass("past future");
    } else if (hourArray[i] < moment().hour()) {
      $("#textbox" + (i + 1))
        .addClass("past")
        .removeClass("present future");
    } else if (hourArray[i] > moment().hour()) {
      $("#textbox" + (i + 1))
        .addClass("future")
        .removeClass("past present");
    }
  }
  // For loop 2: hours 1pm-5pm
  for (var i = 4; i < 9; i++) {
    if (hourArray[i] + 12 === moment().hour()) {
      $("#textbox" + (i + 1))
        .addClass("present")
        .removeClass("past future");
    } else if (hourArray[i] + 12 < moment().hour()) {
      $("#textbox" + (i + 1))
        .addClass("past")
        .removeClass("present future");
    } else if (hourArray[i] + 12 > moment().hour()) {
      $("#textbox" + (i + 1))
        .addClass("future")
        .removeClass("past present");
    }
  }

// Individual save buttons for storing their respective text boxes' input values in localStorage
  //9AM
  $("#saveBtn1").on("click", function() {
    var event1 = $("#textbox1").val();
    localStorage.setItem("input1", event1);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
  $(window).on("beforeunload", function(){
    $("#textbox1").append(localStorage.getItem("input1"));
  });

  //10AM
  $("#saveBtn2").on("click", function() {
    var event2 = $("#textbox2").val();
    localStorage.setItem("input2", event2);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
  //11AM
  $("#saveBtn3").on("click", function() {
    var event3 = $("#textbox3").val();
    localStorage.setItem("input3", event3);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
  //12PM
  $("#saveBtn4").on("click", function() {
    var event4 = $("#textbox4").val();
    localStorage.setItem("input4", event4);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
  //1PM
  $("#saveBtn5").on("click", function() {
    var event5 = $("#textbox5").val();
    localStorage.setItem("input5", event5);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
  //2PM
  $("#saveBtn6").on("click", function() {
    var event6 = $("#textbox6").val();
    localStorage.setItem("input6", event6);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
  //3PM
  $("#saveBtn7").on("click", function() {
    var event7 = $("#textbox7").val();
    localStorage.setItem("input7", event7);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
  //4PM
  $("#saveBtn8").on("click", function() {
    var event8 = $("#textbox8").val();
    localStorage.setItem("input8", event8);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
  //5PM
  $("#saveBtn9").on("click", function() {
    var event9 = $("#textbox9").val();
    localStorage.setItem("input9", event9);
    alert("Event saved in local storage");
      console.log("Event saved in local storage");
  });
});
