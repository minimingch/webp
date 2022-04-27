setInterval(startTime,1000);
function startTime(){
   var now = new Date();
   var hour = now.getHours();
   var minute = now.getMinutes();
   var second = now.getSeconds();
  minute = checkTime(minute);
  second = checkTime(second);
  document.getElementById('clock').innerHTML = hour + ":" + minute + ":" + second;
}

function checkTime(i){
  if(i < 10) {
    i = "0" + i;
  }
  return i;
}
