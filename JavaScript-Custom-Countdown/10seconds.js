/* 
Alternative method to set timer,
useful in instances where the time needs to immediately reset,
or when the function needs to break.
*/

function setTimer(boolean) {
  if (boolean === true) {
    boolean = false;
    timer = 10;
  }
  document.getElementById("timer").innerHTML = timer;
  if (timer === 0) {
    $("#modal").hide();
    $("#modal-overlay").hide();
  } else {
    timer--;
    setTimeout(setTimer, 1000);
  }
  $("#close-button").click(function(){
    timer = 0;
    setTimeout(setTimer, 0);
  });
}
setTimer(true);
