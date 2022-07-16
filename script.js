const time = document.querySelector(".stopwatch .time");
const laps_container = document.querySelector(".laps");
const seq_container = document.querySelector(".seq");
const butt1 = document.querySelector(".stopwatch .controls #start_stop");
const butt2 = document.querySelector(".stopwatch .controls #reset_lap");
const start_stop_button = document.getElementById("start_stop");
const reset_lap_button = document.getElementById("reset_lap");

start_stop_button.addEventListener("click", start_stop);
reset_lap_button.addEventListener("click", reset_lap);

var mil = 0, sec = 0, min = 0, lap_cnt = 0;
var interval = null;

function start_stop() {
    if (!interval) {
        start();
        butt1.innerText = "Stop";
        butt2.innerText = "Lap";
        start_stop_button.style.backgroundColor = "red";
    }
    else {
        stop();
        butt1.innerText = "Start";
        butt2.innerText = "Reset";
        start_stop_button.style.backgroundColor = "#00D000";
    }
}

function reset_lap() {
    if (!interval) {
        reset();
    }
    else {
        lap();
    }
}

function timer() {
    time.innerText = get_time();
    mil++;
    if (mil == 100) {
        mil = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
}

function start() {
    interval = setInterval(timer, 10);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    mil = 0;
    sec = 0;
    min = 0;
    lap_cnt = 0;
    time.innerText = get_time();
    reset_laps();
}

function lap() {
    if (interval) {
        lap_cnt++;
        var num = document.createElement('p');
        num.innerText = lap_cnt;
        seq_container.appendChild(num);
        var lp = document.createElement('p');
        lp.innerText = get_time();
        laps_container.appendChild(lp);
    }
}

function reset_laps() {
    laps_container.innerHTML = "";
    seq_container.innerHTML = "";
}

function get_time() {
    return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + "." + (mil < 10 ? "0" + mil : mil);
}