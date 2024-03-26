var button_straight = document.getElementById("straight");
var button_left = document.getElementById("left");
var button_right = document.getElementById("right");
var button_backward = document.getElementById("backward");
var button_turn_left = document.getElementById("turn_left");
var button_turn_right = document.getElementById("turn_right");
var button_backleft = document.getElementById("back_left");
var button_backright = document.getElementById("back_right");


// var isHoldingButton = false;

button_straight.addEventListener("mousedown", function () { startHoldbutton("straight") });
button_straight.addEventListener("mouseup", function () { stopHoldbutton("straight") });
button_left.addEventListener("mousedown", function () { startHoldbutton("left") });
button_left.addEventListener("mouseup", function () { stopHoldbutton("left") });
button_right.addEventListener("mousedown", function () { startHoldbutton("right") });
button_right.addEventListener("mouseup", function () { stopHoldbutton("right") });
button_backward.addEventListener("mousedown", function () { startHoldbutton("backward") });
button_backward.addEventListener("mouseup", function () { stopHoldbutton("backward") });
button_turn_left.addEventListener("mousedown", function () { startHoldbutton("turn_left") });
button_turn_left.addEventListener("mouseup", function () { stopHoldbutton("turn_left") });
button_turn_right.addEventListener("mousedown", function () { startHoldbutton("turn_right") });
button_turn_right.addEventListener("mouseup", function () { stopHoldbutton("turn_right") });
button_backleft.addEventListener("mousedown", function () { startHoldbutton("back_left") });
button_backleft.addEventListener("mouseup", function () { stopHoldbutton("back_left") });
button_backright.addEventListener("mousedown", function () { startHoldbutton("back_right") });
button_backright.addEventListener("mouseup", function () { stopHoldbutton("back_right") });


function startHoldbutton(buttonid) {
    // isHoldingButton = true;
    // holdButtonAction(buttonid);
    $.ajax({
        url: 'runningcar',
        type: 'GET',
        data: { buttonid: buttonid }
    });
}
function stopHoldbutton(buttonid) {
    // isHoldingButton = false;
    $.ajax({
        url: 'stopcar',
        type: 'GET',
    });
}
// function holdButtonAction(buttonid) {
//     if (isHoldingButton) {
//         $.ajax({
//             url: 'executePython',
//             type: 'GET',
//             data: { buttonid: buttonid }
//         });
//         setTimeout(function () { holdButtonAction(buttonid) }, 10);
//     }
// }
