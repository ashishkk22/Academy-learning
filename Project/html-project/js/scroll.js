// horizontal scroll for the div
var button = document.getElementById("scroll");
button.onclick = function () {
  var container = document.getElementById("cards");
  sideScroll(container, "right");
};

var back = document.getElementById("scroll-left");
back.onclick = function () {
  var container = document.getElementById("cards");
  sideScroll(container, "left");
};

function sideScroll(element, direction) {
  let speed = 25,
    distance = 230,
    step = 10;
  let scrollAmount = 0;
  var slideTimer = setInterval(function () {
    if (direction === "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
}

//timer for the deals of the day section
window.onload = function () {
  var minute = 58;
  var sec = 58;
  setInterval(function () {
    document.getElementById("timer").innerHTML = minute + ":" + sec;
    sec--;
    if (sec == 00) {
      minute--;
      sec = 60;

      if (minute == 0) {
        minute = 5;
      }
    }
  }, 1000);
};
