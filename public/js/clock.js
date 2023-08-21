//script function to run the countdown clock on exercise page, supports stop and start buttons

let minute = document.getElementById("countDown").innerHTML.split(":")[1];
let second = document.getElementById("countDown").innerHTML.split(":")[2];
let count = 0;

function stopWatch() {
    if (timer) {
        count++;
        if (count == 100) {
            second--;
            count = 0;
        }
        if (second == 60) {
            second = 59;
        }
        if (second == 0 && minute == 0) {
            let zeroTime = "00:" + "00" + ":" + "00";
            document.getElementById("countDown").innerHTML = zeroTime;
            return;
        }
        if (second == 0 && minute != 0) {
            minute--;
            second = 60;
        }

        let sec = second;
        let min = minute;
        if (second < 10) {
            sec = "0" + second;
        }
        if (minute < 10 && minute.length < 2) {
            min = "0" + minute;
        }

        let countdownTime =
            "00:" +
            min +
            ":" +
            sec;

        document.getElementById("countDown").innerHTML = countdownTime;
        setTimeout(stopWatch, 10);
    }
}

let start = document.getElementById("startBtn").addEventListener('click', function () {
    timer = true;
    stopWatch();
});
let stopClock = document.getElementById("stopBtn").addEventListener('click', function () {
    timer = false;
});

