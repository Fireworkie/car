var button_servo_up = document.getElementById("servo_up");
var button_servo_down = document.getElementById("servo_down");
var button_servo_left = document.getElementById("servo_left");
var button_servo_right = document.getElementById("servo_right");

button_servo_up.addEventListener("mousedown", function () {
    startHoldservobutton("servo_up")
});
button_servo_up.addEventListener("mouseup", function () {
    stopHoldservobutton("servo_up")
});

button_servo_down.addEventListener("mousedown", function () {
    startHoldservobutton("servo_down")
});
button_servo_down.addEventListener("mouseup", function () {
    stopHoldservobutton("servo_down")
});

button_servo_left.addEventListener("mousedown", function () {
    startHoldservobutton("servo_left")
});
button_servo_left.addEventListener("mouseup", function () {
    stopHoldservobutton("servo_left")
});

button_servo_right.addEventListener("mousedown", function () {
    startHoldservobutton("servo_right")
});
button_servo_right.addEventListener("mouseup", function () {
    stopHoldservobutton("servo_right")
});

function startHoldservobutton(buttonid) {
    $.ajax({
        url: 'servomove',
        type: 'GET',
        data: {
            buttonid: buttonid
        }
    });
}

function stopHoldservobutton(buttonid) {
    $.ajax({
        url: 'servostop',
        type: 'GET',
        data: {
            buttonid: buttonid
        }
    });
}