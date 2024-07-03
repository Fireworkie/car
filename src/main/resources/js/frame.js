
var iframe = document.getElementById("myiframe");
var touchStartX = 0;
var touchStartY = 0;
var touchEndY = 0;
var touchEndX = 0;
var isTouching = false;
var timer;
var swipeDistanceX = 0;
var swipeDistanceY = 0;
function fun(swipeDistanceX, swipeDistanceY) {
  if(swipeDistanceX>5){
    startHoldservobutton("servo_right");
  } else if(swipeDistanceX<-5){
    startHoldservobutton("servo_left");
  }else {
    stopservo("servo_left");
  }
  if(swipeDistanceY>3){
    startHoldservobutton("servo_down");
  } else if(swipeDistanceY<-3){
    startHoldservobutton("servo_up");
  }else {
    stopservo("servo_up");
  }
}

iframe.contentWindow.document.addEventListener(
  "touchstart",
  function (event) {
    touchStartX = event.touches[0].pageX;
    touchStartY = event.touches[0].pageY;
    // console.log("手指按下");
    isTouching = true;
    timer = setInterval(function() {
      if (isTouching) {
        swipeDistanceX = touchEndX - touchStartX;
        swipeDistanceY = touchEndY - touchStartY;
        // 输出手指位置
        // console.log("手指位置：", swipeDistanceX, swipeDistanceY);
        fun(swipeDistanceX, swipeDistanceY);
        touchStartX=touchEndX;
        touchStartY=touchEndY;
      }
    }, 100); // 设置检测间隔为 0.1 秒
  }
);

iframe.contentWindow.document.addEventListener(
  "touchmove",
  function (event) {
    touchEndX = event.touches[0].pageX;
    touchEndY = event.touches[0].pageY;
  }
);

iframe.contentWindow.document.addEventListener(
  "touchend",
  function (event) {
    // console.log("手指抬起");
    stopservo("servo_left");
    isTouching = false;
    clearInterval(timer);
  }
);

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

function stopservo(buttonid) {
  $.ajax({
      url: 'servostop',
      type: 'GET',
      data: {
          buttonid: buttonid
      }
  });
}