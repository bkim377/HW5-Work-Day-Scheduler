// hourArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// var wrapper = document.getElementById("main-body");

// for (var i = 0; i < hourArray.length; i++) {
//     timeWrapper = document.createElement("div");
//     timeWrapper.classList.add("container");

//     // A div row containing each timeblock
//     var hourWrap = document.createElement("div");
//     hourWrap.classList.add("row");
//     // A div for the first column
//     var colwrap1 = document.createElement("div");
//     colwrap1.classList.add("col-lg-2 time-block hour row");
//     // A div for the second column (where you enter text)
//     var colwrap2 = document.createElement("textarea");
//     colwrap2.classList.add("col-lg-9 row");
//     // A div for the third column (save button)
//     var colwrap3 = document.createElement("div");
//     colwrap3.classList.add("col-lg-1 saveBtn");

//     timeWrapper.appendChild(hourWrap);
//     timeWrapper.appendChild(colwrap1);
//     timeWrapper.appendChild(colwrap2);
//     timeWrapper.appendChild(colwrap3);
//     wrapper.appendChild(timeWrapper);

//     // adds new class name to each div to reference later for showing/hiding individually
//     var cls = document.getElementsByClassName("time-block");
//     for (n = 0; n < hourArray.length; n++) {
//       cls[n].id("div_" + (n + 1));
//     }
// }

n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("currentDay").innerHTML = m + "/" + d + "/" + y;


$(document).ready(function() {
  $("saveBtn").hover(
    function() {
      $(this).classList.add("i:hover");
    },
    function() {
      $(this).classList.remove("i:hover");
    }
  );
});
