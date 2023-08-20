//script function to run the countdown clock on exercise page

let minute = document.getElementById("clock").innerHTML.split(":")[1];
let second = document.getElementById("clock").innerHTML.split(":")[2];
let count = 0;


function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second--;
            count = 0;
        }
        if(second == 60){
            second = 59;
        }
        if(second == 0 && minute == 0){
            minute = 0;
            second = 0;
        }
        if (second == 0 && minute != 0) {
            minute--;
            second = 60;
        }
        if (second < 10) {
            second = "0" + second;
        }

        let countdownTime =
            "00:" +
            minute +
            ":" +
            second;

        document.getElementById("clock").innerHTML = countdownTime;
        setTimeout(stopWatch, 10);
    }
}

start = document.getElementById("startBtn");
stop = document.getElementById("stopBtn");

if (start) {
    start.addEventListener('click', function () {
        timer = true;
        stopWatch();
    });
}
if (stop) {
    stop.addEventListener('click', function () {
        timer = false;
    });
}

