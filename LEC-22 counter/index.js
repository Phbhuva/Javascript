let count = 0;
let min = 0;
let hours = 0;

function addSeconds() {
     count++;
     if (count == 60) {
          addMinutes();
          count = 0;
     }
     if (min == 60) {
          addHours();
          min = 0;
     }
     if (hours == 12) {
          hours = 0;
     }
     
     count = (count < 10) ? "0" + count : count;
     document.getElementById("sec").innerHTML = count;
}

function addMinutes() {
     min++;
     min = (min < 10) ? "0" + min : min;
     document.getElementById("min").innerHTML = min;
}
function addHours() {
     hours++;
     hours = (hours < 10) ? "0" + hours : hours;
     document.getElementById("hours").innerHTML = hours;
}
setInterval(addSeconds, 1000)