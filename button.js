var button_straight = document.getElementById("straight");
var button_left = document.getElementById("left");
var button_right = document.getElementById("right");
var button_backward = document.getElementById("backward");
var button_up = document.getElementById("speed_up");
var button_down = document.getElementById("speed_down");
var button_turn_left = document.getElementById("turn_left");
var button_turn_right = document.getElementById("turn_right");
var button_backleft = document.getElementById("back_left");
var button_backright = document.getElementById("back_right");

var isHoldingStraight = false;
var isHoldingLeft = false;
var isHoldingRight = false;
var isHoldingBackward = false;
var isHoldingSpeedUp = false;
var isHoldingSpeedDown = false;
var isHoldingTurnLeft = false;
var isHoldingTurnRight = false;
var isHoldingBackleft = false;
var isHoldingBackright = false;

button_straight.addEventListener("mousedown", startHoldstraight);
button_straight.addEventListener("mouseup", stopHoldstraight);
button_left.addEventListener("mousedown", startHoldleft);
button_left.addEventListener("mouseup", stopHoldleft);
button_right.addEventListener("mousedown", startHoldright);
button_right.addEventListener("mouseup", stopHoldright);
button_backward.addEventListener("mousedown", startHoldbackward);
button_backward.addEventListener("mouseup", stopHoldbackward);
button_up.addEventListener("mousedown", startHoldspeedup);
button_up.addEventListener("mouseup", stopHoldspeedup);
button_down.addEventListener("mousedown", startHoldspeeddown);
button_down.addEventListener("mouseup", stopHoldspeeddown);
button_turn_left.addEventListener("mousedown", startHoldturnleft);
button_turn_left.addEventListener("mouseup", stopHoldturnleft);
button_turn_right.addEventListener("mousedown", startHoldturnright);
button_turn_right.addEventListener("mouseup", stopHoldturnright);
button_backleft.addEventListener("mousedown", startHoldbackleft);
button_backleft.addEventListener("mouseup", stopHoldbackleft);
button_backright.addEventListener("mousedown", startHoldbackright);
button_backright.addEventListener("mouseup", stopHoldbackright);

function startHoldstraight() {
  isHoldingStraight = true;
  console.log("Holding straight button");
  holdStraightAction();
}
function stopHoldstraight() {
  isHoldingStraight = false;
  console.log("Released straight button");
}
function holdStraightAction() {  
  if (isHoldingStraight) {
    console.log("car running");
    setTimeout(holdStraightAction, 1);
    }
}


function startHoldleft() {
  isHoldingLeft = true;
  console.log("Holding left button");
  holdLeftAction();
}
function stopHoldleft() {    
  isHoldingLeft = false;
  console.log("Released left button");
}
function holdLeftAction() {
  if (isHoldingLeft) {
    console.log("car turning left");
    setTimeout(holdLeftAction, 1);
  }
}


function startHoldright() {
  isHoldingRight = true;
  console.log("Holding right button");
  holdRightAction();
}
function stopHoldright() {
  isHoldingRight = false;
  console.log("Released right button");
}
function holdRightAction() {
  if (isHoldingRight) {
    console.log("car turning right");
    setTimeout(holdRightAction, 1);
  }
}


function startHoldbackward() {
  isHoldingBackward = true;
  console.log("Holding backward button");
  holdBackwardAction();
}
function stopHoldbackward() {
  isHoldingBackward = false;
  console.log("Released backward button");
}
function holdBackwardAction() {
  if (isHoldingBackward) {
    console.log("car going backward");
    setTimeout(holdBackwardAction, 1);
    }
}


function startHoldspeedup() {
  isHoldingSpeedUp = true;
  console.log("Holding speed up button");
  holdSpeedUpAction();
}
function stopHoldspeedup() {
  isHoldingSpeedUp = false;
  console.log("Released speed up button");
}
function holdSpeedUpAction() {
  if (isHoldingSpeedUp) {
    console.log("car speeding up");
    setTimeout(holdSpeedUpAction, 1);
    }
}


function startHoldspeeddown() {
  isHoldingSpeedDown = true;
  console.log("Holding speed down button");
  holdSpeedDownAction();
}
function stopHoldspeeddown() {
  isHoldingSpeedDown = false;
  console.log("Released speed down button");
}
function holdSpeedDownAction() {
  if (isHoldingSpeedDown) {
    console.log("car slowing down");
    setTimeout(holdSpeedDownAction, 1);
    }
}


function startHoldturnleft() {
  isHoldingTurnLeft = true;
  console.log("Holding turn left button");
  holdTurnLeftAction();
}
function stopHoldturnleft() {
  isHoldingTurnLeft = false;
  console.log("Released turn left button");
}
function holdTurnLeftAction() {
  if (isHoldingTurnLeft) {
    console.log("car turning left");
    setTimeout(holdTurnLeftAction, 1);
    }
}


function startHoldturnright() {
  isHoldingTurnRight = true;
  console.log("Holding turn right button");
  holdTurnRightAction();
}
function stopHoldturnright() {
  isHoldingTurnRight = false;
  console.log("Released turn right button");
}
function holdTurnRightAction() {
  if (isHoldingTurnRight) {
    console.log("car turning right");
    setTimeout(holdTurnRightAction, 1);
    }
}


function startHoldbackleft() {
  isHoldingBackleft = true;
  console.log("Holding back left button");
  holdBackLeftAction();
}
function stopHoldbackleft() {
  isHoldingBackleft = false;
  console.log("Released back left button");
}
function holdBackLeftAction() {
  if (isHoldingBackleft) {
    console.log("car going backward and turning left");
    setTimeout(holdBackLeftAction, 1);
    }
}


function startHoldbackright() {
  isHoldingBackright = true;
  console.log("Holding back right button");
  holdBackRightAction();
}
function stopHoldbackright() {
  isHoldingBackright = false;
  console.log("Released back right button");
}
function holdBackRightAction() {
  if (isHoldingBackright) {
    console.log("car going backward and turning right");
    setTimeout(holdBackRightAction, 1);
    }
}