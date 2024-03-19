var button_straight = document.getElementById("straight");
var button_left = document.getElementById("left");
var button_right = document.getElementById("right");
var button_backward = document.getElementById("backward");

var isHoldingStraight = false;
var isHoldingLeft = false;
var isHoldingRight = false;
var isHoldingBackward = false;

button_straight.addEventListener("mousedown", startHoldstraight);
button_straight.addEventListener("mouseup", stopHoldstraight);
button_left.addEventListener("mousedown", startHoldleft);
button_left.addEventListener("mouseup", stopHoldleft);
button_right.addEventListener("mousedown", startHoldright);
button_right.addEventListener("mouseup", stopHoldright);
button_backward.addEventListener("mousedown", startHoldbackward);
button_backward.addEventListener("mouseup", stopHoldbackward);

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